"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6">
      {/* Subtle Background Graphics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentGold/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-softPurple w-fit">
            UI/UX • GRAPHIC DESIGN • FRONTEND
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            Graphic Designer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-softPurple to-accentGold">
              & UI/UX Designer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            Designing meaningful digital experiences through creativity, visual design, and pixel-perfect frontend development.
          </p>

          {/* Animated Buttons Section */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {/* Animated "View My Work" Button */}
            <Link href="/projects" className="block w-fit">
              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold overflow-hidden cursor-pointer"
              >
                {/* Sliding Gold Background */}
                <motion.div
                  className="absolute inset-0 bg-[#d8b277]"
                  initial={{ x: "-100%" }}
                  variants={{ hover: { x: 0 } }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                />

                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  View My Work
                </span>

                {/* Spring Animated Arrow */}
                <motion.div
                  className="relative z-10 group-hover:text-white transition-colors duration-300"
                  variants={{ hover: { x: 5 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.div>
            </Link>

            {/* Animated "Resume" Button */}
            <a href="/resume.pdf" download className="block w-fit">
              <motion.div
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-white/20 px-8 py-3.5 rounded-full font-semibold transition-colors cursor-pointer"
              >
                <Download size={18} /> Resume
              </motion.div>
            </a>
          </div>

        </motion.div>

        {/* Abstract Creative Element representing Design -> UI -> Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] hidden lg:block"
        >
          <div className="absolute top-10 right-10 w-64 h-80 border border-white/20 rounded-2xl bg-charcoal/40 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-4 transform rotate-6">
            <div className="w-full h-32 bg-primary/20 rounded-lg border border-primary/30"></div>
            <div className="w-3/4 h-4 bg-white/10 rounded"></div>
            <div className="w-1/2 h-4 bg-white/10 rounded"></div>
          </div>
          <div className="absolute top-32 right-32 w-72 h-48 border border-accentGold/30 rounded-2xl bg-charcoal/80 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-3 transform -rotate-3">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-accentGold"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="font-mono text-xs text-softPurple">{"<Frontend>"}</div>
            <div className="font-mono text-xs text-white/50 ml-4">{"<Component variant='premium'>"}</div>
            <div className="font-mono text-xs text-accentGold ml-8">Design to Code</div>
            <div className="font-mono text-xs text-white/50 ml-4">{"</Component>"}</div>
            <div className="font-mono text-xs text-softPurple">{"</Frontend>"}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}