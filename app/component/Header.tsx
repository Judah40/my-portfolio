"use client";

import { useMyContext } from "@/MyContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const pathsname = usePathname();
  const pathname: string = pathsname.split("/")[2];
  const paths1 = [
    {
      name: "Home",
      path: "Home",
    },
    {
      name: "About",
      path: "About",
    },
    {
      name: "Service",
      path: "Service",
    },
  ];
  const paths2 = [
    {
      name: "Resume",
      path: "Resume",
    },
    {
      name: "Project",
      path: "Project",
    },
    {
      name: "Contact",
      path: "Contact",
    },
  ];

  const { path } = useMyContext();
  useEffect(() => {
    console.log(pathsname.split("/")[2]);
  }, [pathsname]);
  return (
    <div className="flex w-full p-3  text-white flex-col items-center space-y-2">
      <Link href={""} className=" md:hidden border p-2 rounded border-blue-300">
        <p className="text-xl text-blue-300">JadTech</p>
      </Link>
      <div className="w-11/12 h-20  bg-black   rounded-full shadow-lg shadow-gray-500 ">
        <ul className="flex justify-between flex-1 items-center h-full px-4 md:px-12">
          {paths1.map((values, index) => (
            <Link
              href={`/pages/${values.path}`}
              key={index}
              className={`hover:cursor-pointer flex flex-row-reverse items-center ${
                pathname === values.name && "bg-blue-500 p-2 rounded-lg border-[0.2px] border-white"
              }`}
            >
              <p className="md:text-sm text-xs font-light hover:text-blue-200 ">
                {values.name}
              </p>
            </Link>
          ))}
          <Link
            href={"/pages/Home"}
            className="hidden md:block border p-2 rounded border-blue-300"
          >
            <p className="text-xl text-blue-300">JadTech</p>
          </Link>
          {paths2.map((values, index) => (
            <Link
              href={`/pages/${values.path}`}
              key={index}
              className={`hover:cursor-pointer flex flex-row-reverse items-center ${
                pathname === values.name && "bg-blue-500 p-2 rounded-lg border-[0.2px] border-white"
              }`}
            >
              <p className="md:text-sm text-xs font-light hover:text-blue-200 ">
                {values.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
