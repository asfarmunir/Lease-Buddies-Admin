import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import Pagination from "./Pagination";
import { IProperty } from "@/lib/types/property";
import GroundFilter from "./GroundFilter";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Delete from "./Delete";

const page = ({
  properties,
  page,
  totalProperties,
  totalPages,
}: {
  properties?: IProperty[];
  page: number;
  totalProperties?: number;
  totalPages: number;
}) => {
  return (
    <div className=" w-full px-7 md:px-8 2xl:px-20 bg-[#000214]  mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Hunt Grounds</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex items-center flex-wrap gap-2.5">
            <GroundFilter />
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 rounded-tl-full rounded-bl-full ">
                  ID
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Ground Name
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Listed On
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Ground Acres
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Owner Name
                </TableHead>
                <TableHead className="text-sm text-center   bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Owner Email
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Location
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize">
                  Price per night
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-primary-200 capitalize rounded-tr-full rounded-br-full">
                  Action
                </TableHead>
                {/* <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-primary-200 capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {properties &&
                properties.map((p, i) => (
                  <TableRow key={i} className=" border-y-4 border-[#000214]  ">
                    <TableCell className=" text-xs  text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full dark:bg-primary-100   2xl:text-sm font-semibold">
                      {p._id ? String(p._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>

                    <TableCell className="dark:bg-primary-100 capitalize text-center border-y-4 border-[#000214]    ">
                      {p.name || "N/A"}
                    </TableCell>
                    <TableCell className=" dark:bg-primary-100  border-y-4 border-[#000214]  ">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>

                    <TableCell className=" text-xs  text-white capitalize text-center dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {p.acres || "N/A"}
                    </TableCell>

                    <TableCell className=" text-xs  text-white capitalize text-center dark:bg-primary-100  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {/* @ts-ignore */}
                      {p.owner
                        ? p.owner.firstname + " " + p.owner.lastname
                        : "N/A"}
                    </TableCell>
                    <TableCell className=" text-xs text-center   text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {/* @ts-ignore */}
                      {p.owner ? p.owner.email : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center border-y-4 truncate max-w-[150px] border-[#000214]  ">
                      {p.address || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center border-y-4 border-[#000214] ">
                      ${p.pricePerNight ? p.pricePerNight : "N/A"}
                    </TableCell>
                    <TableCell className=" text-xs text-center  rounded-tr-full rounded-br-full  text-white dark:bg-primary-100  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {/* <AlertDialog>
                        <AlertDialogTrigger className="bg-primary-50 hover:bg-primary-50/50 transition-colors   flex items-center  justify-center w-8 h-8 rounded-full text-xs 2xl:text-sm font-semibold">
                          <MdDelete className="w-5 h-5 text-black" />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="p-0 pb-10 transition-all dark:bg-[#161313CC] border-none 2xl:min-w-[600px]">
                          <AlertDialogCancel className="w-fit absolute right-3 rounded-full border-none dark:bg-[#161313CC] top-3">
                            <IoClose className="w-5 h-5 text-white" />
                          </AlertDialogCancel>
                          <div className="p-6 flex flex-col items-center">
                            <h1 className="text-2xl border-b-2 px-8 border-primary-50/50 pb-3 font-semibold text-center mb-6">
                              Delete Huntground?
                            </h1>
                            <p className=" text-center">
                              Are you sure to delete this data, it will be
                              deleted permenently and cannot be recovered.
                            </p>
                            <div className=" w-full flex items-center gap-4 mt-4">
                              <AlertDialogCancel className="w-full  bg-white text-black rounded-lg text-lg  ">
                                Cancel
                              </AlertDialogCancel>
                              <button className=" w-full py-2 rounded-lg bg-primary-50 text-black ">
                                Delete
                              </button>
                            </div>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog> */}
                      <Delete id={p._id} />
                    </TableCell>
                  </TableRow>
                ))}

              {!properties?.length && (
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
            {totalProperties} Total Grounds
          </p>
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
