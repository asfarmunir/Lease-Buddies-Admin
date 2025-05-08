"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { formUrlQuery } from "@/lib/utils"; // Assuming you have the formUrlQuery function in utils
import { useSearchParams, useRouter } from "next/navigation";

const PayoutFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState("Time Period");
  const searchParams = useSearchParams();
  const router = useRouter();
  // Handler function for filter selection
  const handleFilterChange = (status: string) => {
    const queryString = formUrlQuery({
      params: searchParams.toString(),
      key: "period", // Example query key for status
      value: status === "ALL" ? null : status, // If 'ALL' is selected, we skip the query
    });

    router.push(queryString, { scroll: false });
    setSelectedStatus(status);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="  capitalize w-fit border border-primary-50/30 text-primary-50 justify-center text-nowrap   gap-4 text-xs  px-2 md:px-4  py-2 font-semibold rounded-full inline-flex items-center ">
        {selectedStatus}
        <IoChevronDownOutline className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary-100 mt-1 p-3 rounded-lg shadow-sm">
        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("ALL")}
        >
          <p>ALL</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("this week")}
        >
          <p>This week</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("this month")}
        >
          <p>This month</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("last week")}
        >
          <p>Last week</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("last month")}
        >
          <p>Last month</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center text-xs cursor-pointer 2xl:text-sm justify-between"
          onClick={() => handleFilterChange("last year")}
        >
          <p>Last year</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PayoutFilter;
