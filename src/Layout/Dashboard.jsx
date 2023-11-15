import { GoCodeReview } from "react-icons/go";
import {
  IoCalendarOutline,
  IoCartOutline,
  IoHomeOutline,
  IoList,
} from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" w-64 min-h-screen bg-slate-700">
        <ul className=" menu pt-10">
          <li>
            <NavLink to="/dashboard/cart">
              <IoCartOutline size={26} />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <IoHomeOutline size={26} />
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
          <div className="divider"></div>
          <li>
            <NavLink to="/home">
              <IoHomeOutline size={26} />
              Home
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
