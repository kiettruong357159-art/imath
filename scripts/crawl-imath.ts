import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { prisma } from '../src/lib/prisma';
import { rewriteInternalUrls, stripHtmlTags, extractMainHtml } from '../src/lib/content-normalizer';

const BASE_URL = 'https://imath.vn';
const EDU_URL = 'https://edu.imath.vn';

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) iMathCloneCrawler/1.0',
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    console.warn(`[WARN] Failed to fetch ${url}:`, err);
    return null;
  }
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) iMathCloneCrawler/1.0',
        Accept: 'application/json',
      },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[WARN] Failed to fetch JSON ${url}:`, err);
    return null;
  }
}

async function ensureFileSaved(relPublicPath: string, content: string): Promise<void> {
  const fullPath = path.join(process.cwd(), 'public', relPublicPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, content, 'utf8');
}

async function seedRolesAndAdmin(): Promise<void> {
  console.log('1. Seeding RBAC Roles & Default Admin User...');
  const adminRole = await prisma.role.upsert({
    where: { code: 'ADMIN' },
    update: { name: 'Quản trị viên hệ thống', permissions: JSON.stringify(['*']) },
    create: { code: 'ADMIN', name: 'Quản trị viên hệ thống', permissions: JSON.stringify(['*']) },
  });

  await prisma.role.upsert({
    where: { code: 'TEACHER' },
    update: { name: 'Giáo viên', permissions: JSON.stringify(['posts:view', 'documents:view', 'tools:view']) },
    create: { code: 'TEACHER', name: 'Giáo viên', permissions: JSON.stringify(['posts:view', 'documents:view', 'tools:view']) },
  });

  await prisma.role.upsert({
    where: { code: 'STUDENT' },
    update: { name: 'Học sinh', permissions: JSON.stringify(['tools:view']) },
    create: { code: 'STUDENT', name: 'Học sinh', permissions: JSON.stringify(['tools:view']) },
  });

  const passwordHash = crypto.createHash('sha256').update('Admin@123').digest('hex');
  await prisma.user.upsert({
    where: { email: 'admin@imath.vn' },
    update: { fullName: 'Quản trị viên iMath', roleId: adminRole.id, passwordHash },
    create: {
      email: 'admin@imath.vn',
      fullName: 'Quản trị viên iMath',
      passwordHash,
      roleId: adminRole.id,
      isActive: true,
    },
  });
}

async function downloadImathStylesAndHubs(): Promise<void> {
  console.log('2. Downloading original imath.vn CSS bundle & Hub pages...');
  const homeHtml = await fetchText(`${BASE_URL}/`);
  let combinedCss = '';

  if (homeHtml) {
    const cssLinks = Array.from(
      homeHtml.matchAll(/<link[^>]*rel=['"]stylesheet['"][^>]*href=['"](https:\/\/imath\.vn\/[^'"]+\.css[^'"]*)['"]/gi)
    ).map((m) => m[1]);

    for (const cssUrl of cssLinks) {
      const cssContent = await fetchText(cssUrl);
      if (cssContent) {
        combinedCss += `\n/* Source: ${cssUrl} */\n` + cssContent;
      }
    }
    await ensureFileSaved('imath-assets/css/imath-bundle.css', combinedCss);

    await prisma.hubPage.upsert({
      where: { slug: 'home' },
      update: {
        title: 'Học Toán Online Miễn Phí Lớp 1 Đến 12 - iMath',
        description: 'Học toán online miễn phí lớp 1 đến 12: luyện bài theo đúng tuần học trên lớp, phiếu bài tập có lời giải, ba mẹ xem kết quả của con.',
        mainHtml: extractMainHtml(homeHtml),
      },
      create: {
        slug: 'home',
        title: 'Học Toán Online Miễn Phí Lớp 1 Đến 12 - iMath',
        description: 'Học toán online miễn phí lớp 1 đến 12: luyện bài theo đúng tuần học trên lớp, phiếu bài tập có lời giải, ba mẹ xem kết quả của con.',
        mainHtml: extractMainHtml(homeHtml),
      },
    });
  }

  const hubUrls: Array<{ slug: string; pathUrl: string; title: string }> = [
    { slug: 'hoc-theo-lop', pathUrl: '/hoc-theo-lop/', title: 'Học Theo Lớp 1 Đến 12 - iMath' },
    { slug: 'hoc-theo-lop/lop-1', pathUrl: '/hoc-theo-lop/lop-1/', title: 'Toán Lớp 1 - Học Theo Tuần Chuẩn SGK' },
    { slug: 'hoc-theo-lop/lop-2', pathUrl: '/hoc-theo-lop/lop-2/', title: 'Toán Lớp 2 - Học Theo Tuần Chuẩn SGK' },
    { slug: 'hoc-theo-lop/lop-3', pathUrl: '/hoc-theo-lop/lop-3/', title: 'Toán Lớp 3 - Học Theo Tuần Chuẩn SGK' },
    { slug: 'hoc-theo-lop/lop-4', pathUrl: '/hoc-theo-lop/lop-4/', title: 'Toán Lớp 4 - Học Theo Tuần Chuẩn SGK' },
    { slug: 'hoc-theo-lop/lop-5', pathUrl: '/hoc-theo-lop/lop-5/', title: 'Toán Lớp 5 - Học Theo Tuần Chuẩn SGK' },
    { slug: 'goc-phu-huynh', pathUrl: '/goc-phu-huynh/', title: 'Góc Phụ Huynh - Đồng Hành Cùng Con Học Toán' },
    { slug: 'tien-ich', pathUrl: '/tien-ich/', title: 'Tiện Ích Học Toán Trực Quan Miễn Phí - iMath' },
    { slug: 'cau-do-vui', pathUrl: '/cau-do-vui/', title: 'Câu Đố Vui Tư Duy & Toán Học - iMath' },
    { slug: 'luyen-thi-vao-lop-6-truong-trong-diem', pathUrl: '/luyen-thi-vao-lop-6-truong-trong-diem/', title: 'Luyện Thi Vào Lớp 6 Trường Trọng Điểm - iMath' },
  ];

  for (const hub of hubUrls) {
    const html = await fetchText(`${BASE_URL}${hub.pathUrl}`);
    if (html) {
      await prisma.hubPage.upsert({
        where: { slug: hub.slug },
        update: { title: hub.title, mainHtml: extractMainHtml(html) },
        create: { slug: hub.slug, title: hub.title, mainHtml: extractMainHtml(html) },
      });
    }
  }
}

async function crawlInteractiveTools(): Promise<void> {
  console.log('3. Crawling all 24+ interactive math tools (/tienich/*) and their JS/CSS assets...');
  const toolFiles = [
    { file: '01-may-sinh-de.html', title: 'Máy Sinh Đề Toán Tự Động', group: 'BASIC', grade: 'all', icon: '🖨️' },
    { file: '02-cong-tru.html', title: 'Luyện Cộng Trừ Nhanh', group: 'BASIC', grade: 'lop-1', icon: '➕' },
    { file: '03-tinh-nham.html', title: 'Phản Xạ Tính Nhẩm Siêu Tốc', group: 'BASIC', grade: 'lop-2', icon: '⚡' },
    { file: '04-bang-cuu-chuong.html', title: 'Bảng Cửu Chương Tương Tác', group: 'BASIC', grade: 'lop-2', icon: '✖️' },
    { file: '05-tia-so.html', title: 'Tia Số Trực Quan', group: 'BASIC', grade: 'lop-1', icon: '📏' },
    { file: '06-bang-hoc-thong-minh.html', title: 'Bảng Học Thông Minh 100 Số', group: 'BASIC', grade: 'lop-1', icon: '🔢' },
    { file: '07-xem-gio.html', title: 'Đồng Hồ Tập Xem Giờ', group: 'BASIC', grade: 'lop-1', icon: '🕒' },
    { file: '08-toan-lop-1.html', title: 'Luyện Toán Lớp 1 Trực Tuyến', group: 'BASIC', grade: 'lop-1', icon: '1️⃣' },
    { file: '09-toan-lop-2.html', title: 'Luyện Toán Lớp 2 Trực Tuyến', group: 'BASIC', grade: 'lop-2', icon: '2️⃣' },
    { file: '10-toan-lop-3.html', title: 'Luyện Toán Lớp 3 Trực Tuyến', group: 'BASIC', grade: 'lop-3', icon: '3️⃣' },
    { file: '11-toan-lop-4.html', title: 'Luyện Toán Lớp 4 Trực Tuyến', group: 'BASIC', grade: 'lop-4', icon: '4️⃣' },
    { file: '12-toan-lop-5.html', title: 'Luyện Toán Lớp 5 Trực Tuyến', group: 'BASIC', grade: 'lop-5', icon: '5️⃣' },
    { file: '13-luyen-thi-hoc-sinh-gioi.html', title: 'Luyện Thi Học Sinh Giỏi Tiểu Học', group: 'ADVANCED', grade: 'lop-5', icon: '🏆' },
    { file: 'toan-loi-van.html', title: 'Toán Có Lời Văn & Sơ Đồ Đoạn Thẳng', group: 'ADVANCED', grade: 'lop-3', icon: '📝' },
    { file: 'hinh-hoc-dai-luong-truc-quan.html', title: 'Hình Học & Đại Lượng Trực Quan', group: 'ADVANCED', grade: 'lop-4', icon: '📐' },
    { file: 'cau-do-vui-lam-bai.html', title: 'Câu Đố Vui Tư Duy Logic & Tự Nhiên', group: 'PUZZLE', grade: 'all', icon: '🧩' },
    { file: 'cap2/toan-cap-2-truc-quan.html', title: 'Toán Cấp 2 Trực Quan (Lớp 6 - 9 & Ôn vào 10 CLC)', group: 'CAP2', grade: 'lop-6', icon: '📊' },
  ];

  const downloadedAssets = new Set<string>();

  for (let idx = 0; idx < toolFiles.length; idx++) {
    const t = toolFiles[idx];
    const url = `${BASE_URL}/tienich/${t.file}`;
    const html = await fetchText(url);
    if (!html) continue;

    // Rewrite links inside tool HTML
    const normalizedHtml = rewriteInternalUrls(html);
    await ensureFileSaved(`tienich/${t.file}`, normalizedHtml);

    // Discover relative scripts and stylesheets referenced by this tool
    const baseDir = path.posix.dirname(t.file);
    const assetRefs = Array.from(
      html.matchAll(/(?:src|href)=['"]([^'"]+\.(?:js|css|json)(?:\?[^'"]*)?)['"]/gi)
    ).map((m) => m[1]);

    for (const ref of assetRefs) {
      if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('//')) continue;
      const cleanRef = ref.split('?')[0].replace(/^\.\//, '');
      const relAssetPath = baseDir === '.' ? cleanRef : path.posix.join(baseDir, cleanRef);
      if (downloadedAssets.has(relAssetPath)) continue;
      downloadedAssets.add(relAssetPath);

      const assetContent = await fetchText(`${BASE_URL}/tienich/${relAssetPath}`);
      if (assetContent) {
        await ensureFileSaved(`tienich/${relAssetPath}`, assetContent);
      }
    }

    const slug = t.file.replace(/\.html$/, '').replace(/\//g, '-');
    await prisma.interactiveTool.upsert({
      where: { slug },
      update: {
        title: t.title,
        groupCode: t.group,
        gradeSlug: t.grade,
        toolUrl: `/tienich/${t.file}`,
        iconText: t.icon,
        sortOrder: idx + 1,
      },
      create: {
        slug,
        title: t.title,
        description: `Công cụ tương tác ${t.title} miễn phí trên trình duyệt, sinh đề tự động và chấm điểm tức thì.`,
        groupCode: t.group,
        gradeSlug: t.grade,
        toolUrl: `/tienich/${t.file}`,
        iconText: t.icon,
        sortOrder: idx + 1,
      },
    });
  }

  // Also register query-parameterized Grade 6-9 & CLC tools in InteractiveTool table so all 24 sitemap tools appear
  const extraTools = [
    { slug: 'toan-lop-6-truc-quan', title: 'Toán Lớp 6 Trực Quan', group: 'CAP2', grade: 'lop-6', url: '/tienich/cap2/toan-cap-2-truc-quan.html?lop=6', icon: '6️⃣', order: 20 },
    { slug: 'toan-lop-7-truc-quan', title: 'Toán Lớp 7 Trực Quan', group: 'CAP2', grade: 'lop-7', url: '/tienich/cap2/toan-cap-2-truc-quan.html?lop=7', icon: '7️⃣', order: 21 },
    { slug: 'toan-lop-8-truc-quan', title: 'Toán Lớp 8 Trực Quan', group: 'CAP2', grade: 'lop-8', url: '/tienich/cap2/toan-cap-2-truc-quan.html?lop=8', icon: '8️⃣', order: 22 },
    { slug: 'toan-lop-9-truc-quan', title: 'Toán Lớp 9 Trực Quan', group: 'CAP2', grade: 'lop-9', url: '/tienich/cap2/toan-cap-2-truc-quan.html?lop=9', icon: '9️⃣', order: 23 },
    { slug: 'on-thi-vao-lop-10-clc', title: 'Ôn Thi Vào Lớp 10 CLC', group: 'CAP2', grade: 'lop-9', url: '/tienich/cap2/toan-cap-2-truc-quan.html?che-do=clc', icon: '🏅', order: 24 },
  ];

  for (const et of extraTools) {
    await prisma.interactiveTool.upsert({
      where: { slug: et.slug },
      update: { title: et.title, groupCode: et.group, gradeSlug: et.grade, toolUrl: et.url, iconText: et.icon, sortOrder: et.order },
      create: {
        slug: et.slug,
        title: et.title,
        description: `Mô phỏng trực quan ${et.title} theo chương trình mới.`,
        groupCode: et.group,
        gradeSlug: et.grade,
        toolUrl: et.url,
        iconText: et.icon,
        sortOrder: et.order,
      },
    });
  }
}

async function crawlEduAndArenaAssets(): Promise<void> {
  console.log('4. Crawling edu.imath.vn and edu.imath.vn/dau-truong/ standalone assets...');
  const arenaHtml = await fetchText(`${EDU_URL}/dau-truong/`);
  if (arenaHtml) {
    await ensureFileSaved('dau-truong-static/index.html', rewriteInternalUrls(arenaHtml));
  }
  const eduHtml = await fetchText(`${EDU_URL}/`);
  if (eduHtml) {
    await ensureFileSaved('edu-static/index.html', rewriteInternalUrls(eduHtml));
  }
}

interface WpTerm {
  id: number;
  name: string;
  slug: string;
  description: string;
  parent: number;
  link: string;
}

interface WpPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories?: number[];
  imath_document_grade?: number[];
  imath_document_topic?: number[];
  yoast_head_json?: { og_image?: Array<{ url: string }> };
}

async function crawlWpCategoriesAndPosts(): Promise<void> {
  console.log('5. Fetching Categories, Grades, Topics, Posts (~323), and MathDocuments (~245) from WP REST API...');
  const categories = (await fetchJson<WpTerm[]>(`${BASE_URL}/wp-json/wp/v2/categories?per_page=100`)) || [];
  const docGrades = (await fetchJson<WpTerm[]>(`${BASE_URL}/wp-json/wp/v2/imath_document_grade?per_page=100`)) || [];
  const docTopics = (await fetchJson<WpTerm[]>(`${BASE_URL}/wp-json/wp/v2/imath_document_topic?per_page=100`)) || [];

  const wpCatIdToDbId = new Map<number, string>();
  const gradeIdToTerm = new Map<number, WpTerm>(docGrades.map((g) => [g.id, g]));
  const topicIdToTerm = new Map<number, WpTerm>(docTopics.map((t) => [t.id, t]));

  for (const cat of categories) {
    let fullPath = cat.slug;
    try {
      const u = new URL(cat.link);
      fullPath = u.pathname.replace(/^\/|\/$/g, '') || cat.slug;
    } catch {
      fullPath = cat.slug;
    }
    const saved = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        wpId: cat.id,
        name: stripHtmlTags(cat.name),
        description: stripHtmlTags(cat.description || ''),
        fullPath,
      },
      create: {
        wpId: cat.id,
        slug: cat.slug,
        fullPath,
        name: stripHtmlTags(cat.name),
        description: stripHtmlTags(cat.description || ''),
      },
    });
    wpCatIdToDbId.set(cat.id, saved.id);
  }

  // Fetch all pages of Posts
  let totalPostsSaved = 0;
  for (let page = 1; page <= 6; page++) {
    const posts = await fetchJson<WpPost[]>(`${BASE_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}`);
    if (!posts || !Array.isArray(posts) || posts.length === 0) break;

    for (const p of posts) {
      const firstWpCat = p.categories && p.categories.length > 0 ? p.categories[0] : undefined;
      const categoryId = firstWpCat ? wpCatIdToDbId.get(firstWpCat) ?? null : null;
      const cleanContent = rewriteInternalUrls(p.content?.rendered || '');
      const imgMatch = cleanContent.match(/<img[^>]+src=['"]([^'"]+)['"]/i);
      const featuredImage = imgMatch ? imgMatch[1] : 'https://imath.vn/wp-content/uploads/2026/09/hero-math-world-2026-1024x341.webp';

      let gradeSlug = '';
      for (let g = 1; g <= 12; g++) {
        if (p.slug.includes(`lop-${g}`)) {
          gradeSlug = `lop-${g}`;
          break;
        }
      }

      await prisma.post.upsert({
        where: { slug: p.slug },
        update: {
          wpId: p.id,
          title: stripHtmlTags(p.title?.rendered || p.slug),
          excerpt: stripHtmlTags(p.excerpt?.rendered || '').slice(0, 320),
          content: cleanContent,
          featuredImage,
          gradeSlug,
          categoryId,
          publishedAt: p.date ? new Date(p.date) : new Date(),
        },
        create: {
          wpId: p.id,
          slug: p.slug,
          title: stripHtmlTags(p.title?.rendered || p.slug),
          excerpt: stripHtmlTags(p.excerpt?.rendered || '').slice(0, 320),
          content: cleanContent,
          featuredImage,
          gradeSlug,
          categoryId,
          publishedAt: p.date ? new Date(p.date) : new Date(),
        },
      });
      totalPostsSaved++;
    }
    console.log(`   -> Saved ${totalPostsSaved} posts so far (page ${page})...`);
  }

  // Fetch all pages of MathDocuments (imath_document)
  let totalDocsSaved = 0;
  for (let page = 1; page <= 5; page++) {
    const docs = await fetchJson<WpPost[]>(`${BASE_URL}/wp-json/wp/v2/imath_document?per_page=100&page=${page}`);
    if (!docs || !Array.isArray(docs) || docs.length === 0) break;

    for (const d of docs) {
      const gTerm = d.imath_document_grade?.[0] ? gradeIdToTerm.get(d.imath_document_grade[0]) : undefined;
      const tTerm = d.imath_document_topic?.[0] ? topicIdToTerm.get(d.imath_document_topic[0]) : undefined;
      const cleanContent = rewriteInternalUrls(d.content?.rendered || '');
      const imgMatch = cleanContent.match(/<img[^>]+src=['"]([^'"]+)['"]/i);
      const featuredImage = imgMatch ? imgMatch[1] : 'https://imath.vn/wp-content/uploads/2026/09/hero-math-world-2026-1024x341.webp';

      await prisma.mathDocument.upsert({
        where: { slug: d.slug },
        update: {
          wpId: d.id,
          title: stripHtmlTags(d.title?.rendered || d.slug),
          excerpt: stripHtmlTags(d.excerpt?.rendered || '').slice(0, 320),
          content: cleanContent,
          featuredImage,
          gradeSlug: gTerm?.slug || '',
          gradeName: stripHtmlTags(gTerm?.name || ''),
          topicSlug: tTerm?.slug || '',
          topicName: stripHtmlTags(tTerm?.name || ''),
          publishedAt: d.date ? new Date(d.date) : new Date(),
        },
        create: {
          wpId: d.id,
          slug: d.slug,
          title: stripHtmlTags(d.title?.rendered || d.slug),
          excerpt: stripHtmlTags(d.excerpt?.rendered || '').slice(0, 320),
          content: cleanContent,
          featuredImage,
          gradeSlug: gTerm?.slug || '',
          gradeName: stripHtmlTags(gTerm?.name || ''),
          topicSlug: tTerm?.slug || '',
          topicName: stripHtmlTags(tTerm?.name || ''),
          publishedAt: d.date ? new Date(d.date) : new Date(),
        },
      });
      totalDocsSaved++;
    }
    console.log(`   -> Saved ${totalDocsSaved} math documents so far (page ${page})...`);
  }

  console.log(`Done! Total Categories: ${categories.length}, Posts: ${totalPostsSaved}, MathDocuments: ${totalDocsSaved}`);
}

async function main() {
  await seedRolesAndAdmin();
  await downloadImathStylesAndHubs();
  await crawlInteractiveTools();
  await crawlEduAndArenaAssets();
  await crawlWpCategoriesAndPosts();
}

main()
  .catch((err) => {
    console.error('Crawler error:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
