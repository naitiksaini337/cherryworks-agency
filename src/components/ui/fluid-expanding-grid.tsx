"use client";

import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GridItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color?: string; // fallback if image isn't loaded
};

interface FluidExpandingGridProps {
  items: GridItem[];
  className?: string;
  defaultExpandedId?: string;
}

export function FluidExpandingGrid({
  items,
  className,
  defaultExpandedId,
}: FluidExpandingGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    defaultExpandedId ?? (items.length > 0 ? items[0].id : null)
  );

  return (
    <div
      className={cn(
        "w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4 h-[500px]",
        className
      )}
    >
      <LayoutGroup>
        {items.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setExpandedId(item.id)}
              onMouseEnter={() => setExpandedId(item.id)}
              initial={{ borderRadius: 24 }}
              animate={{
                flex: isExpanded ? 3 : 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1,
              }}
              className={cn(
                "relative overflow-hidden cursor-pointer",
                "h-full md:h-auto",
                "bg-[#050505]",
                "group"
              )}
              style={{
                backgroundColor: item.color,
                borderRadius: 24,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:bg-black/50" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <motion.h3
                  layout
                  className={cn(
                    "font-instrument font-medium text-white",
                    isExpanded ? "text-2xl sm:text-3xl mb-2" : "text-xl sm:text-2xl"
                  )}
                >
                  {item.title}
                </motion.h3>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-white/90 font-lora text-sm sm:text-base max-w-sm"
                    >
                      {item.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </LayoutGroup>
    </div>
  );
}
