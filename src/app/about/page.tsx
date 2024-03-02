"use client";

import Navbar from "@/components/ui/navbar";


export default function About() {
  return (
    <body>
      <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
            <img src="/images/self.jpg" height="400px" width="400px"/>
            <br />
            <p className="text-med">Welcome to my comfort spot. I am Anh, and I am a student at Georgia Tech. I am currently studying Computer Science, diving into the deeper wonders of AI and ML. I am joyous to share my tidbits of projects and hobbies through this website. </p>
            <br />
            <p className="text-med"> In my free time, I love to learn about new things, whether it be a new skill, hobby, or activity. I am an avid journaler, and I love to collect various types of notebooks and fountain pens to write with. I also love to take photos, specializing in digital photography and occasionally film photography. </p>

        </main>
    </body>
  );
}

