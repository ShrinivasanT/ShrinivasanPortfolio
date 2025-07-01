"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TitleWithUnderline from "./Scrolleffect";

const projects = [
  {
    title: "Mental Health Analysis on Twitter",
    desc: "Conducted sentiment and mental health analysis using Kaggle datasets and Twitter API.",
    link: "https://mentalhealthtwitter.streamlit.app/",
    tags: ["Streamlit", "Python", "NLP", "Kaggle"],
  },
  {
    title: "Artsy Duck Website",
    desc: "An ML-powered site that classifies tweet sentiment visually.",
    link: "https://artsyduck.vercel.app/",
    tags: ["React", "Vercel", "ML", "Tailwind"],
  },
  {
    title: "Supplement Sales Prediction",
    desc: "Forecasts supplement sales using ML regression techniques.",
    link: "https://github.com/ShrinivasanT/Supplement-Sales-Prediction",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Cancer Detection Model",
    desc: "Detects cancerous patterns from image data using deep learning.",
    link: "https://github.com/ShrinivasanT/Cancer-Detection",
    tags: ["CNN", "Deep Learning", "Keras"],
  },
  {
    title: "Mental Health Visualization",
    desc: "Tableau dashboard for mental health trends and insights.",
    link: "https://public.tableau.com/shared/4ZG52ZHSB?:display_count=n&:origin=viz_share_link",
    tags: ["Tableau", "Visualization", "Mental Health"],
  },
  {
    title: "Mental Health Visualization",
    desc: "Tableau dashboard for mental health trends and insights.",
    link: "https://public.tableau.com/shared/4ZG52ZHSB?:display_count=n&:origin=viz_share_link",
    tags: ["Tableau", "Visualization", "Mental Health"],
  },
];

const ProjectCard = ({ title, desc, link, tags }) => (
  <Card className="h-full p-6 rounded-xl shadow-md hover:shadow-xl transition-all bg-background text-foreground flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{desc}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <Badge key={idx} variant="secondary" className="text-sm px-2 py-1">
          {tag}
        </Badge>
      ))}
    </div>
    <Button
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      className="mt-2 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600  "
    >
      View Project →
    </Button>
  </Card>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-background text-foreground">
      <div className="mb-16 mx-auto flex justify-center items-center w-fit animate-in fade-in slide-in-from-bottom-5 duration-1000 ">
        <TitleWithUnderline as="h1">Projects</TitleWithUnderline>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-7xl mx-auto">
        {projects.map((p, idx) => (
          <ProjectCard
            key={idx}
            title={p.title}
            desc={p.desc}
            link={p.link}
            tags={p.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
