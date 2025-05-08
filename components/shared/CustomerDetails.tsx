"use client";
import Image from "next/image";
import React from "react";
import { IUser } from "@/lib/types/user";

const page = ({ user, payoutSummary }: { user: IUser; payoutSummary: any }) => {
  const [tab, setTab] = React.useState("orders");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 md:px-20 bg-[#000214] 2xl-mt-8 oyo overflow-hidden ">
      <p className=" font-thin  2xl:text-lg mb-2 text-primary-50">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Customers Details</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full  gap-4">
          <div className="flex flex-col p-4 w-full rounded-2xl gap-4 bg-primary-100">
            <div className=" flex flex-col p-5 flex-grow bg-[#372F2F99] rounded-2xl">
              <Image
                src="/images/totalSpend.svg"
                width={50}
                height={54}
                alt="warning"
                className=" mb-4 2xl:mb-6"
              />
              <h2 className=" font-bold text-xl 2xl:text-4xl mb-1">
                $
                {user.bookingPayments
                  ? user.bookingPayments.reduce(
                      (acc, curr) => acc + curr.amount,
                      0
                    ) / 100
                  : 0}
              </h2>
              <p className=" text-xs 2xl:text-sm">Total Booking Earnings</p>
            </div>{" "}
            <div className=" flex flex-col p-5 flex-grow bg-[#372F2F99] rounded-2xl">
              <Image
                src="/images/totalWithdrawl.svg"
                width={50}
                height={54}
                alt="warning"
                className=" mb-4 2xl:mb-6"
              />
              <h2 className=" font-bold text-xl 2xl:text-4xl mb-1">
                $
                {user.referralEarnings
                  ? user.referralEarnings.reduce(
                      (acc, curr) => acc + curr.amount,
                      0
                    ) / 100
                  : 0}
              </h2>
              <p className=" text-xs 2xl:text-sm">Total Refferal Earnings</p>
            </div>{" "}
          </div>
          <div className=" w-full bg-primary-100 p-4 flex rounded-2xl flex-col items-center">
            <h3 className=" w-full  bg-primary-200 p-3 mb-5 text-sm 2xl:text-base rounded-2xl font-semibold text-center">
              Detailed Information
            </h3>
            <div className=" p-4 space-y-4 bg-white dark:bg-primary-100 w-full rounded-2xl">
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2   w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Email</p>
                <p className=" font-semibold ">{user.email}</p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2   w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Joined On</p>
                <p className=" font-semibold capitalize">
                  {user.createdAt?.toString().split("T")[0]}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2   w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Phone</p>
                <p className=" font-semibold capitalize">
                  {user.phone || "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2   w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Address </p>
                <p className=" font-semibold capitalize">
                  {user.address ? user.address : "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2   w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">City</p>
                <p className=" font-semibold capitalize">
                  {user.city && user.country
                    ? `${user.city}, ${user.country}`
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full bg-primary-100 p-4 flex rounded-2xl flex-col items-center">
            <h3 className=" w-full bg-primary-200 text-primary-50 text-sm 2xl:text-base  p-3 mb-5 rounded-3xl font-semibold text-center">
              Activities
            </h3>
            <div className=" p-4 space-y-4  w-full rounded-2xl">
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Users Reffered</p>
                <p className=" font-semibold capitalize">
                  {user.referedUsers
                    ? user.referedUsers?.length < 10
                      ? `0${user.referedUsers?.length}`
                      : user.referedUsers?.length
                    : "0"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Saved Properties</p>
                <p className=" font-semibold capitalize">
                  {user.savedProperties ? user.savedProperties.length : 0}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">verify</p>
                <p className=" font-semibold capitalize">
                  {user.isVerified ? "Verified Customer" : "Not Verified"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Withdrawable Amount</p>
                <p className=" font-semibold capitalize">
                  ${user.withdrawableAmount ? user.withdrawableAmount / 100 : 0}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">
                  Withdrawable Referral
                </p>
                <p className=" font-semibold capitalize">
                    $
                  {user.referalWithdrawableAmount
                    ? user.referalWithdrawableAmount / 100
                    : 0}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full p-5 2xl:py-10 gap-3 bg-primary-100 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-28 h-28 mb-4 2xl:w-36 2xl:h-36 rounded-full overflow-hidden">
              <Image
                src={user.profileImage || "/logoIcon.svg"}
                width={500}
                height={500}
                alt="warning"
                className=" object-cover w-full h-full rounded-full object-center"
              />
            </div>
            <h3 className=" text-2xl text-primary-50 capitalize text-center 2xl:text-3xl font-bold">
              {user.firstname + " " + user.lastname}
            </h3>
            <div className="flex items-center gap-2.5">
              <p
                className={`
              ${user.isVerified ? "bg-emerald-600" : "bg-yellow-500"}
                 text-white text-xs 2xl:text-sm text-nowrap  p-2.5 font-semibold rounded-full px-5`}
              >
                {user.isVerified ? "Verified" : "Not Verified"}
              </p>
              <p
                className={`
            bg-emerald-600
                 text-white text-xs 2xl:text-sm p-2.5 font-semibold rounded-full px-5`}
              >
                {user._id ? user._id.slice(0, 8) + "..." : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 rounded-2xl gap-4 bg-primary-100/50">
          <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/balance.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              $
              {user.referalWithdrawableAmount
                ? user.referalWithdrawableAmount / 100
                : 0}
            </h2>
            <p className=" text-xs 2xl:text-sm">Refferal Balance</p>
          </div>{" "}
          {/* <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/equity.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">$9203</h2>
            <p className=" text-xs 2xl:text-sm capitalize">Equity</p>
          </div>{" "}
          <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/total.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">$202,304</h2>
            <p className=" text-xs 2xl:text-sm">Profit</p>
          </div>{" "} */}
          <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/withdraw.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              ${user.withdrawableAmount ? user.withdrawableAmount / 100 : 0}
            </h2>
            <p className=" text-xs 2xl:text-sm capitalize">
              withdrawable profit
            </p>
          </div>{" "}
          <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/total.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              ${payoutSummary.totalAmount ? payoutSummary.totalAmount : 0}
            </h2>
            <p className=" text-xs 2xl:text-sm capitalize">total payouts</p>
          </div>{" "}
          {/* <div className=" flex flex-col p-5 flex-grow bg-[#16131399] rounded-2xl">
            <Image
              src="/images/server.svg"
              width={50}
              height={54}
              alt="warning"
              className=" mb-9 2xl:mb-12"
            />
            <h2 className=" font-bold text-3xl 2xl:text-4xl">Match Traders</h2>
            <p className=" text-xs 2xl:text-sm capitalize">server</p>
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default page;
