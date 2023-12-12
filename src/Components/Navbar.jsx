import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Link = (
    <>
      <li className=" mb-3 lg:mb-0">
        <NavLink className="text-lg hover:underline text-white" to="/">
          About
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink className="text-lg hover:underline text-white" to="/donation">
          Skills
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg hover:underline text-white"
          to="/statistics"
        >
          Projects
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg hover:underline text-white"
          to="/statistics"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-transparent absolute top-0 left-0 w-full">
      <nav className="navbar max-w-[1320px] mx-auto pt-8 px-4">
        <div className="navbar-start">
          <a href="/">
            <img
              className="w-52 md:w-[250px]"
              src="https://i.ibb.co/rfZfGrk/logo-no-background.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-end">
          <ul className="hidden lg:flex gap-5">{Link}</ul>{" "}
          <a
            href="https://drive.google.com/file/d/1KkYnYy0WvHQF_jyFBWXzcGhNgJex8RgU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-2 px-5 ml-5 font-medium bg-yellow-20 mr-5 rounded flex gap-3 items-center">
              Resume <FaDownload />
            </button>
          </a>
          <div className="relative">
            <div className="w-16">
              {!open ? (
                <RiMenu3Fill
                  onClick={handleOpen}
                  className="block lg:hidden btn btn-ghost text-white bg-gray-700 hover:bg-slate-700 btn-circle p-2 ml-4"
                />
              ) : (
                <FaXmark
                  onClick={handleClose}
                  className="block lg:hidden btn btn-ghost text-white bg-gray-700 hover:bg-slate-700 btn-circle p-2 ml-3"
                />
              )}
            </div>
            <ul
              className={`lg:hidden absolute right-1 dropdown-content mt-3 z-[1] p-5 rounded-lg bg-slate-800 w-52 duration-500 shadow-md ${
                open ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {Link}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
