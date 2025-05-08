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
import { User } from "@/lib/database/user.model";

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

const AdminUsers = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearch = useDebounce(searchTerm, 500);
  const usersPerPage = 10;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/users`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch users");
      }
      const data = await response.json();
      setAllUsers(data.users);
      setFilteredUsers(data.users); // Initially, all users are shown
      setTotalPages(Math.ceil(data.users.length / usersPerPage));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle client-side filtering
  useEffect(() => {
    const lowercasedSearch = debouncedSearch.toLowerCase();
    const filtered = allUsers.filter(
      (user) =>
        user.email?.toLowerCase().includes(lowercasedSearch) ||
        user.firstname?.toLowerCase().includes(lowercasedSearch) ||
        user.lastname?.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredUsers(filtered);
    setTotalPages(Math.ceil(filtered.length / usersPerPage));
    setPage(1); // Reset to first page on search
  }, [debouncedSearch, allUsers]);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete user");
      }
      toast.success("User deleted successfully");
      // Update local state instead of refetching
      setAllUsers((prev) => prev.filter((u) => u._id !== id));
      setFilteredUsers((prev) => prev.filter((u) => u._id !== id));
      setTotalPages(Math.ceil(filteredUsers.length / usersPerPage));
    } catch (err) {
      toast.error("Failed to delete user");
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setPage(1);
  };

  // Calculate users to display for the current page
  const startIndex = (page - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
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
        User Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold text-white">Users</h1>
      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full p-2.5 2xl:p-3.5 flex flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="relative w-full md:w-64">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by email, first name, or last name..."
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
                  Email
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Name
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Registered
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-primary-200">
                  Verified
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
                    <TableCell className="dark:bg-primary-100 rounded-tl-full rounded-bl-full">
                      <Skeleton className="h-6 w-16" />
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
                      <Skeleton className="h-6 w-16 mx-auto" />
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full">
                      <Skeleton className="h-6 w-20 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))
              ) : currentUsers.length ? (
                currentUsers.map((u) => (
                  <TableRow key={u._id} className="border-y-4 border-[#000214]">
                    <TableCell className="text-xs text-white dark:bg-primary-100 rounded-tl-full rounded-bl-full 2xl:text-sm font-semibold">
                      {u._id ? String(u._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-white">
                      {u.email || "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 capitalize text-center text-white">
                      {u.firstname || u.lastname
                        ? `${u.firstname || ""} ${u.lastname || ""}`.trim()
                        : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {u.createdAt
                        ? new Date(u.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 text-center text-white">
                      {u.isVerified ? "Verified" : "Not Verified"}
                    </TableCell>
                    <TableCell className="dark:bg-primary-100 rounded-tr-full rounded-br-full flex items-center justify-center gap-2">
                      <Link
                        href={`/admin/users/${u._id}`}
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
                          <div className="p527e6 flex flex-col items-center">
                            <h1 className="text-2xl border-b-2 px-8 border-primary-50/50 pb-3 font-semibold text-center mb-6 text-white">
                              Delete User?
                            </h1>
                            <p className="text-center text-white">
                              Are you sure you want to delete this user? This
                              action is permanent and cannot be recovered.
                            </p>
                            <div className="w-full flex items-center gap-4 mt-4">
                              <AlertDialogCancel className="w-full bg-white text-black rounded-lg text-lg">
                                Cancel
                              </AlertDialogCancel>
                              <button
                                onClick={() => handleDelete(u._id)}
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
                  <TableCell colSpan={6} className="text-center text-white">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100 px-6">
          <p className="text-xs font-semibold 2xl:text-sm text-white">
            {filteredUsers.length} Total Users
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

export default AdminUsers;
