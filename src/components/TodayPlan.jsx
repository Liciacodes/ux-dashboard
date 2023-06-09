import React from "react";
import { MdAddCircle } from "react-icons/md";
import profile from "../assets/profile.jpg";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const TodayPlan = () => {
  return (
    <div className="bg-white py-6 w-[37.7rem] px-4 lg:px-8 mb-40 lg:mb-0">
      <div className="flex justify-between flex-col lg:flex-row ">
        <div>
          <h2 className="font-bold text-lg text-[#3c3d3d]">Today's Plan</h2>
          <p className="text-[#a9a8a8]"> June 14th 2022</p>
        </div>
        <div>
          <MdAddCircle size={50} />
        </div>
      </div>
      <div className="mt-8 ">
        <h3 className=" text-md lg:text-2xl tracking-normal lg:tracking-widest font-bold">
          Sustainable development goals and health innovation
        </h3>
        <div className="flex mt-6 justify-between flex-col lg:flex-row">
          <div className="flex  ">
            <img
              src={profile}
              className="rounded-full w-10 h-10 object-cover"
              alt="profile"
            />
            <img
              src={profile}
              className="rounded-full w-10 h-10  border-white border-2 ml-[-15px] border-solid z-10"
              alt="profile"
            />
            <img
              src={profile}
              className="rounded-full w-10 h-10  border-white border-2 ml-[-15px] border-solid z-20"
              alt="profile"
            />

            <div className="w-10 h-10 rounded-full bg-red-300 text-justify font-medium  border-white border-2 ml-[-15px] border-solid z-30 relative">
              <p className="text-center p-1"> +5</p>
            </div>
          </div>
          <div className="border-[#a9a8a8]  border-l-2 px-4">
            <p className="text-[#3c3d3d] font-medium">Medi Team Meeting</p>
            <p className="text-[#a9a8a8]  font-medium">13:30 - 14:50</p>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full h-[150px] ">
        <div className="mb-4 relative">
          <img
            src="https://images.unsplash.com/photo-1627549263593-5c537b83673e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="dashboard"
            className="w-full h-[200px]"
          />
          <div className="absolute top-5 left-7">
            <p className="text-black text-xl font-bold">Weekly report</p>
            <p className="text-black text-md">Track your performance</p>
          </div>
          <button className="text-black absolute bottom-3 left-5 border border-1 border-black p-2">
            VIEW REPORT
          </button>
        </div>

        <div className="w-full flex gap-8 mt-2 flex-col lg:flex-row ">
          <div className="w-[50%] relative">
            <img
              src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="dashboard"
              className="w-full h-[250px] "
            />
            <div className="absolute top-5 left-7">
              <p className="text-black text-xl font-bold">Study 78X</p>
              <p className="text-black text-md flex items-center gap-1">
                <span>
                  <MdOutlineAccessTimeFilled size={20} />
                </span>
                In progress
              </p>
            </div>
          </div>
          <div className="w-[50%] relative">
            <img
              src="https://images.unsplash.com/photo-1624359136353-f60129a367b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="dashboard"
              className="w-full h-[250px]"
            />
            <div className="absolute top-5 left-7">
              <p className="text-black text-xl font-bold">Analyses</p>
              <p className="text-black text-md flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill size={18} />
                </span>
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
