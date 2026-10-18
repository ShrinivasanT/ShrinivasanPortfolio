import { P } from "@/data/portfolio";
import CardsGrid from "./CardsGrid";

export default function CertificatesPanel() {
  return <CardsGrid title="Certificates" src={P.certificates} />;
}
