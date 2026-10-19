import Link from "next/link";
import { I } from "../chat/Icons";

export default function PlaygroundBand() {
  return (
    <section className="lp-band">
      <div>
        <h2>Rather just ask?</h2>
        <p>The playground is a chat version of this portfolio. Ask about my projects, skills or experience and each answer comes back as an interactive panel.</p>
      </div>
      <Link className="btn primary" href="/playground">{I.chat}Open playground</Link>
    </section>
  );
}
