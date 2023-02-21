import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Users",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "User-List",
        path: "/user/user-list",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Add User",
        path: "/user/add-user",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "LogOut",
    path: "/log-out",
    icon: <AiIcons.AiOutlineBackward />,
  },
];

export const UserSidebarData = [
  {
    title: "Edit Details",
    icon: <AiIcons.AiFillEdit />,
    path: "/user-details",
  },
  {
    title: "LogOut",
    path: "/user-log-out",
    icon: <AiIcons.AiOutlineBackward />,
  },
];
