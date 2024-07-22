import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem.jsx";

export default function MealList() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        setMeals(data);
        setLoading(false);
      } catch (err) {
        setError({ message: "An error occurred while fetching data." });
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Fetching data...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem meal={meal} key={meal.id} />;
      })}
    </ul>
  );
}
