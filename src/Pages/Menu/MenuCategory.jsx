import { Link } from "react-router-dom";
import Cover from "../../Components/Cover/Cover";
import Item from "../../Components/Item/Item";

const MenuCategory = ({ items, image, txt, subtxt }) => {
  return (
    <div className=" container p-4 mx-auto text-center md:p-0 my-10">
      {txt && <Cover image={image} txt={txt} subtxt={subtxt}></Cover>}
      <div className=" grid md:grid-cols-2 gap-5 my-10 ">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <Link to={`/order/${txt}`}>
        <button className="btn btn-outline border-0 border-b-2">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
