import { P } from "@/data/portfolio";
import Section from "./Section";
import Cards from "./Cards";

export default function Certificates() {
  return (
    <Section id="certificates" index="05" title="Certificates">
      <Cards items={P.certificates.items} />
    </Section>
  );
}
