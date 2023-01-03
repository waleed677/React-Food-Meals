import React, { useRef } from "react";
import Input from "../UI/Input";

function MealsItemForm(props) {

  const amountRef = useRef()

  const cartSubmitHandler = (event) => {
    event.preventDefault();
    const amount = amountRef.current.value;
    const updatedAmount = +amount  // amount is string so convert it into number

    props.onAddToCart(updatedAmount);

  }

  return (
    <>
      <div className="flex">
        {/* <button className="border px-3 border-indigo-900 text-lg">+</button> */}
        <form onSubmit={cartSubmitHandler}>
          <Input
            ref = {amountRef}
            data={{
              type: "number",
              name: "amount",
              id: `${props.data.id}_amount`,
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button className="bg-orange-900 text-white block w-full p-2 rounded-md mt-4">
            Add to Cart
          </button>
        </form>

        {/* <button className="border px-3 border-indigo-900 text-lg">-</button> */}
      </div>
    </>
  );
}

export default MealsItemForm;
