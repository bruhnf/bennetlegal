import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/details/services";
import { DetailPage } from "@/components/detail-page";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  return { title: detail.title, description: detail.subtitle };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) notFound();
  return <DetailPage detail={detail} backHref="/#services" backLabel="All services" />;
}
