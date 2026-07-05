import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamDetails } from "@/lib/details/team";
import { team } from "@/lib/content";
import { DetailPage } from "@/components/detail-page";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(teamDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = teamDetails[slug];
  if (!detail) return {};
  return { title: `${detail.title} — ${detail.subtitle}`, description: detail.lead.slice(0, 155) };
}

export default async function TeamDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = teamDetails[slug];
  if (!detail) notFound();
  const member = team.find((m) => m.slug === slug);
  return (
    <DetailPage
      detail={detail}
      backHref="/#about"
      backLabel="Back to the team"
      image={member?.image}
      imageAlt={member?.name}
      imageRound
      imagePosition={member?.objectPosition ?? "50% 25%"}
    />
  );
}
