"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { LuSearch } from "react-icons/lu";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const CustomersFilter = () => {
  const searchParams = useSearchParams();
  const propertyName = searchParams.get("propertyName");
  const [searchTerm, setSearchTerm] = useState(propertyName || "");
  const router = useRouter();

  // Debounce delay in milliseconds
  const debounceDelay = 100;

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
    <div
      className="bg-[#372f2f4b] inline-flex w-full md:w-fit items-center px-2 pl-3.5 rounded-xl   border
          border-primary-50/40"
    >
      <LuSearch className="w-4 h-4 text-[#848BAC]" />
      <Input
        className=" 
          text-[#848BAC]
          bg-transparent
          border-none
          focus:outline-none
          w-full
          md:w-64
          focus:ring-0
          text-xs
          focus:border-none
          placeholder-slate-900"
        placeholder="Search by owner..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default CustomersFilter;
