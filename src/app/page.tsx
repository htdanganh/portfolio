"use client";

import Navbar from "@/components/ui/navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">
            HELLO WORLD
        </h1>
      </div>
    </main>
  );
}
