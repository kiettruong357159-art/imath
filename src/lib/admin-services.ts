import { prisma } from './prisma';

const VALID_POST_TRANSITIONS: Record<string, string[]> = {
  DRAFT: ['PUBLISHED', 'ARCHIVED'],
  PUBLISHED: ['DRAFT', 'ARCHIVED'],
  ARCHIVED: ['DRAFT', 'PUBLISHED'],
};

export function assertValidStatusTransition(currentStatus: string, nextStatus: string): void {
  if (currentStatus === nextStatus) return;
  const allowed = VALID_POST_TRANSITIONS[currentStatus] || [];
  if (!allowed.includes(nextStatus)) {
    throw new Error(`INVALID_STATUS_TRANSITION:${currentStatus}->${nextStatus}`);
  }
}

export async function ratePostAtomic(postId: string, stars: number, ipHash: string) {
  const clampedStars = Math.min(5, Math.max(1, Math.round(stars)));

  return prisma.$transaction(async (tx) => {
    const post = await tx.post.findUnique({ where: { id: postId } });
    if (!post) {
      throw new Error('POST_NOT_FOUND');
    }

    await tx.postRating.create({
      data: {
        postId,
        stars: clampedStars,
        ipHash,
      },
    });

    const agg = await tx.postRating.aggregate({
      where: { postId },
      _avg: { stars: true },
      _count: { _all: true },
    });

    const totalCount = agg._count._all;
    const avg = agg._avg.stars ? Number(agg._avg.stars.toFixed(1)) : 5.0;

    return tx.post.update({
      where: { id: postId },
      data: {
        ratingAvg: avg,
        ratingCount: totalCount,
      },
      select: {
        id: true,
        ratingAvg: true,
        ratingCount: true,
      },
    });
  });
}

export async function deleteCategorySafe(categoryId: string) {
  return prisma.$transaction(async (tx) => {
    const postCount = await tx.post.count({ where: { categoryId } });
    if (postCount > 0) {
      throw new Error('CATEGORY_IN_USE');
    }
    return tx.category.delete({ where: { id: categoryId } });
  });
}
