import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { BsVirus } from "react-icons/bs";
import { FaBacteria } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { SiMicrogenetics } from "react-icons/si";

export const MonthlyPinned = () => {
  return (
    <div className="flex flex-col p-8 w-[37.7rem] mt-80 lg:mt-0">
      <div className="flex items-center justify-between mb-5">
        <p className="font-bold text-lg text-[#3c3d3d]">Monthly pinned </p>
        <p className="text-[#a9a8a8] font-medium">View all</p>
      </div>
      <Cards
        description="Next-gen immuno"
        heading=" Multispecific liquid analysis"
        remarks=" New feedback"
        time="5d"
        icon={<IoIosNotifications size={20} />}
      />
      <Cards
        description="Harmony"
        heading="Protein characterization during childhood and pregnancy"
        remarks="Deadline is today"
        time="1h"
        icon={<AiFillExclamationCircle size={20} />}
      />
      <Cards
        description="Pharmaceutical"
        heading="Quick element dissolution test"
        remarks="Accepted"
        time="7h"
        icon={<BsFillCheckCircleFill size={20} />}
      />
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-[#3c3d3d]">My Learnings</p>
          <span className="text-[#a9a8a8] font-medium">...</span>
        </div>
        <p className="text-md text-[#a9a8a8]">
          Your progress of medical lectures
        </p>

        <div className="grid md:grid-cols-2 md:grid-rows-2 w-full gap-8 grid-cols-1 grid-rows-1">
          <LearningCard
            icon={<BsVirus size={25} />}
            title="Viruses"
            progress="96% progress"
            className="bg-blue-300 text-blue-900 p-4"
          />
          <LearningCard
            icon={<FaBacteria size={25} />}
            title="Bacterial Cells"
            progress="33% progress"
            className="bg-red-300 text-red-900 p-4"
          />
          <LearningCard
            icon={<MdScience size={25} />}
            title="Med Science"
            progress="7% progress"
            className="bg-gray-300 text-gray-900 p-4"
          />
          <LearningCard
            icon={<SiMicrogenetics size={25} />}
            title="Human genes"
            progress="58% progress"
            className="bg-pink-300 text-pink-900 p-4"
          />
        </div>
      </div>
    </div>
  );
};

export const Cards = ({ description, heading, remarks, time, icon }) => {
  return (
    <div className="border-2 border-[#eee6e4] p-3 mb-2">
      <div className="flex justify-between items-center ">
        <p className="text-[#a9a8a8] ">{description}</p>
        <p className="text-[#a9a8a8] ">{time}</p>
      </div>
      <p className="font-bold text-md text-[#3c3d3d] w-[60%]">{heading}</p>
      <p className="flex items-center gap-2 mt-2 text-[#a9a8a8]">
        <span className="text-black">{icon}</span>
        {remarks}
      </p>
    </div>
  );
};

export const LearningCard = ({ icon, title, progress, className }) => {
  return (
    <div className="flex items-center gap-2 p-4">
      <div className={className}>{icon}</div>
      <div>
        <h4 className="font-bold text-lg text-[#3c3d3d]">{title}</h4>
        <p className="text-[#a9a8a8] ">{progress}</p>
      </div>
    </div>
  );
};
