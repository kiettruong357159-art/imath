import { describe, it, expect, beforeEach } from 'vitest';
import { prisma } from '../src/lib/prisma';
import { ratePostAtomic, deleteCategorySafe } from '../src/lib/admin-services';

describe('Transactional Integrity & Safe Delete Guards', () => {
  beforeEach(async () => {
    await prisma.postRating.deleteMany({ where: { ipHash: 'test-ip' } });
  });

  it('recalculates ratingAvg and ratingCount atomically inside $transaction', async () => {
    const post = await prisma.post.findFirst();
    expect(post).not.toBeNull();
    if (!post) return;
    const updated = await ratePostAtomic(post.id, 5, 'test-ip');
    expect(updated.ratingCount).toBeGreaterThanOrEqual(1);
    expect(updated.ratingAvg).toBeGreaterThan(0);
  });

  it('blocks hard deletion of a category that has posts', async () => {
    const catWithPosts = await prisma.category.findFirst({ where: { posts: { some: {} } } });
    expect(catWithPosts).not.toBeNull();
    if (!catWithPosts) return;
    await expect(deleteCategorySafe(catWithPosts.id)).rejects.toThrow('CATEGORY_IN_USE');
  });
});
