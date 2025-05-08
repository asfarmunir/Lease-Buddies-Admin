"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RxUpdate } from "react-icons/rx";

const AddClient = () => {
  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" ">#192</AlertDialogTrigger>
      <AlertDialogContent className=" p-0  md:min-w-[700px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pb-5 border-b pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Order Details
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                You can see your order details from here.
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
                  Date
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Date: 2.8.2024 UTC - 9:19:39
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Account Number
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
                  Completed
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Product
                </p>
                <p className=" bg-[#CCCEFD] dark:bg-[#CCCEFD]/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  $25,000 Phase 1 - Prime - cTrader
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Name
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Celina Dietze
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Price
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  -
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Addons
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  -
                </p>
              </div>
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
            <span className=" capitalize">Retry</span>
            {/* )} */}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
