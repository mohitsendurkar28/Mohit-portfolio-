"use client";
import { motion } from "framer-motion";
import { profileInfo } from "@/lib/data";

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About Me</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-2xl text-accentGold font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6">
                        "{profileInfo.summary}"
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Design Philosophy</h3>
                            <p className="text-white/70">
                                I believe that exceptional digital products live at the intersection of strong visual identity (Graphic Design), structured user-centric logic (UI/UX), and precise execution (Frontend Development).
                            </p>
                            <h3 className="text-xl font-bold text-white mt-8">Graphic & UI/UX Capabilities</h3>
                            <p className="text-white/70">
                                From building comprehensive design systems and wireframes in Figma to designing brand identity materials (Logos, Letterheads, Packaging), I maintain visual consistency across all digital touchpoints.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Frontend Translation</h3>
                            <p className="text-white/70">
                                Being a designer who codes bridges the gap between vision and reality. I specialize in translating high-fidelity prototypes into responsive, pixel-perfect interfaces using HTML, Tailwind CSS, React.js, and GSAP animations.
                            </p>
                            <h3 className="text-xl font-bold text-white mt-8">Collaboration</h3>
                            <p className="text-white/70">
                                My technical background allows me to communicate effectively with development teams, structuring user flows and delivering assets that are optimized for production.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}