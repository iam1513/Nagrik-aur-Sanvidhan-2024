"use client"; // Enable client-side rendering

import React, { useState } from "react";
import { useParams } from "next/navigation"; // Use Next.js routing
import CategoriesData from "../../../data/category-data"; // Adjust the path as necessary
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from Font Awesome

const LearnArticles = () => {
  const params = useParams(); // Next.js useParams equivalent
  const index = params.index; // Extract index from dynamic route
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const category = CategoriesData[index];

  if (!category) {
    return <div>Category not found</div>;
  }

  const handleButtonClick = (articleIndex) => {
    setSelectedArticleIndex(articleIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="learn-articles-full" className="flex flex-col lg:flex-row">
      <button onClick={toggleSidebar} className="toggle-sidebar-icon">
        {isSidebarOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
      </button>
      {isSidebarOpen && (
        <div id="learn-articles-part1" className="bg-[white] w-full lg:w-1/4 p-4">
          {category.articles.map((article, articleIndex) => (
            <div key={articleIndex} className="article-container mb-4">
              <button
                className="text-white hover:text-gray-200" // Changed to white
                onClick={() => handleButtonClick(articleIndex)}
              >
                {article.title}
              </button>
            </div>
          ))}
        </div>
      )}
      <div
        id="learn-articles-part2"
        className={`transition-all duration-300 ${isSidebarOpen ? "w-full lg:w-3/4" : "w-full"}`}
      >
        <div className=" p-4">
          <div className="video-part mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-white"> {/* Changed to white */}
              {category.articles[selectedArticleIndex].title}
            </h2>
            <video width="100%" controls>
              <source
                src={category.articles[selectedArticleIndex].videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-white"> {/* Changed to white */}
              Read More
            </h2>
            <div className="text-white"> {/* Changed to white */}
              <p>{category.articles[selectedArticleIndex].textToRead}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnArticles;
