import React from "react";
import profile from "../assets/profile.jpg";
import { AiFillEdit } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="p-4 w-36 lg:flex flex-col justify-around gap-4 border-[#a9a8a8] border-l-2 my-4 hidden">
      <div className="flex flex-col flex-1 items-center">
        <div className="relative">
          <img
            src={profile}
            className="rounded-full w-10 h-10"
            alt="profile"
          ></img>
          <div className="bg-green-500 w-3 h-3 rounded-full absolute top-1 left-8"></div>
        </div>

        <p className="font-bold">Ms. Felicia</p>
        <span>Developer</span>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <AiFillEdit size={25} />
        <BsChatDotsFill size={25} />
        <MdAddCircle size={25} />
      </div>
    </div>
  );
};
