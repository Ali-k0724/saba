import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsGithub, BsHexagon } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full h-20 sticky top-0 left-0 bg-white opacity-[98%] z-50 border-b">
      <div className="flex justify-between w-11/12 md:w-10/12 mx-auto h-full items-center">
        <div className="h-14 w-14">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="md:flex hidden justify-between w-[35%] text-base ml-28">
          <Link to={"/register"} className="hover:text-blue-500 mr-4">
            ثبت نام
          </Link>
          <a href="#history" className="hover:text-blue-500 mr-4">
            تاریخچه
          </a>
          <a className="hover:text-blue-500 mr-4">حامیان</a>
          <a href="#contact" className="hover:text-blue-500 mr-4">
            تماس با ما
          </a>
        </div>
        {/* <button
          type="submit"
          className="ml-auto bg-[#F9B219] text-white px-8 py-2.5 rounded-md hidden md:block"
        > */}
        <Link
          to={"/login"}
          className="ml-auto bg-[#F9B219] text-white px-8 py-2.5 rounded-md hidden md:block"
        >
          ورود
        </Link>
        {/* </button> */}
        <RxHamburgerMenu
          className="md:hidden cursor-pointer"
          size={25}
          onClick={() => {
            setSidebar(true);
            document.documentElement.style.overflowY = "hidden";
          }}
        />
        <div
          className={`absolute z-50 h-screen w-screen bg-white top-0 right-0 transition-all  ${
            sidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <GrClose
            onClick={() => {
              setSidebar(false);
              document.documentElement.style.overflowY = "auto";
            }}
            size={27}
            className="mr-7 ml-auto mt-7 cursor-pointer"
          />

          <div className="flex flex-col h-[20%] justify-between mx-auto w-10/12 text-lg mt-32">
            <a
              href="#history"
              className="hover:text-blue-500 mx-auto"
              onClick={() => {
                setSidebar(false);
                document.documentElement.style.overflowY = "auto";
              }}
            >
              تاریخچه
            </a>
            <Link
              to={"/register"}
              className="hover:text-blue-500 mx-auto"
              onClick={() => {
                setSidebar(false);
                document.documentElement.style.overflowY = "auto";
              }}
            >
              ثبت نام
            </Link>
            <a
              className="hover:text-blue-500 mx-auto"
              onClick={() => {
                setSidebar(false);
                document.documentElement.style.overflowY = "auto";
              }}
            >
              حامیان
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 mx-auto"
              onClick={() => {
                setSidebar(false);
                document.documentElement.style.overflowY = "auto";
              }}
            >
              تماس با ما
            </a>
            <Link
              to={"/login"}
              className="hover:text-blue-500 mx-auto"
              onClick={() => {
                setSidebar(false);
                document.documentElement.style.overflowY = "auto";
              }}
            >
              ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
