"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import TitleWithUnderline from "./Scrolleffect";

// Update these with actual certificate file names and URLs
const certificates = [
  {
    title: "Artificial Intelligence Fundamentals - IBM",
    image: "/Certificates/aiibm.png",
    link: "/Certificates/ml.pdf",
  },
  {
    title: "Getting Started with Data - IBM",
    image: "/Certificates/Getting_20Started_20With_20Data_20Badge.png",
    link: "/Certificates/ds.pdf",
  },
  {
    title: "Enterprise Data Science in Practice - IBM",
    image: "/Certificates/image.png",
    link: "/Certificates/aws.pdf",
  },
  {
    title: "Delloite Virtual Internship",
    image: "/Certificates/ss2.png",
    link: "/Certificates/sql.pdf",
  },
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    image: "/Certificates/aws.png",
    link: "/Certificates/frontend.pdf",
  },
];

const CertificateCard = ({ title, image, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <Card className="relative overflow-hidden rounded-xl shadow-md group w-full h-64 sm:h-64 md:h-100">
      {/* Full-size image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h3 className="text-white text-xl sm:text-3xl font-semibold text-center px-4">
          {title}
        </h3>
      </div>
    </Card>
  </a>
);

export default function Certificates() {
  return (
    <div className="w-full px-4 py-20 bg-background text-foreground">
      <div className="mb-16 mx-auto flex justify-center items-center w-fit animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <TitleWithUnderline as="h1">Certificates</TitleWithUnderline>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {certificates.slice(0, 3).map((cert, idx) => (
          <CertificateCard
            key={idx}
            title={cert.title}
            image={cert.image}
            link={cert.link}
          />
        ))}

        {/* Center last 2 cards in final row */}
        <div className="md:col-span-full md:flex justify-center gap-6">
          {certificates.slice(3).map((cert, idx) => (
            <div key={idx} className="w-full mb-6 max-w-sm">
              <CertificateCard
                title={cert.title}
                image={cert.image}
                link={cert.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
