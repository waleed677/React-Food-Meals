import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import MealsItemForm from "./MealsItemForm";

function MealsItem(props) {

  const cartCTX = useContext(CartContext);
  const price = `$${props.burger.price}`;


  const addToCartHandler = (amount) => {
    cartCTX.addItem({
      id: props.burger.id,
      name: props.burger.name,
      amount: amount,
      price: props.burger.price
    });
  }

  return (
    <>
      <li className="p-10 flex justify-between border-b">
        <div>
          <h2 className="font-bold text-4xl">{props.burger.name}</h2>
          <p className=" text-xl">{props.burger.description}</p>
          <p className=" text-2xl">{price}</p>
        </div>
        <div>
            <MealsItemForm data = {props.burger} onAddToCart = {addToCartHandler}/>
        </div>
      </li>
    </>
  );
}

export default MealsItem;
