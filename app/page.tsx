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