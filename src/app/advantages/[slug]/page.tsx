import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { advantageDetails } from "@/lib/details/advantages";
import { DetailPage } from "@/components/detail-page";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(advantageDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = advantageDetails[slug];
  if (!detail) return {};
  return { title: detail.title, description: detail.subtitle };
}

export default async function AdvantageDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = advantageDetails[slug];
  if (!detail) notFound();
  return <DetailPage detail={detail} backHref="/#why" backLabel="The Bennet advantage" />;
}
