"use client";
import React from "react";
import Image from "next/image";
import { navlinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  // {
  //   name: "Dashboard",
  //   href: "/",
  // },
  {
    name: "Properties",
    href: "/grounds",
  },

  {
    name: "Customers",
    href: "/customers",
  },
  // {
  //   name: "Payouts",
  //   href: "/payouts",
  // },
  // {
  //   name: "Affiliates",
  //   href: "/affiliates",
  // },
];

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/reset-password") return null;
  return (
    <div className=" w-full bg-[#3A99D31A]  px-2 md:px-6 md:pl-14 2xl:pl-16 2xl:px-5  flex items-center gap-2 md:gap-8 overflow-x-scroll pb-1 md:pb-0  ">
      {links.map((link, index) => (
        <Link
          key={index}
          className={`text-sm 2xl:text-base font-semibold py-3 px-3
            ${pathname === link.href ? " border-b-2 border-[#3A99D3]" : ""}`}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
