import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { TiThMenu } from "react-icons/ti";

export const Layout = () => {
  const [openSidebar, setOpensidebar] = useState(true);
  return (
    <div className="flex lg:flex-row flex-col bg-[#fbf7f4] h-screen w-screen ">
      <div>
        <TiThMenu size={30} className="lg:hidden block" />
        <SideBar />
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};
