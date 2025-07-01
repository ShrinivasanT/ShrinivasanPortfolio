"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TitleWithUnderline from "./Scrolleffect";

const educationData = [
  {
    id: "item-1",
    title: "Bachelor of Engineering - Computer Science",
    content:
      "RMD Sinhgad School of Engineering, Pune\nGraduated: 2025\nCGPA: 8.6\nRelevant Courses: Data Science, Machine Learning, Cloud Computing",
  },
  {
    id: "item-2",
    title: "HSC - Maharashtra State Board",
    content:
      "Percentage: 85.3%\nSubjects: Physics, Chemistry, Math, Computer Science",
  },
  {
    id: "item-3",
    title: "SSC - Maharashtra State Board",
    content: "Percentage: 92.0%\nSchool: VPM’s Vidya Bhavan High School",
  },
  {
    id: "item-4",
    title: "Extracurricular - Technical Lead @ CodeCell",
    content:
      "Organized and mentored coding bootcamps, developed full-stack projects, participated in hackathons and represented the college at intercollegiate events.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-4 bg-background text-foreground"
    >
      <div className="mb-16 mx-auto flex justify-center items-center w-fit animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <TitleWithUnderline as="h1">Education & Activities</TitleWithUnderline>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {educationData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-muted-foreground text-sm">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
