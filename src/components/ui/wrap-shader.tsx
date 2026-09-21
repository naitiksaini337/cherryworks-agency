"use client";

import React from "react";
import { Warp } from "@paper-design/shaders-react";

interface WarpShaderProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

export default function WarpShader({
  className = "",
  colors = [
    "hsl(340, 85%, 16%)", // Deep Velvet Cherry
    "hsl(345, 60%, 75%)", // Sakura Rose
    "hsl(343, 78%, 28%)", // Vibrant Deep Cherry (#7A0F2E)
    "hsl(348, 45%, 86%)", // Soft Cherry Blossom Blush
  ],
  speed = 0.8,
}: WarpShaderProps) {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={speed}
        colors={colors}
      />
    </div>
  );
}
