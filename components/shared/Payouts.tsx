"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Pagination from "./Pagination";
import { IPayouts } from "@/lib/types/payout";
import { FaEye } from "react-icons/fa";
import CreatePayout from "./CreatePayout";
import PayoutFilter from "./PayoutFilter";

const page = ({
  payout,
  page,
  totalPayouts,
  totalPages,
}: {
  payout: IPayouts[];
  page: number;
  totalPayouts: number;
  totalPages: number;
}) => {
  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl-mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold">Payouts</h1>
      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full p-2.5 2xl:p-3.5 flex flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex flex-col md:flex-row w-full md:w-fit items-center gap-1.5">
            <PayoutFilter />
          </div>
        </div>
        <div className="w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className="bg-background">
            <TableHeader className="mb-1">
              <TableRow className="border-none py-3">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 rounded-tl-full rounded-bl-full">
                  Order ID
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  User Name
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Date
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Paypal Email
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Amount
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Status
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payout && payout.length > 0 ? (
                payout
                  .filter((p) => p) // Ensure no null or undefined items are processed
                  .map((p, i) => (
                    <TableRow key={i} className="border-y-4 border-[#000214]">
                      <TableCell className="text-xs text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full dark:bg-primary-100 2xl:text-sm font-semibold">
                        {p._id && p._id.slice(0, 8) + "..."}
                      </TableCell>

                      <TableCell className="dark:bg-primary-100 capitalize border-y-4 border-[#000214]">
                        {p.user?.firstname
                          ? `${p.user.firstname} ${p.user.lastname}`
                          : "N/A"}
                      </TableCell>

                      <TableCell className="dark:bg-primary-100 border-y-4 border-[#000214]">
                        {p.date
                          ? new Date(p.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "N/A"}
                      </TableCell>

                      <TableCell className="text-xs text-white dark:bg-primary-100 border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                        {p.accountEmail ?? "N/A"}
                      </TableCell>

                      <TableCell className="text-xs text-center text-white dark:bg-primary-100 border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                        {p.amount ? `$${p.amount}` : "N/A"}
                      </TableCell>

                      <TableCell className="dark:bg-primary-100 border-y-4 border-[#000214]">
                        <p
                          className={`${
                            p.status === "completed"
                              ? "bg-emerald-600"
                              : p.status === "rejected"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          } text-white p-2.5 font-semibold capitalize w-fit rounded-full px-5`}
                        >
                          {p.status ?? "N/A"}
                        </p>
                      </TableCell>

                      <TableCell className="text-xs rounded-tr-full rounded-br-full text-white dark:bg-primary-100 border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                        <CreatePayout payout={p} />
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No payouts available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100 px-6">
          <p className="text-xs font-semibold 2xl:text-sm">
            {totalPayouts && totalPayouts} Total payouts
          </p>
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
