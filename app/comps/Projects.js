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
    tags: ["Streamlit", "Python", "Vader", "Kaggle"],
  },
  {
    title: "Artsy Duck Website",
    desc: "E-Commerce Website for a handicrafts store, located in Pune, Kothrud.",
    link: "https://artsyduck.vercel.app/",
    tags: ["React", "Vercel", "Next.js", "Tailwind"],
  },
  {
    title: "Supplement Sales Prediction",
    desc: "Forecasts supplement sales using ML regression techniques.",
    link: "https://github.com/ShrinivasanT/Supplement-Sales-Prediction",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Alzheimers Prediction CNN",
    desc: "Detects Alzheimer's disease patterns from image data using deep learning.",
    link: "/under-development",
    tags: ["CNN", "Deep Learning", "Keras"],
  },
  {
    title: "COVID-19 Dashboard",
    desc: "Tableau dashboard for COVID-19 trends and insights.",
    link: "https://public.tableau.com/shared/4ZG52ZHSB?:display_count=n&:origin=viz_share_link",
    tags: ["Tableau", "Visualization", "Kaggle"],
  },
  {
    title: "NN using MINST dataset",
    desc: "Neural network project analyzing the MNIST dataset for image classification .",
    link: "https://github.com/ShrinivasanT/NN-from-Scratch-using-MNIST",
    tags: ["Python", "Numpy"],
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
    <a href={link} target="_blank" className="mt-2 w-full  ">
      <Button
        rel="noopener noreferrer"
        variant="outline"
        className="w-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
      >
        View Project →
      </Button>
    </a>
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
