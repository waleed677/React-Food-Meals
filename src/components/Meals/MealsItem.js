import React from "react";
import MealsItemForm from "./MealsItemForm";

function MealsItem(props) {
  const price = `$${props.burger.price}`;

  return (
    <>
      <li className="p-10 flex justify-between border-b">
        <div>
          <h2 className="font-bold text-4xl">{props.burger.name}</h2>
          <p className=" text-2xl">{props.burger.description}</p>
          <p className=" text-2xl">{price}</p>
        </div>
        <div>
            <MealsItemForm/>
        </div>
      </li>
    </>
  );
}

export default MealsItem;
