"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Career Journey</h1>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 space-y-12">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline dot */}
                            <div className={`absolute -left-2 top-1.5 w-4 h-4 rounded-full border-4 border-charcoal ${exp.highlight ? 'bg-primary' : 'bg-white/40'}`} />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                                <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                                <span className="text-sm font-mono text-accentGold">{exp.period}</span>
                            </div>
                            <h3 className="text-lg text-primary font-medium mb-4">{exp.role}</h3>

                            <ul className="space-y-3 text-white/70">
                                {exp.description.map((desc, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="text-white/30 mt-1.5">•</span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}