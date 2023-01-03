import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex">
      <input
        className=" block rounded-md text-center text-black border-pink-800 pl-7 pr-12  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
        {...props.data}
        ref = {ref}
      />
    </div>
  );
});

export default Input;
