"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import dynamic from "next/dynamic";

// Dynamically import the 3D component with no SSR to prevent WebGL hydration errors
const SkillCloud = dynamic(() => import("@/components/SkillCloud"), { ssr: false });

const SkillCategory = ({ title, items, index }: { title: string, items: string[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
  >
    <h3 className="text-xl font-bold mb-6 text-accentGold">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map(skill => (
        <span key={skill} className="px-4 py-2 bg-charcoal border border-white/10 rounded-lg text-sm text-white/80">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Expertise & Tools</h1>
        <p className="text-white/50 mb-12 text-lg">Interactive tech stack & design toolkit.</p>

        {/* The 3D Interactive Cloud Hero */}
        <div className="w-full bg-white/5 border border-white/10 rounded-3xl mb-16 overflow-hidden relative">
          <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-xs font-mono text-softPurple">
              Interactive 3D View (Drag to spin)
            </span>
          </div>
          <SkillCloud />
        </div>

        {/* Detailed Grid for Readability */}
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="UI/UX Design" items={skills.uiux} index={0} />
          <SkillCategory title="Graphic Design" items={skills.graphic} index={1} />
          <SkillCategory title="Frontend Development" items={skills.frontend} index={2} />
          <SkillCategory title="Creative Tools" items={skills.tools} index={3} />
          <SkillCategory title="Other Knowledge" items={skills.other} index={4} />
        </div>
      </motion.div>
    </div>
  );
}