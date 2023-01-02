import React from "react";

function Input(props) {
  console.log(props);
  return (
    <div className="flex">
      <label className="block text-lg font-medium text-gray-700">
        {props.label}
      </label>
      <input
        className="block w-full rounded-md border-gray-300 pl-7  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        {...props.data}
      />
    </div>
  );
}

export default Input;
