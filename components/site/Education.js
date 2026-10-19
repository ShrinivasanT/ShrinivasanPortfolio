import { P } from "@/data/portfolio";
import Section from "./Section";
import Cards from "./Cards";

export default function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <Cards items={P.education.items} />
    </Section>
  );
}
