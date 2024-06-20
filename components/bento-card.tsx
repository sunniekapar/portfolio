"use client";
import React, { useRef, useState } from "react";
import { Card } from "./ui/card";
import { cn } from "../lib/utils";

export default function BentoCard(props: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isFocused) return;
    const div = ref.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(0.3);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setOpacity(0);
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setOpacity(0.3);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full overflow-hidden rounded-lg"
    >
      <div className="absolute inset-0 animate-breathe rounded-3xl ring ring-accent/15 blur-sm" />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 blur-3xl transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--accent)), transparent 40%)`,
        }}
      />
      <Card
        {...props}
        className={cn(
          "relative z-10 h-full rounded-lg border-accent/5 bg-transparent p-6 transition duration-500 hover:border-accent/15 md:p-10",
          props.className,
        )}
      />
    </div>
  );
}
