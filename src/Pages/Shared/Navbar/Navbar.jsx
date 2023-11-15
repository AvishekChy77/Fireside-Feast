import { useContext, useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart();
  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  const navItem = (
    <>
      <li>
        <Link
          className={` ${scroll ? " text-black" : " text-white"} `}
          to="/home"
        >
          HOME
        </Link>
      </li>

      <li>
        <Link
          className={` ${scroll ? " text-black" : " text-white"} `}
          to="/menu"
        >
          OUR MENU
        </Link>
      </li>
      <li>
        <Link
          className={` ${scroll ? " text-black" : " text-white"} `}
          to="/order/salad"
        >
          OUR SHOP
        </Link>
      </li>
      <li>
        <Link
          className={` ${scroll ? " text-black" : " text-white"} `}
          to="/dashboard/cart"
        >
          <button className="flex items-center">
            <IoMdCart />
            <div className="ml-1 badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`${
        scroll ? "bg-white" : " bg-txt"
      } navbar z-20 transition-all duration-500 fixed max-w-screen-2xl mx-auto `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <img
          className="  w-10 lg:w-12 mr-1"
          src="https://i.ibb.co/yVVbyPX/Pngtree-restaurant-logo-material-748204.png"
          alt=""
        />
        <NavLink
          to="/"
          className=" cursor-pointer normal-case  text-2xl font-extrabold"
        >
          <span className=" text-[#FF6D60]">Fireside</span>
          <span className=" text-[#98D8AA]">Feast</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu z-30 menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end text-rose-400">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost text-black">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-sm btn-ghost">LogIn</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
