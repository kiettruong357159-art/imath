import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';

const prisma = new PrismaClient();

async function main() {
  console.log('Exporting data from SQLite...');
  const roles = await prisma.role.findMany();
  const users = await prisma.user.findMany();
  const categories = await prisma.category.findMany();
  const posts = await prisma.post.findMany();
  const documents = await prisma.mathDocument.findMany();
  const tools = await prisma.interactiveTool.findMany();
  const hubPages = await prisma.hubPage.findMany();
  const postRatings = await prisma.postRating.findMany();
  const comments = await prisma.comment.findMany();

  const data = {
    roles,
    users,
    categories,
    posts,
    documents,
    tools,
    hubPages,
    postRatings,
    comments,
  };

  const outPath = path.join(process.cwd(), 'prisma', 'sqlite_dump.json');
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`Exported successfully:
  - Roles: ${roles.length}
  - Users: ${users.length}
  - Categories: ${categories.length}
  - Posts: ${posts.length}
  - MathDocuments: ${documents.length}
  - InteractiveTools: ${tools.length}
  - HubPages: ${hubPages.length}
  - PostRatings: ${postRatings.length}
  - Comments: ${comments.length}
Saved to ${outPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
