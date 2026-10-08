"use client";
import { motion } from "framer-motion";
import { profileInfo } from "@/lib/data";
import { Mail, Phone, Briefcase, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-20">

                {/* Left Side: Info */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                        Let's Create <br /> <span className="text-primary">Something Meaningful.</span>
                    </h1>
                    <p className="text-lg text-white/70 mb-12 max-w-md">
                        Have a project, design requirement, or opportunity? I'm always open to discussing new ideas. Let's connect.
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${profileInfo.email}`} className="flex items-center gap-4 text-white/80 hover:text-accentGold transition-colors">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">{profileInfo.email}</span>
                        </a>
                        <a href={`tel:${profileInfo.phone}`} className="flex items-center gap-4 text-white/80 hover:text-accentGold transition-colors">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                                <Phone size={20} />
                            </div>
                            <span className="text-lg">{profileInfo.phone}</span>
                        </a>
                        <a href={profileInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/80 hover:text-accentGold transition-colors">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                                <Briefcase size={20} />
                            </div>
                            <span className="text-lg">LinkedIn Profile</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Form (Visual Only for Frontend Portfolio) */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Subject</label>
                            <input type="text" placeholder="Project Inquiry" className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Message</label>
                            <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                            Send Message <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

            </motion.div>
        </div>
    );
}