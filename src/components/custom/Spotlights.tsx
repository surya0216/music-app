import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import { MovingBorderDemo } from "./moving-border-btn";


export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Master the Art of Music.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Dive into comprehensice music courses and transform <br/>
          your musical journey today. Whether you&apos;re a beginner or <br/>
          looking to refine your skills, join us to unlock your true <br />
          potential.
        </p>
        <div className="">
          <MovingBorderDemo/>
        </div>
      </div>
    </div>
  );
}
