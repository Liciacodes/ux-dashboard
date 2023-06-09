import React from "react";
import { GiLungs } from "react-icons/gi";
import { sideBarTopLinks, sideBarBottomLinks } from "../../NavData";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  // const sub = sideBarTopLinks.map((links) => links.subNav);
  // console.log(sub);
  const { location } = useLocation();

  return (
    <div className="lg:flex flex-col p-8 w-60 hidden h-screen">
      <div className="flex flex-col gap-2 px-4 py-3 ml-2">
        <GiLungs
          color="white"
          className="bg-black mx-8 rounded-full text-center"
          size={25}
        />
        <span className="text-lg font-bold tracking-[0.3em]">SOLARIUS</span>
      </div>

      <div className="flex-1 mt-5">
        {sideBarTopLinks.map((links) => (
          <SidebarLink key={links.id} links={links} />
        ))}
      </div>

      <div className="font-bold">
        {sideBarBottomLinks.map((links) => (
          <SidebarDownLink key={links.id} links={links} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ links }) {
  return (
    <Link
      to={links.path}
      key={links.id}
      className={`${
        // eslint-disable-next-line no-restricted-globals
        location.pathname === links.path
          ? "bg-[#eee6e4] flex items-center gap-3 mb-6 text-lg mx-2 px-2 py-1"
          : "flex items-center gap-3 mb-6 text-lg mx-2 px-2 py-1 "
      }`}
    >
      <span className="">{links.icon}</span>
      {links.name}
      <span className="cursor-pointer">{links.icon2}</span>
    </Link>
  );
}

function SidebarDownLink({ links }) {
  return (
    <Link to={links.path} className="flex items-center gap-4">
      <span className="rounded-full p-2 bg-black text-white">{links.icon}</span>
      {links.name}
    </Link>
  );
}
