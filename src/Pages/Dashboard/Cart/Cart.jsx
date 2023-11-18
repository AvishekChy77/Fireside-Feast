import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionHeader
        subheading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionHeader>
      <div className=" p-4 max-w-3xl mx-auto lg:px-10">
        <div className="mb-7 flex justify-between items-center">
          <h2 className=" text-2xl font-bold">Total orders: {cart.length}</h2>
          <h2 className=" text-2xl font-bold">Total price: ${totalPrice}</h2>
          <button className="btn btn-outline hover:bg-black btn-sm">Pay</button>
        </div>
        <div className="overflow-x-auto text-center">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item._id)} className="">
                      <IoTrashBin className=" hover:text-red-500" size={26} />{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
