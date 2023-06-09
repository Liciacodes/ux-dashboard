import { HiChartBar } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { CgLogIn } from "react-icons/cg";
import { RiSettings3Fill } from "react-icons/ri";
import { TbChevronDown } from "react-icons/tb";

export const sideBarTopLinks = [
  {
    id: 1,
    icon: <HiChartBar />,
    name: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: <FaBook />,
    name: "Education",
    path: "/education",
  },
  {
    id: 3,
    icon: <GrResources />,
    name: "Resources",
    path: "/resources",
    icon2: <TbChevronDown />,
    subNav: [
      {
        id: 0,
        name: "Genetics 101",
        path: "/genetics",
      },
      {
        id: 1,
        name: "DNA synthesis",
        path: "/dna",
      },
      {
        id: 2,
        name: "Events",
        path: "/events",
      },
    ],
  },
  {
    id: 4,
    icon: <RiSettings3Fill />,
    name: "Settings",
    path: "/settings",
  },
];

export const sideBarBottomLinks = [
  {
    id: 4,
    icon: <CgLogIn />,
    name: "Log out",
    path: "/logout",
  },
];
