"use client";

import Navbar from "@/components/ui/navbar";


export default function Gallery() {
  return (
    <body>
      <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="flex-container">
            <br />
            <p className="text-lg"> All photos taken with a Canon 7D with a 24-70mm lens. </p>
            <br />
            <img src="/images/soul-atl.jpeg" alt="Made with Soul in Atlanta sign" />
            <br />
            <img src="/images/just-be-happy.jpeg" alt="Just Be Happy sign" />
            <br />
            <img src="/images/coda.jpeg" alt="Coda spiral staircase" />
            <br />
            <img src="/images/nyclunch.jpeg" alt="NYC lunch in Brooklyn" />
            <br />
            <img src="/images/calibeachhouse.jpeg" alt="The side of a beachhouse in California" />
            <br />
            <img src="/images/biloxi.jpeg" alt="Biloxi" />
            <br />
            <img src="/images/water.jpeg" alt="Waves" />
          </div>
        </main>
    </body>
  );
}

