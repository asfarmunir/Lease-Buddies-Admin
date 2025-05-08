"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { DateTime } from "luxon";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBooking } from "@/lib/types/booking";
import Pagination from "./Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import BookingFilter from "./BookingFilter";
import DeleteBooking from "./DeleteBooking";
const page = ({
  bookings,
  page,
  totalBookings,
  totalPages,
}: {
  bookings: IBooking[];
  page: number;
  totalBookings: number;
  totalPages: number;
}) => {
  const searchParams = useSearchParams();
  const propertyName = searchParams.get("propertyName");
  const [searchTerm, setSearchTerm] = useState(propertyName || "");
  const router = useRouter();

  // Debounce delay in milliseconds
  const debounceDelay = 250;

  // Effect to handle the debounced search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const queryString = formUrlQuery({
        params: searchParams.toString(),
        key: "propertyName",
        value: searchTerm ? searchTerm : null,
      });

      router.push(queryString, { scroll: false });
    }, debounceDelay);

    return () => clearTimeout(debounceTimer); // Cleanup timeout on component unmount or when searchTerm changes
  }, [searchTerm, searchParams, router]);

  // Input change handler
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className=" w-full px-7 md:px-8 2xl:px-20 bg-[#000214]  mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Booking Orders</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-end">
          {/* <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
            <DropdownMenu>
              <DropdownMenuTrigger className=" bg-[#3A99D333] border border-primary-50/30 text-primary-50   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                Order Status
                <IoChevronDownOutline className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" border-y-4 border-[#000214] bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
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
          </div> */}
          <BookingFilter />
          <div className="flex items-center flex-wrap gap-2.5">
            <div className=" bg-[#372f2f4b] inline-flex  w-full md:w-fit items-center px-2 rounded-xl border border-[#372f2f]">
              <LuSearch className="w-4 h-4 text-[#848BAC] " />
              <Input
                className=" 
                text-[#848BAC]
                bg-transparent
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={"search property..."}
              />
            </div>
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 rounded-tl-full rounded-bl-full ">
                  Booking ID
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Property Name
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Dates
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Number of Nights
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Booked By
                </TableHead>

                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Price Per Night
                </TableHead>

                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Phone Number
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Amount Status
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Amount Paid
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {bookings && bookings.length ? (
                bookings.map((booking, i) => (
                  <TableRow key={i} className=" border-y-4 border-[#000214]  ">
                    <TableCell className=" text-xs  text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full dark:bg-primary-100   2xl:text-sm font-semibold">
                      {/* <OrderDetails /> */}
                      {booking._id?.slice(0, 6) + "..."}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 capitalize border-y-4 border-[#000214]    ">
                      {booking.property?.name}
                    </TableCell>
                    <TableCell className=" dark:bg-primary-100  border-y-4 border-[#000214]  ">
                      {booking.checkIn && booking.checkOut
                        ? `
                        
                       
                          ${DateTime.fromISO(booking.checkIn.toString(), {
                            zone: "utc",
                          }).toFormat("MMM dd, yyyy")}
                          
                          - 
                              ${DateTime.fromISO(booking.checkOut.toString(), {
                                zone: "utc",
                              }).toFormat("MMM dd, yyyy")}
                           `
                        : "N/A"}
                    </TableCell>

                    {/*  removed dates 
                    ${new Date(booking.checkOut).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })} */}
                    <TableCell className=" dark:bg-primary-100  border-y-4 border-[#000214]  ">
                      {booking.checkIn && booking.checkOut
                        ? `${Math.ceil(
                            (new Date(booking.checkOut).getTime() -
                              new Date(booking.checkIn).getTime()) /
                              (1000 * 60 * 60 * 24)
                          )} nights`
                        : "N/A"}
                    </TableCell>
                    <TableCell className=" text-xs  text-white capitalize dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {booking.bookingFirstname + " " + booking.bookingLastname}
                    </TableCell>
                    <TableCell className=" text-xs text-center  text-white dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      ${booking.property?.pricePerNight}
                    </TableCell>
                    <TableCell className=" text-xs   text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {booking.bookingPhone}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100  border-y-4 border-[#000214]  ">
                      <p className=" bg-[#00C88C]  text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                        {booking.paymentStatus}
                      </p>
                    </TableCell>
                    <TableCell className=" text-xs    text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      ${booking.totalAmount / 100}
                    </TableCell>
                    <TableCell className=" text-xs  rounded-tr-full rounded-br-full  text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      <DeleteBooking id={booking._id!.toString()} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={10} className="text-center">
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            {totalBookings} Total Bookings
          </p>
          <Pagination page={page} totalPages={totalPages} />
          {/* <div className="flex items-center gap-3 pr-1">
            <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-primary-50" />
            <p className=" font-semibold text-sm 2xl:text-base">1</p>
            <p className=" text-sm 2xl:text-base">2</p>
            <p className=" text-sm 2xl:text-base">...</p>
            <p className=" text-sm 2xl:text-base">8</p>
            <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4 text-primary-50" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
