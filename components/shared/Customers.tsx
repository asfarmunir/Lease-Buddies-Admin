import { Input } from "@/components/ui/input";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./Pagination";
import { IUser } from "@/lib/types/user";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import CustomersFilter from "./CustomersFilter";
import DeleteCustomer from "./DeleteCustomer";

const page = ({
  users,
  page,
  totalUsers,
  totalPages,
}: {
  users?: IUser[];
  page: number;
  totalUsers?: number;
  totalPages: number;
}) => {
  return (
    <div className=" w-full px-7 md:px-8 2xl:px-20 bg-[#000214]  mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Customers</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex items-center flex-wrap gap-2.5">
            <CustomersFilter />
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 rounded-tl-full rounded-bl-full ">
                  User ID
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  User Name
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  User Email
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Verified Status
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Location
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Referred Users
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Withdrawable Amount
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Referrals Amount
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {users &&
                users.map((user, i) => (
                  <TableRow key={i} className=" border-y-4 border-[#000214]  ">
                    <TableCell className=" text-xs  text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full dark:bg-primary-100   2xl:text-sm font-semibold">
                      {user._id ? String(user._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>

                    <TableCell className="dark:bg-primary-100 capitalize border-y-4 border-[#000214]    ">
                      {user.firstname && user.lastname
                        ? user.firstname + " " + user.lastname
                        : "N/A"}
                    </TableCell>
                    <TableCell className=" dark:bg-primary-100  border-y-4 border-[#000214]  ">
                      {user.email || "N/A"}
                    </TableCell>

                    <TableCell className=" text-xs  text-white capitalize dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      <p
                        className={`${
                          user.isVerified ? "bg-emerald-600" : "bg-yellow-500"
                        } text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold`}
                      >
                        {user.isVerified ? "Verified" : "Pending"}
                      </p>
                    </TableCell>

                    <TableCell className=" text-xs text-center  text-white capitalize dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {user.city && user.country
                        ? `${user.city}, ${user.country}`
                        : "Not Provided"}
                    </TableCell>
                    <TableCell className=" text-xs text-center   text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {user.referedUsers ? user.referedUsers.length : 0}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center border-y-4 border-[#000214]  ">
                      $
                      {user.withdrawableAmount
                        ? user.withdrawableAmount / 100
                        : "0"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center border-y-4 border-[#000214]  ">
                      $
                      {user.referalWithdrawableAmount
                        ? user.referalWithdrawableAmount / 100
                        : "0"}
                    </TableCell>
                    <TableCell className=" text-xs text-center  rounded-tr-full rounded-br-full  text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/customerDetails/${user._id}`}
                          className="bg-primary-50 text-black  flex items-center  justify-center w-8 h-8 rounded-full text-xs 2xl:text-sm font-semibold"
                        >
                          <FaEye className="w-4 h-4" />
                        </Link>
                        <DeleteCustomer id={user._id!.toString()} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              {!users?.length && (
                <TableRow>
                  <TableCell colSpan={9} className="text-center">
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            {totalUsers} Total users
          </p>
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
