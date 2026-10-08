"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Selected Work</h1>
                <p className="text-white/50 mb-16 text-lg">A showcase of UI/UX, Web Design, and Frontend projects.</p>

                <div className="grid lg:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <div className="aspect-video bg-charcoal relative p-8 border-b border-white/10 flex items-center justify-center">
                                {/* Abstract placeholder for project image/mockup */}
                                <div className="w-full h-full border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-white/20 font-mono">
                                    [Project Mockup: {project.name}]
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-accentGold text-sm font-semibold mb-2">{project.category}</p>
                                        <h2 className="text-2xl font-bold">{project.name}</h2>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <ArrowUpRight size={20} className="group-hover:text-white" />
                                    </a>
                                </div>
                                <p className="text-white/70 mb-6">{project.description}</p>
                                <div className="mb-6">
                                    <span className="text-sm font-semibold text-white/50">Role: </span>
                                    <span className="text-sm text-white">{project.role}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map(tool => (
                                        <span key={tool} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}