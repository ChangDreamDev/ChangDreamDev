"use client";

import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

import Cursor from "@/components/common/cursor";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DESKTOP_MEDIA_QUERY = "(hover: hover) and (pointer: fine)";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });
    window.history.scrollRestoration = "manual";

    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Cursor isDesktop={isDesktop} />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
