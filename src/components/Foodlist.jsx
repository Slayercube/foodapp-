import React from "react";
import Fooditem from "./Fooditem";

const Foodlist = ({ foodData , setFoodId }) => {
  return (
    <div>
      {" "}
      {foodData.map((food) => (
        <Fooditem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Foodlist;
