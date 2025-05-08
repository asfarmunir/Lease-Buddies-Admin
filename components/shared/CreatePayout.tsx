"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

import { Switch } from "@/components/ui/switch";
import { RxUpdate } from "react-icons/rx";
import { IPayouts } from "@/lib/types/payout";
import { ColorRing } from "react-loader-spinner";
import { updatePayoutStatus } from "@/lib/database/actions/payout.action";
import toast from "react-hot-toast";

const AddClient = ({ payout }: { payout: IPayouts }) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  async function onSubmit(status: string) {
    setLoading(true);

    toast.promise(updatePayoutStatus(payout._id!, status), {
      loading: "Updating Payout...",
      success: "Payout Updated Successfully",
      error: "Error Updating Payout",
    });

    setLoading(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className=" bg-primary-50 p-2 rounded-full
       text-xs 2xl:text-sm font-semibold "
      >
        <RxUpdate className="w-4 h-4 text-black" />
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  md:min-w-[800px] bg-primary-100  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pb-5 border-b pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Create Payout
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please make sure to verify the details before approving.
              </p>
            </div>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-primary bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

        <div className=" w-full flex gap-4 px-5 ">
          <div className="flex flex-col w-full space-y-2 bg-">
            <div className="flex flex-col p-4 gap-4 w-full bg-primary-200  rounded-3xl ">
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Account ID
                </p>
                <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  {payout.user._id?.slice(
                    payout.user._id?.length - 5,
                    payout.user._id?.length
                  )}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Paypal Email
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  {payout.accountEmail}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Date
                </p>
                <p className="    flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm">
                  Status
                </p>
                <p className=" bg-yellow-300 text-black  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-bold">
                  {payout.status}
                </p>
              </div>
              <div className="flex items-center flex-col bg-primary-100 border-2 rounded-xl p-4 border-primary-50/20 w-full">
                <p className=" text-slate-700 dark:text-slate-300 text-sm mt-2 border-b border-primary-50  pb-2 w-full text-center">
                  Amount
                </p>
                <p className=" text-slate-700 dark:text-slate-300 text-2xl 2xl:text-4xl my-5 font-semibold">
                  ${payout.amount}
                </p>
              </div>
            </div>

            {payout.status === "pending" && (
              <div className="flex w-full pt-2 gap-2 items-center justify-between">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    onSubmit("rejected");
                  }}
                  className={`
                    ${loading ? "opacity-40" : "opacity-100"}
                     rounded-full  bg-red-600  w-full text-white py-3 font-bold px-3    focus:outline-none focus:shadow-outline`}
                >
                  <span className=" capitalize">Reject</span>
                </button>

                <button
                  disabled={loading}
                  type="button"
                  onClick={() => {
                    onSubmit("completed");
                  }}
                  className={`
                    ${loading ? "opacity-40" : "opacity-100"}
                     rounded-full  bg-primary-50  w-full text-black py-3 font-bold px-3    focus:outline-none focus:shadow-outline`}
                >
                  {loading ? (
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
                  ) : (
                    <span className=" capitalize">Approve</span>
                  )}
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col p-4 gap-4 w-full  max-h-80 2xl:max-h-full  overflow-y-auto bg-primary-200 rounded-3xl ">
            <h2 className=" w-full bg-primary-200 text-center py-2 font-semibold">
              {" "}
              Account Information
            </h2>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                First Name
              </p>
              <p className=" text-slate-700 capitalize dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.firstname}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Last Name
              </p>
              <p className=" text-slate-700 capitalize dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.lastname}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Country
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.country || "N/A"}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Email
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.email}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Phone Number
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.phone || "N/A"}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Joined On
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.createdAt?.toString().split("T")[0]}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Is Verified
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                {payout.user.isVerified ? "Yes" : "No"}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Bookings Earnings
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                ${payout.user.withdrawableAmount! / 100}
              </p>
            </div>
            <div className="flex items-center border-b pb-2.5 justify-between w-full">
              <p className=" text-slate-700 text-xs dark:text-slate-300 2xl:text-sm">
                Referral Earnings
              </p>
              <p className=" text-slate-700 dark:text-slate-300 text-xs 2xl:text-sm font-semibold">
                ${payout.user.referalWithdrawableAmount! / 100}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full px-4 mb-4 mt-1 gap-2 items-center justify-between">
          <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-5  rounded-full">
            Cancel
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
