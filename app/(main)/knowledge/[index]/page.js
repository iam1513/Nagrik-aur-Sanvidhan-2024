import CategoriesData from "../../../../data/category-data"; // Adjust path as necessary
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const { index } = params; // Extract dynamic index from params
  const category = CategoriesData[index]; // Find category by index

  if (!category) {
    // Handle case where category is not found
    notFound();
  }

  return (
    <div id="category-page" className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-[white]">{category.name}</h1>
      <p className="mb-6 text-[white]">{category.description}</p>

      {/* List articles */}
      <div className="flex flex-col gap-8">
        {category.articles.map((article, idx) => (
          <div key={idx} className="mb-4 border p-10 rounded shadow text-[white] ">
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <video width="1000" controls className="my-2 p-4">
              <source src={article.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2">{article.textToRead}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
