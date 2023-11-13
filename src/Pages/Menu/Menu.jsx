import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { useCategory } from "../../Hooks/useCategory";
import bg from "../../assets/menu/banner3.jpg";
import des from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useCategory();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Fireside | Menu</title>
      </Helmet>
      <Cover
        image={bg}
        txt={"OUR MENU"}
        subtxt={"Would you like to try a dish?"}
      ></Cover>

      <SectionHeader
        subheading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionHeader>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        image={des}
        txt={"dessert"}
        subtxt={
          "Elevate your dining experience with the perfect ending—our irresistible desserts are a treat for your taste buds."
        }
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        image={pizzaimg}
        txt={"pizza"}
        subtxt={
          " Our pizzas are a harmony of fresh, high-quality ingredients and expertly blended flavors."
        }
      ></MenuCategory>
      <MenuCategory
        items={salad}
        image={saladimg}
        txt={"salad"}
        subtxt={
          "our salads are a delightful way to savor health without compromising on taste."
        }
      ></MenuCategory>
      <MenuCategory
        items={soup}
        image={soupimg}
        txt={"soup"}
        subtxt={"Warm your senses with our comforting soup selections."}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
