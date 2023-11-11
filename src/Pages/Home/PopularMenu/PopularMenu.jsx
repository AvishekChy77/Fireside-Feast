import { useEffect, useState } from "react";
import Item from "../../../Components/Item/Item";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="my-12 mx-auto container p-4">
      <SectionHeader
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeader>
      <div className=" grid md:grid-cols-2 gap-5  ">
        {menu.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
