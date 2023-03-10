import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Users",
    path: "/user",
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
];
