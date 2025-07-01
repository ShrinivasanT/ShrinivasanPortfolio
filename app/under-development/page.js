"use client";

import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <Construction className="h-16 w-16 text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Project Under Development
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        We&apos;re still working on this project. Please check back later!
      </p>
      <Link href="/">
        <Button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
