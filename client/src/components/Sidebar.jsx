import { useEffect, useState } from "react";

// const categories = [
//   { text: "View All" },
//   { text: "Antioxidants" },
//   { text: "Ayurvedic" },
//   { text: "Digestive Health" },
//   { text: "General Health" },
//   { text: "Immune Health" },
//   { text: "Personal Care" },
//   { text: "Sexual Health" },
//   { text: "Organic " },
//   { text: "Women Health" },
//   { text: "Herbal, Speciality Supplements" },
//   { text: "Vitamins and Minerals" },
// ];

function Sidebar() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    const getCategories = async () => {
      try {
        const response = await fetch("/api/categories/");
        const responseData = await response.json();
        // console.log(responseData);
        setCategories(responseData.data.categories);
        setError(null); // Reset error state when request is successful
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  return (
    <aside className="flex flex-col px-4 py-3 bg-white w-[1800px] rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Sort By</h2>

      {loading && <span>Loading...</span>}

      {error && <span>Error While Fetching Data!!!</span>}

      {categories && (
        <div className="flex flex-col gap-2 ">
          <li className="flex gap-3 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <div>
              <span className="text-sm">View All</span>
              <span className="ml-2">{`(${categories.filter((category) => category.products.length).reduce((acc, curr) => acc + curr, 0)})`}</span>
            </div>
          </li>
          {categories.map((category, ind) => (
            <li key={ind} className="flex gap-3 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <div>
                <span className="text-sm">{category.name}</span>
                <span className="ml-2">{`(${category.products.length})`}</span>
              </div>
            </li>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
