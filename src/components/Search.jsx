import React, { useEffect, useState } from "react";
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const APY_KEY = "fdfed895027f4872ae94b771e48a8b00";
const APY_KEY1 = "73974f012156466c8f1d84ece69b6719"
const APY_KEY2 = "ff160c775b1846dda1950dabf7f8da7d"
const APY_KEY3 = "65fc995029bc4a05b28dfb072ed3635a"

const Search = ({foodData , setFoodData}) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
   async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${APY_KEY}`);
      const data = await res.json();
      console.log(data)
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
};

export default Search;
