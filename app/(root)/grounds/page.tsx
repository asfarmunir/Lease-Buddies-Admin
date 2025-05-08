"use client";

import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { FaTimes, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IProperty } from "@/lib/types/property";
import { Skeleton } from "@/components/ui/skeleton";
import Pagination from "@/components/shared/Pagination";

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

interface Owner {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface Property extends IProperty {
  owner: Owner;
}

const AdminProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalProperties, setTotalProperties] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(debouncedSearch && { search: debouncedSearch }),
      });
      const response = await fetch(
        `/api/admin/properties?${params.toString()}`
      );
      if (!response.ok) throw new Error("Failed to fetch properties");
      const data = await response.json();
      setProperties(data.properties);
      setTotalProperties(data.total);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      toast.error("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [page, debouncedSearch]);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/properties/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete property");
      toast.success("Property deleted successfully");
      fetchProperties(); // Refresh the list
    } catch (err) {
      toast.error("Failed to delete property");
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setPage(1);
  };

  if (error) {
    return (
      <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl-mt-8 text-red-500 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl:mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Property Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold text-white">Properties</h1>
      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full p-2.5 2xl:p-3.5 flex flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="relative w-full md:w-64">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by title, city, or state..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="pl-10 pr-10 bg-white dark:bg-primary-200 border-none rounded-full text-sm 2xl:text-base"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
        <div className="w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className="bg-background">
            <TableHeader className="mb-1">
              <TableRow className="border-none py-3">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200 rounded-tl-full rounded-bl-full">
                  ID
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200">
                  Title
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Type
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Address
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Price
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Owner
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Created
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Status
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200 rounded-tr-full rounded-br-full">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i} className="border-y-4 border-[#000214]">
                    <TableCell className="bg-primary-100 rounded-tl-full rounded-bl-full">
                      <Skeleton className="h-6 w-16" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100">
                      <Skeleton className="h-6 w-32" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-20 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-40 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-16 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-28 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-24 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-16 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full">
                      <Skeleton className="h-6 w-20 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))
              ) : properties.length ? (
                properties.map((p) => (
                  <TableRow key={p._id} className="border-y-4 border-[#000214]">
                    <TableCell className="text-xs text-white bg-primary-100 rounded-tl-full rounded-bl-full 2xl:text-sm font-semibold">
                      {p._id ? String(p._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-white">
                      {p.title || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {p.type || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white truncate max-w-[200px]">
                      {p.address.formattedAddress || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {p.price || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {p.owner
                        ? `${p.owner.firstname} ${p.owner.lastname}`
                        : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {p.isActive ? "Active" : "Inactive"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full flex items-center justify-center gap-2">
                      {/* <Link
                        href={`/admin/properties/${p._id}`}
                        className="bg-primary-50 hover:bg-primary-50/50 transition-colors flex items-center justify-center w-8 h-8 rounded-full"
                      >
                        <FaEye className="w-5 h-5 text-black" />
                      </Link> */}
                      <AlertDialog>
                        <AlertDialogTrigger className="bg-primary-50 hover:bg-primary-50/50 transition-colors flex items-center justify-center w-8 h-8 rounded-full">
                          <MdDelete className="w-5 h-5 text-black" />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="p-0 pb-10 transition-all dark:bg-[#161313CC] border-none 2xl:min-w-[600px]">
                          <AlertDialogCancel className="w-fit absolute right-3 rounded-full border-none dark:bg-[#161313CC] top-3">
                            <IoClose className="w-5 h-5 text-white" />
                          </AlertDialogCancel>
                          <div className="p-6 flex flex-col items-center">
                            <h1 className="text-2xl border-b-2 px-8 border-primary-50/50 pb-3 font-semibold text-center mb-6 text-white">
                              Delete Property?
                            </h1>
                            <p className="text-center text-white">
                              Are you sure you want to delete this property? It
                              will be permanently removed and cannot be
                              recovered.
                            </p>
                            <div className="w-full flex items-center gap-4 mt-4">
                              <AlertDialogCancel className="w-full bg-white text-black rounded-lg text-lg">
                                Cancel
                              </AlertDialogCancel>
                              <button
                                onClick={() => handleDelete(p._id)}
                                className="w-full py-2 rounded-lg bg-primary-50 text-black"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="text-center text-white">
                    No properties found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100 px-6">
          <p className="text-xs font-semibold 2xl:text-sm text-white">
            {totalProperties} Total Properties
          </p>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProperties;
