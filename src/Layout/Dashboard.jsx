import { BiBook, BiDish, BiListOl, BiUserCircle } from "react-icons/bi";
import { GoCodeReview, GoMail } from "react-icons/go";
import { IoMdPeople } from "react-icons/io";
import {
  IoCalendarOutline,
  IoCartOutline,
  IoHomeOutline,
  IoList,
  IoPeople,
  IoSearch,
} from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const isAdmin = useAdmin();
  return (
    <div className="flex">
      <div className=" w-64 min-h-screen text-slate-300 bg-slate-700">
        <ul className=" menu pt-10">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <BiUserCircle size={26} />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <BiDish size={26} />
                  Add item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <BiListOl size={26} />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/ManageBooking">
                  <BiBook size={26} /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <IoMdPeople size={26} />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <IoCartOutline size={26} />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  <IoPeople size={26} />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <IoCalendarOutline size={26} />
                  My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <GoCodeReview size={26} /> Add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <IoList size={26} />
                  My bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoHomeOutline size={26} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <IoSearch size={26} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <GoMail size={26} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
