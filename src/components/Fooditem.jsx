import React from "react";
import styles from "./fooditem.module.css";
const Fooditem = ({ food , setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}> {food.title} </p>{" "}
      </div>
      <div className={styles.buttonContainer}>
        {" "}
        <button onClick={()=>{console.log(food.id)
          setFoodId(food.id)
        }} className={styles.itemButton}>View Recapie</button>
      </div>
    </div>
  );
};

export default Fooditem;
