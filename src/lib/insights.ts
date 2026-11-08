import { insightsA } from "./insights-content-a";
import { insightsB } from "./insights-content-b";
import { insightsC } from "./insights-content-c";
import type { Insight } from "./insights-types";

export type { Insight, InsightSection, InsightFaq } from "./insights-types";

export const allInsights: Insight[] = [...insightsA, ...insightsB, ...insightsC];

export function getInsight(slug: string): Insight | undefined {
  return allInsights.find((i) => i.slug === slug);
}

export function insightWordCount(a: Insight): number {
  let words = 0;
  const count = (s?: string) => {
    if (s) words += s.split(/\s+/).length;
  };
  a.intro.forEach(count);
  a.sections.forEach((s) => {
    count(s.h2);
    s.paras?.forEach(count);
    s.list?.forEach(count);
    count(s.listTitle);
  });
  a.faq.forEach((f) => {
    count(f.q);
    count(f.a);
  });
  return words;
}
