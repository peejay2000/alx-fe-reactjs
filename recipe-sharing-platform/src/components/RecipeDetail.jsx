import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Example placeholder for ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>

          {/* Example placeholder for instructions */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Step one: do this...</li>
              <li>Step two: then that...</li>
              <li>Step three: finish up...</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
