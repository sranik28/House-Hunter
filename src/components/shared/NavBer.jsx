import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiMenuAlt2, HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import LoginBtn from "../Ui/loginBtn/LoginBtn";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="flex items-center justify-between w-full px-3 py-5 text-white bg-black/90 md:px-10"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1, type: "spring", stiffness: 120 }}
    >
      <span className="md:hidden">
        {toggle ? (
          <AiOutlineClose onClick={() => setToggle(!toggle)} />
        ) : (
          <HiMenuAlt2 onClick={() => setToggle(!toggle)} />
        )}
      </span>
      <div className="flex items-center gap-2">
        <Link to="/">
          <h1 className="text-3xl font-bold">
          House <span className="text-Primary">Hunter</span>{" "}
          </h1>
        </Link>
      </div>

      <motion.ul
        className={`font-semibold flex items-center duration-300 flex-col py-5 px-5 md:p-0 text-white bg-opacity-90 top-[12%] bg-black md:bg-transparent w-36 md:w-auto md:flex-row rounded-md   gap-6 absolute md:static z-50 ${
          toggle ? "top-0 left-0" : "-left-full duration-300"
        }`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, type: "spring", stiffness: 120 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            onClick={() => setToggle(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/houses"
            onClick={() => setToggle(false)}
          >
            Houses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/dashboard"
            onClick={() => setToggle(false)}
          >
            Dashboard
          </NavLink>
        </li>
        {/* <li>
          {user?.email ? (
            <Link to="/login">
              <button
                onClick={logOut}
                className=""
              >
                <SignUpBtn name='LogOut'/>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                onClick={logOut}
                className=""
              >
                <SignUpBtn name='Login'/>
              </button>
            </Link>
          )}
        </li> */}
      </motion.ul>
      <div className="flex items-center gap-5">
        {/* {user?.photoURL ? (
          <img
            className="w-[35px] border-2 border-green-500 h-[35px] rounded-full"
            src={user.photoURL}
            title={user.displayName}
            alt=""
          />
        ) : (
          <></>
        )} */}
        <Link to='/login'>
          <button>
            <LoginBtn name="login" />
          </button>
        </Link>
        {/* <button>
          {isDark ? (
            <HiOutlineLightBulb
              className="cursor-pointer"
              onClick={() => setIsdark(false)}
            />
          ) : (
            <MdOutlineDarkMode
              className="cursor-pointer"
              onClick={() => setIsdark(true)}
            />
          )}
        </button> */}
      </div>
    </motion.nav>
  );
};

export default NavBar;
