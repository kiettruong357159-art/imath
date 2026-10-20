import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';

const prisma = new PrismaClient();

async function main() {
  const dumpPath = path.join(process.cwd(), 'prisma', 'sqlite_dump.json');
  if (!fs.existsSync(dumpPath)) {
    throw new Error('sqlite_dump.json not found!');
  }

  const raw = fs.readFileSync(dumpPath, 'utf-8');
  const data = JSON.parse(raw);

  console.log('--- Starting import to Neon PostgreSQL ---');

  // 1. Roles
  console.log(`Importing ${data.roles.length} roles...`);
  for (const role of data.roles) {
    await prisma.role.upsert({
      where: { id: role.id },
      create: {
        ...role,
        createdAt: new Date(role.createdAt),
        updatedAt: new Date(role.updatedAt),
      },
      update: {},
    });
  }

  // 2. Categories
  // First insert without parentId to avoid foreign key violation if parent is inserted later
  console.log(`Importing ${data.categories.length} categories...`);
  for (const cat of data.categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      create: {
        id: cat.id,
        wpId: cat.wpId,
        slug: cat.slug,
        fullPath: cat.fullPath,
        name: cat.name,
        description: cat.description ?? '',
        isActive: cat.isActive ?? true,
        createdAt: new Date(cat.createdAt),
        updatedAt: new Date(cat.updatedAt),
      },
      update: {},
    });
  }
  // Then update parentId
  for (const cat of data.categories) {
    if (cat.parentId) {
      await prisma.category.update({
        where: { id: cat.id },
        data: { parentId: cat.parentId },
      });
    }
  }

  // 3. Users
  console.log(`Importing ${data.users.length} users...`);
  for (const user of data.users) {
    await prisma.user.upsert({
      where: { id: user.id },
      create: {
        ...user,
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt),
      },
      update: {},
    });
  }

  // 4. Posts
  console.log(`Importing ${data.posts.length} posts...`);
  for (const post of data.posts) {
    await prisma.post.upsert({
      where: { id: post.id },
      create: {
        ...post,
        publishedAt: new Date(post.publishedAt),
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
      },
      update: {},
    });
  }

  // 5. MathDocuments
  console.log(`Importing ${data.documents.length} math documents...`);
  for (const doc of data.documents) {
    await prisma.mathDocument.upsert({
      where: { id: doc.id },
      create: {
        ...doc,
        publishedAt: new Date(doc.publishedAt),
        createdAt: new Date(doc.createdAt),
        updatedAt: new Date(doc.updatedAt),
      },
      update: {},
    });
  }

  // 6. InteractiveTools
  console.log(`Importing ${data.tools.length} interactive tools...`);
  for (const tool of data.tools) {
    await prisma.interactiveTool.upsert({
      where: { id: tool.id },
      create: {
        ...tool,
        createdAt: new Date(tool.createdAt),
        updatedAt: new Date(tool.updatedAt),
      },
      update: {},
    });
  }

  // 7. HubPages
  console.log(`Importing ${data.hubPages.length} hub pages...`);
  for (const hp of data.hubPages) {
    await prisma.hubPage.upsert({
      where: { id: hp.id },
      create: {
        ...hp,
        updatedAt: new Date(hp.updatedAt),
      },
      update: {},
    });
  }

  // 8. PostRatings
  if (data.postRatings && data.postRatings.length > 0) {
    console.log(`Importing ${data.postRatings.length} post ratings...`);
    for (const rating of data.postRatings) {
      await prisma.postRating.upsert({
        where: { id: rating.id },
        create: {
          ...rating,
          createdAt: new Date(rating.createdAt),
        },
        update: {},
      });
    }
  }

  // 9. Comments
  if (data.comments && data.comments.length > 0) {
    console.log(`Importing ${data.comments.length} comments...`);
    for (const comment of data.comments) {
      await prisma.comment.upsert({
        where: { id: comment.id },
        create: {
          ...comment,
          createdAt: new Date(comment.createdAt),
        },
        update: {},
      });
    }
  }

  console.log('--- Verification ---');
  console.log('Roles:', await prisma.role.count());
  console.log('Categories:', await prisma.category.count());
  console.log('Users:', await prisma.user.count());
  console.log('Posts:', await prisma.post.count());
  console.log('MathDocuments:', await prisma.mathDocument.count());
  console.log('InteractiveTools:', await prisma.interactiveTool.count());
  console.log('HubPages:', await prisma.hubPage.count());
  console.log('PostRatings:', await prisma.postRating.count());
  console.log('Comments:', await prisma.comment.count());
  console.log('--- Import completed successfully! ---');
}

main()
  .catch((e) => {
    console.error('Import error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
