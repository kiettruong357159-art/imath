import { redirect } from 'next/navigation';

export default async function TaiLieuLopPage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  redirect(`/tai-lieu?grade=${encodeURIComponent(grade)}`);
}
