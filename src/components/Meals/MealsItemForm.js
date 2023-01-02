import React from "react";
import Input from "../UI/Input";

function MealsItemForm(props) {
  return (
    <>
    <Input 
    label = "Amount"
    data = {{
        type:"number",
        name:"amount",
        id: `${props.data.id}_amount`,
        min: '1',
        max: '5',
        step: '1',
        }}
    />
    <button className="bg-orange-900 text-white block w-full p-2 rounded-md mt-4">+ Add to Cart</button>
    </>
  );
}

export default MealsItemForm;
