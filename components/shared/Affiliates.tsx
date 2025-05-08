"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Pagination from "./Pagination";
import { LuSearch } from "react-icons/lu";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface comissions {
  amount: number;
  username: string;
  email: string;
  profileImage: string | null;
}

const page = ({
  affiliatePage,
  commisionPage,
  totalAffiliatePages,
  referralCommission,
  referralBookings,
  totalCommissionPages,
}: {
  referralCommission: comissions[];
  referralBookings: any;
  affiliatePage: number;
  commisionPage: number;
  totalAffiliatePages: number;
  totalCommissionPages: number;
}) => {
  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 md:px-20 bg-[#000214] overflow-hidden ">
      <p className=" font-thin mb-2 text-white -50 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Affiliates</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className=" w-full  flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col gap-1 w-full md:w-[60%] bg-primary-100 p-4">
            {/* <div className=" w-full p-5 rounded-2xl flex items-center justify-between bg-primary-200">
              <div className="flex flex-col">
                <p className=" font-semibold">Totals</p>
              </div>
              <div className="flex text-xs md:text-base text-nowrap items-center flex-col md:flex-row gap-2.5">
                <p className=" text-white bg-purple-400/30 p-2.5 font-semibold rounded-full px-5">
                  343384
                </p>
              </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full py-4 rounded-2xl gap-4 ">
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">
                  $
                  {referralBookings.length
                    ? referralBookings.reduce(
                        (acc: number, curr: any) =>
                          acc + curr.totalBookingAmount,
                        0
                      ) / 100
                    : 0}
                </h2>
                <p className=" text-xs 2xl:text-sm">Referall Revenue</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">
                  $
                  {referralCommission.length
                    ? referralCommission.reduce(
                        (acc, curr) => acc + curr.amount,
                        0
                      ) / 100
                    : 0}
                </h2>
                <p className=" text-xs 2xl:text-sm">Commissions Amount</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">
                  {referralBookings.length
                    ? referralBookings.length > 10
                      ? referralBookings.length
                      : `0${referralBookings.length}`
                    : 0}
                </h2>
                <p className=" text-xs 2xl:text-sm capitalize">Affiliates</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">
                  {referralCommission.length
                    ? referralCommission.length > 10
                      ? referralCommission.length
                      : `0${referralCommission.length}`
                    : 0}
                </h2>
                <p className=" text-xs 2xl:text-sm capitalize">Commissons</p>
              </div>{" "}
            </div>
          </div>
          <div className=" h-full w-full relative rounded-xl bg-primary-100 bg md:w-[40%] flex flex-col gap-3 p-4">
            <p className="p-3 bg-[#372F2F99] text-white mb-12 py-7 rounded-2xl font-semibold w-full">
              Need Help?
            </p>
            <h2 className="text-xl  text-white -50 font-semibold z-40 ">
              We are here to help you!
            </h2>
            <p className=" mb-2 text-sm z-40 max-w-xs ">
              Need help setting up SliceWP or have any questions about the
              plugin?
            </p>
            <Image
              src="/boy.png"
              width={300}
              height={300}
              alt="affiliates"
              className=" absolute  right-0 bottom-0
              w-[260px] h-[200px] z-0
              2xl:w-[300px] 2xl:h-[250px] 
              "
            />
            <button className=" w-fit text-white -50 mb-3 2xl:mb-7 bg-[#3A99D333] border border-primary-50  p-3.5 font-semibold rounded-full px-5">
              Open a support ticket
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row justify-center gap-4">
        <LatestRegisteredAffiliates
          data={referralBookings}
          affiliatePage={affiliatePage}
          totalAffiliatePages={totalAffiliatePages}
        />
        <LatestCommisions
          data={referralCommission}
          commisionPage={commisionPage}
          totalCommissionPages={totalCommissionPages}
        />
      </div>
    </div>
  );
};

export default page;

const LatestRegisteredAffiliates = ({
  data,
  affiliatePage,
  totalAffiliatePages,
}: {
  data: any[];
  affiliatePage: number;
  totalAffiliatePages: number;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // Debounce delay in milliseconds
  const debounceDelay = 50;

  // Effect to handle the debounced search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const queryString = formUrlQuery({
        params: searchParams.toString(),
        key: "affiliateName",
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
    <div className=" w-full rounded-3xl bg-[#372F2F99]  mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-3.5  flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full   items-center justify-between gap-1.5">
          <h3 className="font-semibold pl-4 py-4">
            Latest Registered Affiliates
          </h3>
          <div className=" bg-[#372f2f4b] inline-flex  w-full md:w-fit items-center px-2 rounded-xl border-2 border-primary-50/30">
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
              placeholder={"search affiliate..."}
            />
          </div>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
        <Table className=" ">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-primary-200/50 rounded-tl-full rounded-bl-full ">
                Affiliate
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                Email
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                Amount
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50  rounded-tr-full rounded-br-full  capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-white border-y-4 border-primary   rounded-tl-full rounded-bl-full  bg-primary-200  2xl:text-sm font-semibold">
                  <div className="flex items-center gap-4">
                    <div className=" w-[35px] overflow-hidden rounded-full flex items-center justify-center h-[35px]">
                      <Image
                        src={
                          item?.profileImage
                            ? item.profileImage
                            : "/logoIcon.svg"
                        }
                        width={50}
                        height={50}
                        alt="avatar"
                        className=" object-cover object-center"
                      />
                    </div>
                    <p>{item?.username}</p>
                  </div>
                </TableCell>
                <TableCell className=" text-xs  text-white border-y-4 border-primary     bg-primary-200  2xl:text-sm font-semibold">
                  {item?.email}
                </TableCell>
                <TableCell className=" text-xs  text-white border-y-4 border-primary     bg-primary-200  2xl:text-sm font-semibold">
                  ${item?.totalBookingAmount / 100}
                </TableCell>
                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-white border-y-4 border-primary    bg-primary-200  2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#3A99D333]/20 dark:border-slate-700 border-slate-200 border">
                    Paid
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length === 0 && (
          <p className=" w-full text-center  py-4">No affiliates yet</p>
        )}
        <div className="flex items-center justify-end my-3">
          <Pagination
            page={affiliatePage}
            totalPages={totalAffiliatePages}
            urlParamName="affiliatePage"
          />
        </div>
      </div>
    </div>
  );
};
const LatestCommisions = ({
  data,
  commisionPage,
  totalCommissionPages,
}: {
  data: comissions[];
  commisionPage: number;
  totalCommissionPages: number;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // Debounce delay in milliseconds
  const debounceDelay = 50;

  // Effect to handle the debounced search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const queryString = formUrlQuery({
        params: searchParams.toString(),
        key: "commissionateName",
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
    <div className=" w-full rounded-3xl bg-[#372F2F99]  mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-3.5  flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full   items-center justify-between gap-1.5">
          <h3 className="font-semibold pl-4 py-4">Latest Commisions</h3>
          <div className=" bg-[#372f2f4b] inline-flex  w-full md:w-fit items-center px-2 rounded-xl border-2 border-primary-50/30">
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
              placeholder={"search affiliate..."}
            />
          </div>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
        <Table className=" ">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-primary-200/50 rounded-tl-full rounded-bl-full ">
                Affiliate
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                Email
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                Amount
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50  rounded-tr-full rounded-br-full  capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-white border-y-4 border-primary  rounded-tl-full rounded-bl-full  bg-primary-200  2xl:text-sm font-semibold">
                  <div className="flex items-center gap-4">
                    <div className=" w-[35px] overflow-hidden rounded-full flex items-center justify-center h-[35px]">
                      <Image
                        src={
                          item?.profileImage
                            ? item.profileImage
                            : "/logoIcon.svg"
                        }
                        width={50}
                        height={50}
                        alt="avatar"
                        className=" object-cover object-center"
                      />
                    </div>
                    <p>{item?.username}</p>
                  </div>
                </TableCell>
                <TableCell className=" text-xs  text-white border-y-4 border-primary    bg-primary-200  2xl:text-sm font-semibold">
                  {item?.email}
                </TableCell>
                <TableCell className=" text-xs  text-white border-y-4 border-primary    bg-primary-200  2xl:text-sm font-semibold">
                  ${item?.amount / 100}
                </TableCell>
                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-white border-y-4 border-primary   bg-primary-200  2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#3A99D333]/20 dark:border-slate-700 border-slate-200 border">
                    Paid
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length === 0 && (
          <p className=" w-full text-center  py-4">No commisions yet</p>
        )}
        <div className="flex items-center justify-end my-3">
          <Pagination
            page={commisionPage}
            totalPages={totalCommissionPages}
            urlParamName="commisionPage"
          />
        </div>
      </div>
    </div>
  );
};
