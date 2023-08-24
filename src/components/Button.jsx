import React from "react";

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red text-white shadow-md shadow-gray-400">
      {props.label}
      {props.iconURL && (
        <img
          src={props.iconURL}
          className="ml-2 rounded-full w-5 h-5 shadow-md"
          alt="Shop Button Icon"
        />
      )}
    </button>
  );
};

export default Button;
