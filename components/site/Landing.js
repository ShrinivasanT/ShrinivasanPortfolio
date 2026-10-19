import Link from "next/link";
import { P } from "@/data/portfolio";
import IntroGate from "../IntroGate";
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certificates from "./Certificates";
import PlaygroundBand from "./PlaygroundBand";
import Contact from "./Contact";

export default function Landing() {
  return (
    <div className="lp">
      <SiteHeader />
      <main className="lp-wrap">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <PlaygroundBand />
        <Contact />
      </main>
      <footer className="lp-footer">
        <span>© {new Date().getFullYear()} {P.name}</span>
        <Link href="/playground">Open playground</Link>
      </footer>
      <IntroGate />
    </div>
  );
}
