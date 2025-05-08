"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { navlinks } from "@/lib/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPeople } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu, RxCalendar } from "react-icons/rx";

import LoginModal from "@/components/shared/LoginModal";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const signOutUser = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    toast.success("Signed out successfully");
    router.refresh();
    router.replace("/login");
  };

  return (
    <nav className=" w-full  rounded-full px-3 md:pl-10 2xl:pl-12 2xl:px-5 py-4 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={130}
          height={130}
          className=" w-36 2xl:w-40  "
        />
      </Link>

      <div className=" hidden md:flex items-center gap-4">
        {/* {navlinks.map((link, index) => (
          <Link
            key={index}
            className={`text-sm 2xl:text-base font-semibold hover:border-b-2 border-primary-50 hover:-translate-y-1 transition-all   pb-1.5 mt-1.5
            ${pathname === link.href ? "border-b-2 px-2 border-primary-50" : ""}
        `}
            href={link.href}
          >
            {link.name}
          </Link>
        ))} */}
        {/* <Link
          className={`text-sm 2xl:text-base font-semibold hover:border-b-2 border-primary-50 hover:-translate-y-1 transition-all   pb-1.5 mt-1.5`}
          href={
            session.status === "authenticated"
              ? "/dashboard/add-property"
              : "/start-hosting"
          }
        >
          Start Hosting
        </Link> */}
        {/* <button className="text-sm 2xl:text-base font-semibold">
          Sign Out
        </button> */}
        {session.status === "authenticated" ? (
          <>
            <button
              onClick={signOutUser}
              className={`border bg-gradient-to-b hover:-translate-y-1 transition-all from-[#3A99D3] to-[#a9d8ff] text-black font-bold rounded-full px-3 py-2 inline-flex items-center gap-2

        `}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href={"/login"}
              className={`border bg-gradient-to-b hover:-translate-y-1 transition-all from-[#3A99D3] to-[#a9d8ff] text-black font-bold rounded-full px-3 py-2 inline-flex items-center gap-2       `}
            >
              Login
            </Link>{" "}
          </>
        )}
      </div>
      <Sheet>
        <SheetTrigger className=" block md:hidden">
          <RxHamburgerMenu className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent className=" dark:bg-primary p-4 border-none">
          <Image src={"/images/logo.svg"} width={137} height={137} alt="logo" />
          <div className="flex flex-col-reverse items-center -mt-16 justify-center h-full gap-2">
            {session.status === "authenticated" ? (
              <div className=" mt-5 flex flex-col-reverse items-center gap-4">
                <button
                  className={`text-sm bg-primary-50 w-full text-clip px-6 py-2 rounded-lg 2xl:text-base font-semibold mt-2 mb-5 

        `}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href={"/login"}
                className={`border bg-gradient-to-b hover:-translate-y-1 transition-all from-[#3A99D3] to-[#FFE7A9] text-black font-bold rounded-full px-3 py-2 inline-flex items-center gap-2       `}
              >
                Login
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
