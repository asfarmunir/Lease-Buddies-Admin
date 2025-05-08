import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoChevronDownOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";
import PlanSettings from "@/components/shared/modals/PlanSettings";
const payoutTabs = [
  {
    name: "plan list",
    tab: "plan-list",
  },
  {
    name: "archived plans",
    tab: "archived-plans",
  },
  {
    name: "category",
    tab: "category",
  },
];

const WithdrawableProfits = () => {
  const [tab, setTab] = React.useState("plan-list");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full">
      <div
        className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
      >
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
            <p className="text-sm font-semibold px-2">Plans</p>
            {payoutTabs.map((t, index) => (
              <button
                key={index}
                onClick={() => handleTab(t.tab)}
                className={` capitalize text-xs 2xl:text-sm text-nowrap font-semibold p-2.5 2xl:p-3 px-3 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  tab === t.tab
                    ? "bg-black dark:bg-[#194867] text-white"
                    : " bg-slate-50 dark:bg-slate-900  text-primary"
                }`}
              >
                {t.name}
              </button>
            ))}
            <PlanSettings />
            <DropdownMenu>
              <DropdownMenuTrigger className=" bg-white dark:bg-slate-950   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                Filter By Period
                <IoChevronDownOutline className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" border-none bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>TOP EARNERS</p>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>AVERAGE</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>BOTTOM EARNERS</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
            <DropdownMenu>
              <DropdownMenuTrigger className=" bg-white dark:bg-slate-950   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                Filter Program
                <IoChevronDownOutline className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" border-none bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>TOP EARNERS</p>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>AVERAGE</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>BOTTOM EARNERS</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
              <LuSearch className="w-4 h-4 text-[#848BAC] " />
              <Input
                className=" 
                text-[#848BAC]
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
                placeholder={"search..."}
              />
            </div>
            <button className="bg-white    dark:bg-slate-950 p-3 inline-flex items-center font-semibold gap-1 capitalize rounded-full text-xs ">
              export
              <Image
                src="/export.svg"
                width={14}
                height={14}
                alt="export"
                className=" dark:invert"
              />
            </button>
            <button className="bg-white dark:bg-slate-950 p-3 capitalize rounded-full text-xs font-semibold ">
              toggle colomn
            </button>
          </div>
        </div>
      </div>
      {/* <Period /> */}
      {/* <Category /> */}
      {/* <Country /> */}

      {
        {
          "plan-list": <PlanList />,
          "archived-plans": <ArchiverdPlans />,
        }[tab]
      }
    </div>
  );
};

export default WithdrawableProfits;

const PlanList = () => {
  return (
    <div className=" w-full">
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                Description
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Label
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Upgrade Plan
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Platform
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Category
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                group
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="  ">
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none  ">
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
                  10K Standard Evaluation - cTrader
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  $10,000 Phase 1 - Standard
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  10K P2 Standard Evaluation - cTrader
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  5
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  5
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  2
                </TableCell>

                <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
                  <button
                    className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold "
                  >
                    <GrEdit className="w-4 h-4 text-black dark:text-white" />
                  </button>{" "}
                  <button
                    className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold "
                  >
                    <RxCountdownTimer className="w-4 h-4 text-black dark:text-white" />
                  </button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between bg-background py-4  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
        </div>
      </div>
    </div>
  );
};
const ArchiverdPlans = () => {
  return (
    <div className=" w-full">
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                Description
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Label
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Upgrade Plan
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Repeat Plan
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Platform
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Category
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                group
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="  ">
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none  ">
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
                  AXC MTR $10K - copy
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  $10,000 Phase 1 - Standard
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  10K P2 Standard Evaluation - cTrader
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  AXC MTR $10K - copy
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  Matchtrader
                </TableCell>
                <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                  Test
                </TableCell>
                <TableCell className="bg-[#FBFBFB]  ">
                  <p className=" bg-[#05BAFF1A] dark:bg-blue-400/60 text-primary    flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                    48323
                  </p>
                </TableCell>
                <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
                  <button
                    className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold "
                  >
                    <RxCountdownTimer className="w-4 h-4 text-black dark:text-white" />
                  </button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between bg-background py-4  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
        </div>
      </div>
    </div>
  );
};
