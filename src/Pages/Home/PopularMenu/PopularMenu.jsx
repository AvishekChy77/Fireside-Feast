import Item from "../../../Components/Item/Item";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { useCategory } from "../../../Hooks/useCategory";

const PopularMenu = () => {
  const [menu] = useCategory();
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);
  const popularitem = menu.filter((item) => item.category === "popular");
  return (
    <div className="my-12 mx-auto p-4 md:p-0 container">
      <SectionHeader
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeader>
      <div className=" grid md:grid-cols-2 gap-5  ">
        {popularitem.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
