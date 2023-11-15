import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";

const FoodCArd = ({ item }) => {
  const { name, image, price, recipe, _id } = item || {};
  const { user } = useContext(AuthContext);
  const goTo = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();

  const handleCart = () => {
    if (user && user.email) {
      //send cart data
      const cartitem = {
        menuId: _id,
        name,
        image,
        price,
        recipe,
        email: user.email,
      };
      console.log(cartitem);
      axiosSecure.post("/carts", cartitem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Item added to cart!",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          refetch();
        }
      });
    } else {
      toast("Pleaase login first!");
      goTo("/login", { state: location.pathname });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className=" absolute top-2 right-5 p-1 bg-stone-950 text-white">
          ${price}
        </p>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleCart}
            className="btn btn-outline border-0 border-b-2 btn-sm"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCArd;
