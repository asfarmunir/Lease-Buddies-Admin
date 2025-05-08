import Navbar from "@/components/shared/Navbar";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative h-screen bg-[#000214] ">
      {/* <div
        className="  sticky 
        top-0
        z-50
        w-full
        "
      >
        <div className=" w-full px-1.5 2xl:px-2.5  justify-between flex items-center absolute"></div>
      </div> */}
      <section className=" pb-12 bg-[#000214] ">
        <Navbar />
        <Topbar />
        {children}
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default layout;
