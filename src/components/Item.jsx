import React from "react";
import styles from "./item.module.css"


const Item = ({ item }) => {
  return (
    <div>
      {" "}
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
           <img className={styles.image}
          src={`https://img.spoonacular.com/ingredients_100x100/` + item.image}
          alt=""
        />
        </div>
       
        <div className={styles.nameContainer}>
         <div className={styles.name}> {item.name}  </div> 
        <div className={styles.amount}>
          {item.amount}  {item.unit}
        </div>
          </div>
      </div>
    </div>
  );
};

export default Item;
