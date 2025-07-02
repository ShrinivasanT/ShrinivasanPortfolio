"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ScrollEffect from "./Scrolleffect";
import TitleWithUnderline from "./Scrolleffect";

const skills = {
  Languages: ["Python", "JavaScript", "SQL", "C++"],
  Tools: ["Git", "Tableau", "Supabase", "VS Code", "Kaggle"],
  Libraries: ["React", "Tailwind CSS", "Pandas", "NumPy", "scikit-learn"],
};

const SkillColumn = ({ title, items }) => (
  <div className="p-4  md:text-center">
    <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
    <ul className="space-y-3 text-left mx-auto inline-block">
      {items.map((item, idx) => (
        <li key={idx} className="flex ml-4 gap-2">
          <span className="text-lg">•</span>
          <Badge variant="outline" className="text-base px-3 py-1">
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  return (
    <div className="w-full px-2 py-8 bg-background text-foreground">
      <div className="mb-16 mx-auto flex justify-center items-center w-fit animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <TitleWithUnderline as="h1">Skills</TitleWithUnderline>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-none divide-x divide-border ">
        <SkillColumn title="Languages" items={skills.Languages} />
        <Separator className="md:hidden block h-full w-px bg-border" />
        <SkillColumn title="Tools" items={skills.Tools} />
        <Separator className="md:hidden block h-full w-px bg-border" />

        <SkillColumn title="Libraries" items={skills.Libraries} />
      </div>
    </div>
  );
}
