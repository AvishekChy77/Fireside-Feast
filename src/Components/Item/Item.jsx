import React from "react";

const Item = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="flex space-x-4">
      <img
        className="w-[110px] h-[95px] object-cover rounded-r-[200px] rounded-b-[200px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className=" uppercase md:text-lg">{name}------------</h3>
        <p className=" text-sm md:text-base">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default Item;
