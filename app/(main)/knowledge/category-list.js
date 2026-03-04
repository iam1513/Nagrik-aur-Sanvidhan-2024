"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CategoriesData from "../../../data/category-data";
import Typewriter from "typewriter-effect";

/* ---------- animation presets ---------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoryList = () => {
  const router = useRouter();

  const handleLearnMoreClick = (index) => {
    router.push(`/knowledge/${index}`);
  };

  return (
    <div id="category-list" className="w-full py-16 bg-[#121212]">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-white mb-14 tracking-wide"
      >
        <Typewriter
          options={{
            strings: ["Explore Categories"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h1>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[90%] xl:w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {CategoriesData && CategoriesData.length > 0 ? (
          CategoriesData.map((item, index) => (
            <CategoryItem
              key={index}
              index={index}
              heading={item.name}
              description={item.description}
              onLearnMoreClick={() => handleLearnMoreClick(index)}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-400">
            No categories available
          </p>
        )}
      </motion.div>
    </div>
  );
};

/* ---------------- ITEM ---------------- */

const CategoryItem = ({ heading, index, description, onLearnMoreClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        rotateX: -6,
        rotateY: index % 2 === 0 ? 6 : -6,
      }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="group relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-7 shadow-md hover:border-amber-400/40"
    >
      {/* TOP GRADIENT ACCENT */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-blue-400 to-transparent rounded-t-2xl opacity-70" />

      {/* INDEX BADGE */}
      <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* CONTENT */}
      <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-amber-400 transition">
        {heading}
      </h2>

      <p className="text-base text-gray-300 leading-relaxed mb-8">
        {description}
      </p>

      {/* CTA */}
      <motion.button
        onClick={onLearnMoreClick}
        whileHover={{ x: 6 }}
        className="flex items-center gap-2 text-sm font-semibold text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-md hover:bg-amber-400/10 transition"
      >
        Learn More
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </motion.button>

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(251,191,36,0.15)]" />
    </motion.div>
  );
};

export default CategoryList;
