"use client";
import React from "react";
import { heroData } from "@/app/data/heroData";
import { Hero } from "./Components/hero/hero";
import { useDeviceType } from "@/app/hooks/useDeviceType";

export default function home() {
  const deviceType = useDeviceType();
  return (
    <div>
      <Hero heroData={heroData} deviceType={deviceType} />
    </div>
  );
}
