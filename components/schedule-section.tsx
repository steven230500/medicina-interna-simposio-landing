"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scheduleData, ScheduleItem } from "@/data/schedule";
import { cn } from "@/lib/utils"; // Assuming this exists, standard in shadcn/ui or modern next/tailwind setups. If not, I'll fallback to clsx or local helper.
// Wait, I didn't check for lib/utils. I should probably check OR just define a utility function locally or check existing components.
// Let me quickly check an existing component component to see imports.
import { Calendar, Clock, MapPin, User } from "lucide-react";

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section
      className="py-24 relative overflow-hidden bg-background"
      id="cronograma"
    >
      {/* Decorative elements similar to other sections */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-turquoise/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Cronograma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
              Académico
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Dos días de conferencias magistrales, talleres interactivos y
            actualizaciones médicas.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary/50 p-1.5 rounded-full inline-flex relative">
            {scheduleData.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 z-10",
                  activeDay === index
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {activeDay === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-purple rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {day.day}{" "}
                  <span className="opacity-70 text-xs hidden sm:inline-block">
                    ({day.date})
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {scheduleData[activeDay].schedule.map((item, index) => (
                <ScheduleItemCard
                  key={`${activeDay}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ScheduleItemCard({
  item,
  index,
}: {
  item: ScheduleItem;
  index: number;
}) {
  // Determine styles based on type
  // Determine styles based on type
  const getCardStyles = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "break":
        return "bg-secondary/30 border-transparent py-4 opacity-80 hover:opacity-100";
      case "workshop":
        return "bg-brand-purple/5 border-brand-purple/20 hover:border-brand-purple/50";
      // Unified style for all other highlights to reduce color noise
      case "highlight-yellow":
      case "highlight-green":
      case "highlight-red":
      default: // standard
        return "bg-card border-border hover:border-brand-purple/50";
    }
  };

  const isBreak = item.type === "break";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group relative border rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg",
        getCardStyles(item.type),
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        {/* Time */}
        <div
          className={cn(
            "flex items-center gap-2 sm:w-32 shrink-0",
            isBreak
              ? "text-muted-foreground"
              : "text-brand-purple font-semibold",
          )}
        >
          <Clock className="w-4 h-4" />
          <span className="text-sm sm:text-base">{item.time}</span>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3
              className={cn(
                "font-medium leading-tight",
                isBreak
                  ? "text-base italic text-muted-foreground flex items-center gap-2"
                  : "text-lg sm:text-xl text-foreground",
              )}
            >
              {item.topic}
            </h3>
            {item.status === "cancelled" && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">
                Cancelado
              </span>
            )}
            {item.status === "pending" && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold">
                Por confirmar
              </span>
            )}
          </div>

          {/* Speaker Info */}
          {item.speaker && !isBreak && (
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 font-medium text-foreground/80">
                <span className="bg-brand-purple/10 p-1 rounded-full">
                  <User className="w-3 h-3 text-brand-purple" />
                </span>{" "}
                {/* Using MapPin as generic user icon for now if User icon invalid, or just remove icon */}
                {item.speaker}
              </div>
              {item.role && (
                <>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="text-brand-pink font-medium">
                    {item.role}
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover Indicator */}
      {!isBreak && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-purple rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.div>
  );
}

// Simple util fallback in case imports fail, but I will assume explicit cn import or use standard clsx/tailwind-merge pattern if I can.
// Actually, safest is to use clsx and tailwind-merge if I know they are generic.
// I'll assume src/lib/utils exists as it is standard in these projects, but to be 100% safe I should verify.
// I'll quickly check existing components to see where `cn` comes from.
