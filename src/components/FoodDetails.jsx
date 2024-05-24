import React, { useEffect, useState } from "react";
import styles from "./fooddetailes.module.css"
import Itemlist from "./Itemlist";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const APY_KEY = "fdfed895027f4872ae94b771e48a8b00";
  const APY_KEY1 = "73974f012156466c8f1d84ece69b6719";
  const APY_KEY2 = "ff160c775b1846dda1950dabf7f8da7d";
  const APY_KEY3 = "65fc995029bc4a05b28dfb072ed3635a"
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${APY_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetailes}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            {" "}
            👩‍👧‍👦<strong>Serves {food.servings} </strong>
          </span>
          <span>
          <strong>   {food.vegetarian ? " 🥕 Vegetarian" : "🍖 Non-vegetarian"} </strong>
          </span>
         <strong>  <span>{food.vegan ? "🐮 Vegan" : ""}</span></strong>
        </div>
        <div>
      <strong>    💲 <span>{food.pricePerServing / 100} Per serving</span></strong> 
        </div>
            <h2>Ingredieants</h2>
          
           <Itemlist food={food} isLoading={isLoading} />

          <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>

          {isLoading ? (
            <p> Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
