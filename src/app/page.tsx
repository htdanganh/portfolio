"use client";

import Navbar from "@/components/ui/navbar";


export default function Home() {
  return (
    <body>
      <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="flex-container">
            <h1 className="text-6xl font-bold">
                Hello, I'm Anh
            </h1>
            <br />
            <p className="text-lg"> Lover of learning and creating all sorts of things. Aspiring software engineer. </p>
            <p className="text-lg"> Check out my photos and projects using the links above. </p>
            <br />
            <p className="text-lg"> Check out my photos using the links above. </p>
          </div>
          <br />
          <img src="/images/throwback.jpeg" height="500px" width="500px"/>
          <br />
          <p className="text-med"> I love computer science!! </p>
        </main>
    </body>
  );
}

