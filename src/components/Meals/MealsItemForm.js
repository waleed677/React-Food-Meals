import React from "react";

function MealsItemForm(props) {
  return (
    <>
    <div className="flex">
      <label className="block text-lg font-medium text-gray-700">Amount</label>
      <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-black pl-7 pr-12"
          placeholder="0.00"
        />
    </div>
    <button className="bg-orange-900 text-white block w-full p-2 rounded-md mt-4">+ Add to Cart</button>
    </>
  );
}

export default MealsItemForm;
