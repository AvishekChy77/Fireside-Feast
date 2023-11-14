import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
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
  const navItem = (
    <>
      <li>
        <Link className={` ${scroll ? " text-black" : " text-white"} `} to="/">
          Home
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
          to="/login"
        >
          LogIn
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={`${
        scroll ? "bg-white text-black" : " bg-txt"
      } navbar text-white z-20 transition-all duration-500 fixed max-w-screen-2xl mx-auto `}
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
        <a className="btn btn-sm btn-outline">LogIn</a>
      </div>
    </div>
  );
};

export default Navbar;
