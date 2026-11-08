import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { allInsights, getInsight } from "@/lib/insights";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return allInsights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.metaTitle} | ${site.shortName}`,
      description: article.metaDesc,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
