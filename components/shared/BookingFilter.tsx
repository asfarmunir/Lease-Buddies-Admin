"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { formUrlQuery } from "@/lib/utils"; // Assuming you have the formUrlQuery function in utils
import { useSearchParams, useRouter } from "next/navigation";

const PayoutFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState("Booking Status");
  const searchParams = useSearchParams();
  const router = useRouter();
  // Handler function for filter selection
  const handleFilterChange = (status: string) => {
    setSelectedStatus(status);

    const queryString = formUrlQuery({
      // params: searchParams.toString(),
      params: "/orders",
      key: "period", // Example query key for status
      value: status === "ALL" ? null : status, // If 'ALL' is selected, we skip the query
    });

    router.replace(queryString, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" bg-[#3A99D333] capitalize border border-primary-50/30 text-primary-50 justify-center text-nowrap w-full md:w-40 gap-4 text-xs 2xl:text-sm px-3 md:px-4 py-2.5 font-semibold rounded-full inline-flex items-center ">
        {selectedStatus}
        <IoChevronDownOutline className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary-200 mt-1 p-3 rounded-lg shadow-sm">
        <DropdownMenuItem
          className="flex items-center text-xs 2xl:text-sm justify-between cursor-pointer"
          onClick={() => handleFilterChange("ALL")}
        >
          <p>All</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center text-xs 2xl:text-sm justify-between cursor-pointer"
          onClick={() => handleFilterChange("upcoming")}
        >
          <p>Upcoming</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center text-xs 2xl:text-sm justify-between cursor-pointer"
          onClick={() => handleFilterChange("completed")}
        >
          <p>Completed</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PayoutFilter;
