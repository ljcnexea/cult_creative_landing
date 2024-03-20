"use client";
import FirstSection from "./sections/FirstSection";
import { Suspense, useEffect, useState } from "react";
import SecondSection from "./sections/SecondSection.jsx";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import SeventhSection from "./sections/SeventhSection";
import LastSection from "./sections/LastSection";
import Header from "./components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.png"} />
      <Suspense fallback={<p>Loading...</p>}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <LastSection />
      </Suspense>
    </main>
  );
}
