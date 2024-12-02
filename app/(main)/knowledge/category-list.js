"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CategoriesData from "../../../data/category-data";
import Typewriter from "typewriter-effect";

const CategoryList = () => {
  const router = useRouter();

  const handleLearnMoreClick = (index) => {
    router.push(`/knowledge/${index}`); // Navigate to dynamic route
  };

  return (
    <div id="category-list" className="w-full py-8"> {/* Ensure full width here */}
      <h1 className="text-center text-5xl font-extrabold text-orange-700 mb-12 tracking-wide">
        <Typewriter
          options={{
            strings: ["EXPLORE CATEGORIES"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="timelineBox w-[80%] lg:w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"> {/* Changed to grid layout */}
        {CategoriesData?.length > 0 ? (
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
          <p className="text-center text-lg text-gray-700">No categories available</p>
        )}
      </div>
    </div>
  );
};

const CategoryItem = ({ heading, index, description, onLearnMoreClick }) => {
  const tiltEffect = {
    scale: 1.05,
    rotateX: -10,
    rotateY: index % 2 === 0 ? 10 : -10,
  };

  return (
    <div className="timelineItem relative w-full flex justify-center"> {/* Ensure full width */}
      <motion.div
        whileHover={{
          ...tiltEffect,
          boxShadow: "0 4px 20px rgba(3, 218, 197, 0.5)", // Shadow on hover
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-[#1C1F2B] p-6 rounded-lg shadow-[0_4px_20px_rgba(3,218,197,0.5)] hover:shadow-[0_4px_25px_rgba(3,218,197,0.7)] transition-shadow duration-300 w-full" // Before hover shadow
      >
        <h2 className="text-3xl font-bold text-[white] mb-4">
          {heading}
        </h2>
        <div className="descriptionBox text-[white] p-4 rounded-md mb-4">
          <p className="text-xl">{description}</p>
        </div>
        <button
          className="learn-more-but bg-yellow-400 text-white px-6 py-2 rounded-md absolute bottom-2 right-2 transition-transform duration-300 hover:bg-yellow-500 hover:scale-105"
          onClick={onLearnMoreClick}
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default CategoryList;
