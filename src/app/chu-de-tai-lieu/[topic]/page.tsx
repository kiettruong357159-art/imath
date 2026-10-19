import { redirect } from 'next/navigation';

export default async function ChuDeTaiLieuPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  redirect(`/tai-lieu?topic=${encodeURIComponent(topic)}`);
}
