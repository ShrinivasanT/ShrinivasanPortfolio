import { P } from "@/data/portfolio";
import CardsGrid from "./CardsGrid";

export default function EducationPanel() {
  return <CardsGrid title="Education" src={P.education} />;
}
