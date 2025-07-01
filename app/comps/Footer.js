"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/ShrinivasanT",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/shrinivasant",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:your-email@example.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t  bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* Social Icons */}
        <div className="flex space-x-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-muted-foreground text-center sm:text-right">
          © {new Date().getFullYear()} Shrinivasan T. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
