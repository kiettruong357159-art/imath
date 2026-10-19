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

    const existingRating = await tx.postRating.findFirst({
      where: { postId, ipHash },
    });

    if (existingRating) {
      await tx.postRating.update({
        where: { id: existingRating.id },
        data: { stars: clampedStars },
      });
    } else {
      await tx.postRating.create({
        data: {
          postId,
          stars: clampedStars,
          ipHash,
        },
      });
    }

    const agg = await tx.postRating.aggregate({
      where: { postId },
      _sum: { stars: true },
      _count: { _all: true },
    });

    // Include baseline 1 vote of 5.0 stars seeded with each post
    const totalCount = 1 + agg._count._all;
    const sumStars = 5 + (agg._sum.stars || 0);
    const avg = Number((sumStars / totalCount).toFixed(1));

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
    const [postCount, childCount] = await Promise.all([
      tx.post.count({ where: { categoryId } }),
      tx.category.count({ where: { parentId: categoryId } }),
    ]);
    if (postCount > 0 || childCount > 0) {
      throw new Error('CATEGORY_IN_USE');
    }
    return tx.category.delete({ where: { id: categoryId } });
  });
}
