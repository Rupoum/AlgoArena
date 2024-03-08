"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgPlayButtonR } from "react-icons/cg";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegSquareCheck } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiPath } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import vector from "../../../public/assets/icons/Vector.svg";
import { useState } from "react";

const Sidebar = ({ name }) => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
        <div className="flex justify-between p-6 w-screen lg:hidden ">
          <IoMenuOutline onClick={onClick} className={`left-0 z-50`} size={50} />
        </div>
      <div
        className={`fixed top-0 left-0 w-full overflow-hidden md:w-[35%] lg:w-[27%] xl:w-1/4 h-full z-50 bg-[#161a33] sm:px-2 px-10 text-transparent border-r-2 border-color-3  border transform duration-300 translate-x-0 md:visible inl ${
            // open ? "translate-x-0" : "-translate-x-full"
            open ? "visible" : "invisible"
          }`}
      >

        <div className="sm:mt-16 overflow-hidden mt-16">
          {/* NAME  */}
          <div
            className={`${
              open ? "" : "invisible"
            } sm:hidden overflow-hidden flex visible mt-12 mb-7 px-5`}
          >
            <h2
              className={` font-semibold font-popins self-center text-[30px] text-white`}
            >
              {name}
            </h2>
            <Image src={vector} className="ml-3 self-center w-[100px]  " />
          </div>

          <div className="absolute top-0 right-0 z-30 text-slate-600 m-4">
            <IoMdClose onClick={onClick} className="h-[40px] w-[40px] z-50 md:hidden" />
          </div>

          <Link
            href="/dashboard/your-courses"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px] rounded-xl my-4
                ${
                  usePathname() === "/dashboard/your-courses"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white "
                } 
            `}
          >
            <CgPlayButtonR />
            Your Courses
          </Link>

          <Link
            href="/dashboard/posts"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px] rounded-xl my-8
                ${
                  usePathname() === "/dashboard/posts"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <BsFileEarmarkPostFill />
            Posts
          </Link>

          <Link
            href="/dashboard/completed-courses"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px]  rounded-xl my-8
                ${
                  usePathname() === "/dashboard/completed-courses"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <FaRegSquareCheck />
            Completed Courses
          </Link>

          <Link
            href="/dashboard/saved-courses"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px] rounded-xl my-8
                ${
                  usePathname() === "/dashboard/saved-courses"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <IoBookmarkOutline />
            Saved Courses
          </Link>

          <Link
            href="/ dashboard/your-posts"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px] rounded-xl my-8
                ${
                  usePathname() === "/dashboard/your-posts"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <LuLayoutDashboard />
            Your Posts
          </Link>

          <Link
            href="/ dashboard/create-path"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-4 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] xl:text-xl lg:text-[16px] text-[20px] rounded-xl my-8
                ${
                  usePathname() === "/dashboard/create-path"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <PiPath />
            Create Your Own Path
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;