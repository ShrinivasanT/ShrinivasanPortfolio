import { P } from "@/data/portfolio";

export const allTags = [...new Set(P.projects.flatMap((p) => p.tags))];
