import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  //   console.log(props);
  return (
    <div className="flex flex-col">
      <img src={imgURL} alt={label} width={24} height={24} />
      <h2>{label}</h2>
      <p>{subtext}</p>
    </div>
  );
};

export default ServiceCard;
