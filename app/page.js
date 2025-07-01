import { Button } from "@/components/ui/button";

import { NavigationMenu } from "./comps/navbar";
import Hero from "./comps/Hero";
import Skills from "./comps/Skills";
import { Separator } from "@/components/ui/separator";
import Certificates from "./comps/Certificates";
import Projects from "./comps/Projects";
import Education from "./comps/Education";
import { DraftForm } from "./comps/DraftForm";
import Footer from "./comps/Footer";

export default function Home() {
  return (
    <div className="duration-1000">
      <div className="fixed top-0 w-full flex justify-center z-50 items-center">
        <NavigationMenu />
      </div>
      <Hero />
      <Separator className="my-4" />
      <Skills />
      <Separator className="my-4" />
      <Certificates />
      <Separator className="my-4" />

      <Projects />
      <Separator className="my-4" />

      <Education />
      <DraftForm />
      <Footer />
    </div>
  );
}
