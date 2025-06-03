import { BiUserPin } from "react-icons/bi"; 
import { CgNotes } from "react-icons/cg"; 
import { IoMdPeople } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/Orders" className={menuClass}>
              <AiOutlineUnorderedList className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/Customers" className={menuClass}>
              <IoMdPeople className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/users" className={menuClass}>
              <BiUserPin className="mr-4 text-xl" />
              User
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/notes" className={menuClass}>
              <CgNotes className="mr-4 text-xl" />
              Notes
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
