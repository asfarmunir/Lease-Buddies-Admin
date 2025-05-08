"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoMdAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RxUpdate } from "react-icons/rx";

// const formSchema = z.object({
//   platform: z.string().min(1, {
//     message: "Please select a platform",
//   }),
//   customer: z.string().min(1, {
//     message: "Please select a customer",
//   }),
//   plan: z.string().min(1, {
//     message: "Please select a plan",
//   }),
//   reason: z.string().min(10, {
//     message: "Please enter a reason",
//   }),
//   accountAsRetake: z.boolean(),
// });

const AddClient = () => {
  //   const form = useForm({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       platform: "",
  //       customer: "",
  //       plan: "",
  //       reason: "",
  //       accountAsRetake: false,
  //     },
  //   });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-[#F2F962] dark:bg-yellow-400/60 p-2 rounded-full
       text-xs 2xl:text-sm font-semibold "
      >
        <RxUpdate className="w-4 h-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  md:min-w-[800px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pb-5 border-b pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Upgrade Account
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                You can see detailed information about upgraded account from
                here.
              </p>
            </div>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-primary bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

        <div className=" w-full flex gap-4 px-5 ">
          <div className="flex flex-col w-full space-y-2">
            <div className="flex flex-col p-4 gap-4 w-full bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl ">
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Account
                </p>
                <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  729733
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Customer Name
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Khatia Jintcharadze
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Cusomer Number
                </p>
                <p className=" bg-[#CCCEFD] dark:bg-[#CCCEFD]/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  729733
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Status
                </p>
                <p className=" bg-[#80ED99] dark:bg-[#80ED99]/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  Passed
                </p>
              </div>
            </div>

            <div className=" space-y-2 ">
              <p className=" text-sm font-semibold">Upgrade Plan</p>
              <Select>
                <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                  <SelectValue placeholder={"Select Plan"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-full pt-2 gap-2 items-center justify-between">
              <Button
                type="submit"
                className=" rounded-full   bg-[#EDA680]/50 w-full font-semibold py-5 px-3  text-primary  focus:outline-none focus:shadow-outline"
              >
                <span className=" capitalize">Reject</span>
              </Button>

              <Button
                type="submit"
                className=" rounded-full   bg-[#70E000]/30 w-full font-semibold py-5 px-3 text-primary   focus:outline-none focus:shadow-outline"
              >
                <span className=" capitalize">Accept Manually</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-4 gap-4 w-full bg-[#FBFBFB] max-h-80 2xl:max-h-full  overflow-y-auto dark:bg-slate-900 rounded-3xl ">
            <h2 className=" w-full bg-white dark:bg-slate-900 text-center py-2 font-semibold">
              {" "}
              Account Information
            </h2>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                First Name
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                Khatia
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Last Name
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                Jintcharadze
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Country
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                DE
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Email
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                j.khatia@gmail.com
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Program
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                100K P2 Standard Evaluation - MTR
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Platform
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                MatchTrader
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Type
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                Phase 2
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Server Group
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                Evaluation
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Soft Breaches
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                0
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full px-4 mb-4 mt-1 gap-2 items-center justify-between">
          <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-5  rounded-full">
            Cancel
          </AlertDialogCancel>

          <Button
            type="submit"
            className=" rounded-full   bg-[#70E000] w-full font-semibold py-5 px-5   focus:outline-none focus:shadow-outline"
          >
            {/* {loading ? (
                      <ColorRing
                        visible={true}
                        height="35"
                        width="35"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ]}
                      />
                    ) : ( */}
            <span className=" capitalize">Approve</span>
            {/* )} */}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
