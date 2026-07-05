import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudyDetails } from "@/lib/details/caseStudies";
import { DetailPage } from "@/components/detail-page";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(caseStudyDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = caseStudyDetails[slug];
  if (!detail) return {};
  return { title: detail.title, description: detail.subtitle };
}

export default async function CaseStudyDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = caseStudyDetails[slug];
  if (!detail) notFound();
  return <DetailPage detail={detail} backHref="/#success" backLabel="All success stories" />;
}
