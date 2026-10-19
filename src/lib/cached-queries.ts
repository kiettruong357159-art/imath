import { cache } from 'react';
import { prisma } from './prisma';

export const postCardSelect = {
  id: true,
  slug: true,
  title: true,
  excerpt: true,
  featuredImage: true,
  gradeSlug: true,
  viewCount: true,
  ratingAvg: true,
  ratingCount: true,
  publishedAt: true,
  category: {
    select: {
      id: true,
      name: true,
      slug: true,
      fullPath: true,
    },
  },
} as const;

export const docCardSelect = {
  id: true,
  slug: true,
  title: true,
  excerpt: true,
  featuredImage: true,
  gradeSlug: true,
  gradeName: true,
  topicSlug: true,
  topicName: true,
  viewCount: true,
  downloadCount: true,
  ratingAvg: true,
  ratingCount: true,
  publishedAt: true,
} as const;

export const getCachedHubPage = cache(async (slug: string) => {
  return prisma.hubPage.findUnique({ where: { slug } });
});

export const getCachedPostBySlug = cache(async (slug: string) => {
  return prisma.post.findFirst({
    where: { slug, status: 'PUBLISHED' },
    include: {
      category: true,
      comments: {
        where: { isApproved: true },
        orderBy: { createdAt: 'desc' },
        take: 20,
      },
    },
  });
});

export const getCachedCategoryByPathOrSlug = cache(async (slugOrPath: string) => {
  const clean = slugOrPath.replace(/^\/|\/$/g, '');
  const parts = clean.split('/');
  return prisma.category.findFirst({
    where: {
      isActive: true,
      OR: parts.length === 1 ? [{ fullPath: clean }, { slug: clean }] : [{ fullPath: clean }],
    },
  });
});

export const getCachedDocumentBySlug = cache(async (slug: string) => {
  return prisma.mathDocument.findFirst({
    where: { slug, status: 'PUBLISHED' },
  });
});
