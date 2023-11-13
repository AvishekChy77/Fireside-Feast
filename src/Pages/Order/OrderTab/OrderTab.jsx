import FoodCArd from "../../../Components/FoodCArd/FoodCArd";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-5">
      {items.map((item) => (
        <FoodCArd key={item._id} item={item}></FoodCArd>
      ))}
    </div>
  );
};

export default OrderTab;
