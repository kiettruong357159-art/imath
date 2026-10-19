import { describe, it, expect, beforeEach } from 'vitest';
import { prisma } from '../src/lib/prisma';
import { ratePostAtomic, deleteCategorySafe } from '../src/lib/admin-services';

describe('Transactional Integrity & Safe Delete Guards', () => {
  beforeEach(async () => {
    await prisma.postRating.deleteMany({ where: { ipHash: 'test-ip' } });
    await prisma.postRating.deleteMany({ where: { ipHash: 'test-ip-dup' } });
  });

  it('recalculates ratingAvg and ratingCount atomically and deduplicates same ipHash', async () => {
    const post = await prisma.post.findFirst();
    expect(post).not.toBeNull();
    if (!post) return;
    const first = await ratePostAtomic(post.id, 4, 'test-ip-dup');
    const secondSameIp = await ratePostAtomic(post.id, 5, 'test-ip-dup');
    expect(secondSameIp.ratingCount).toBe(first.ratingCount);
    expect(secondSameIp.ratingAvg).toBeGreaterThanOrEqual(4.5);
  });

  it('blocks hard deletion of a category that has posts or child categories', async () => {
    const catWithPosts = await prisma.category.findFirst({ where: { posts: { some: {} } } });
    expect(catWithPosts).not.toBeNull();
    if (!catWithPosts) return;
    await expect(deleteCategorySafe(catWithPosts.id)).rejects.toThrow('CATEGORY_IN_USE');
  });
});
