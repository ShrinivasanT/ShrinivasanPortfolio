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
      "RMD Sinhgad School of Engineering, Pune\nGraduated: 2025\nCGPA: 7.63\nRelevant Courses: Data Science, Machine Learning.",
  },
  {
    id: "item-2",
    title: "HSC - Maharashtra State Board",
    content:
      "Abasaheb Garware College \nPercentage: 64.67%\nSubjects: Physics, Chemistry, Math, Electronics",
  },
  {
    id: "item-3",
    title: "SSC - Maharashtra State Board",
    content: "Percentage: 87.0%\nSchool: Versatile High School",
  },
  {
    id: "item-4",
    title: "Extracurricular Activities",
    content:
      "Tech Team Member at ACES \nTraining & Placement Coordinator \nBadminton & GYM  ",
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
