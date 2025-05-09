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
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import Pagination from "@/components/shared/Pagination";
import toast from "react-hot-toast";

interface Subscription {
  _id: string;
  user: {
    _id: string;
    firstname?: string;
    lastname?: string;
  };
  property: {
    _id: string;
    title: string;
  };
  plan: "monthly" | "quarterly";
  status: "active" | "canceled" | "past_due" | "unpaid";
  boostExpiration: Date;
  createdAt: Date;
}

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

const AdminSubscriptions = () => {
  const [allSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState<
    Subscription[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearch = useDebounce(searchTerm, 500);
  const subscriptionsPerPage = 10;

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/subscriptions`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch subscriptions");
      }
      const data = await response.json();
      setAllSubscriptions(data.subscriptions);
      setFilteredSubscriptions(data.subscriptions); // Initially, all subscriptions
      setTotalPages(
        Math.ceil(data.subscriptions.length / subscriptionsPerPage)
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      toast.error("Failed to load subscriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  // Handle client-side filtering
  useEffect(() => {
    const lowercasedSearch = debouncedSearch.toLowerCase();
    const filtered = allSubscriptions.filter(
      (sub) =>
        sub.user.firstname?.toLowerCase().includes(lowercasedSearch) ||
        sub.user.lastname?.toLowerCase().includes(lowercasedSearch) ||
        sub.property.title.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredSubscriptions(filtered);
    setTotalPages(Math.ceil(filtered.length / subscriptionsPerPage));
    setPage(1); // Reset to first page on search
  }, [debouncedSearch, allSubscriptions]);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/subscriptions/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete subscription");
      }
      toast.success("Subscription deleted successfully");
      // Update local state
      setAllSubscriptions((prev) => prev.filter((s) => s._id !== id));
      setFilteredSubscriptions((prev) => prev.filter((s) => s._id !== id));
      setTotalPages(
        Math.ceil(filteredSubscriptions.length / subscriptionsPerPage)
      );
    } catch (err) {
      toast.error("Failed to delete subscription");
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setPage(1);
  };

  // Calculate subscriptions to display for the current page
  const startIndex = (page - 1) * subscriptionsPerPage;
  const currentSubscriptions = filteredSubscriptions.slice(
    startIndex,
    startIndex + subscriptionsPerPage
  );

  if (error) {
    return (
      <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl:mt-8 text-red-500 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl:mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Subscription Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold text-white">
        Subscriptions
      </h1>
      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full p-2.5 2xl:p-3.5 flex flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="relative w-full md:w-64">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by customer or property name..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
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
                  Customer
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-primary-200">
                  Property
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Plan
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Status
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Boost Expiration
                </TableHead>
                {/* <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200 rounded-tr-full rounded-br-full">
                  Actions
                </TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i} className="border-y-4 border-[#000214]">
                    <TableCell className="dark:bg-primary-100 rounded-tl-full rounded-bl-full">
                      <Skeleton className="h-6 w-16" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100">
                      <Skeleton className="h-6 w-32" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100">
                      <Skeleton className="h-6 w-32" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-20 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-24 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center">
                      <Skeleton className="h-6 w-24 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full">
                      <Skeleton className="h-6 w-20 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))
              ) : currentSubscriptions.length ? (
                currentSubscriptions.map((s) => (
                  <TableRow key={s._id} className="border-y-4 border-[#000214]">
                    <TableCell className="text-xs text-white dark:bg-primary-100 rounded-tl-full rounded-bl-full 2xl:text-sm font-semibold">
                      {s._id ? String(s._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-white capitalize">
                      {s.user.firstname || s.user.lastname
                        ? `${s.user.firstname || ""} ${
                            s.user.lastname || ""
                          }`.trim()
                        : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-white">
                      {s.property.title || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white capitalize">
                      {s.plan || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white capitalize">
                      {s.status || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {s.boostExpiration
                        ? new Date(s.boostExpiration).toLocaleDateString()
                        : "N/A"}
                    </TableCell>
                    {/* <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full flex items-center justify-center gap-2">
                      <Link
                        href={`/admin/subscriptions/${s._id}`}
                        className="bg-primary-50 hover:bg-primary-50/50 transition-colors flex items-center justify-center w-8 h-8 rounded-full"
                      >
                        <FaEye className="w-5 h-5 text-black" />
                      </Link>
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
                              Delete Subscription?
                            </h1>
                            <p className="text-center text-white">
                              Are you sure you want to delete this subscription?
                              This action is permanent and cannot be recovered.
                            </p>
                            <div className="w-full flex items-center gap-4 mt-4">
                              <AlertDialogCancel className="w-full bg-white text-black rounded-lg text-lg">
                                Cancel
                              </AlertDialogCancel>
                              <button
                                onClick={() => handleDelete(s._id)}
                                className="w-full py-2 rounded-lg bg-primary-50 text-black"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell> */}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-white">
                    No subscriptions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100 px-6">
          <p className="text-xs font-semibold 2xl:text-sm text-white">
            {filteredSubscriptions.length} Total Subscriptions
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

export default AdminSubscriptions;
