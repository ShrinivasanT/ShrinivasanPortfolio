"use client";

import { Construction } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-800 dark:text-white px-4">
      <Construction className="h-16 w-16 text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Project Under Development
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        We're currently working on this project to bring you something awesome.
        Check back soon!
      </p>
      <a href="/" className="mt-4">
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </a>
    </div>
  );
}
