import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightDetails } from "@/lib/details/insights";
import { DetailPage } from "@/components/detail-page";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(insightDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = insightDetails[slug];
  if (!detail) return {};
  return { title: detail.title, description: detail.subtitle };
}

export default async function InsightDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = insightDetails[slug];
  if (!detail) notFound();
  return <DetailPage detail={detail} backHref="/insights" backLabel="All insights" />;
}
