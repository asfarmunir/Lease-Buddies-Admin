"use client";
import Image from "next/image";
import { notFound } from "next/navigation";

interface UserDetails {
  _id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  isVerified?: boolean;
  profileImage?: string;
  createdAt?: Date;
  bookingPayments?: { amount: number; date: Date }[];
  referralEarnings?: { amount: number; date: Date }[];
  referedUsers?: string[];
  savedProperties?: string[];
  withdrawableAmount?: number;
  referalWithdrawableAmount?: number;
}

interface PayoutSummary {
  totalAmount: number;
  count: number;
}

async function fetchUserDetails(id: string): Promise<{
  user: UserDetails;
  payoutSummary: PayoutSummary;
}> {
  const response = await fetch(`/api/admin/users/${id}`);

  console.log("🚀 ~ fetchUserDetails ~ response:", response);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch user details");
  }

  return response.json();
}

export default async function CustomerDetails({
  params,
}: {
  params: { id: string };
}) {
  let user: UserDetails;

  try {
    ({ user } = await fetchUserDetails(params.id));
    console.log("🚀 ~ user:", user);
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message.includes("Unauthorized") ||
        error.message.includes("Forbidden"))
    ) {
      return (
        <div className="w-full px-7 mt-7 md:px-20 bg-[#000214] text-red-500 text-center">
          Access Denied: {error.message}
        </div>
      );
    }
    if (error instanceof Error && error.message.includes("User not found")) {
      notFound();
    }
    return (
      <div className="w-full px-7 mt-7 md:px-20 bg-[#000214] text-red-500 text-center">
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    <div className="w-full px-7 mt-7 md:px-20 bg-[#000214] 2xl:mt-8 overflow-hidden">
      <p className="font-thin 2xl:text-lg mb-2 text-primary-50">
        User Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold text-white">
        Customer Details
      </h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          <div className="w-full bg-primary-100 p-4 flex rounded-2xl flex-col items-center">
            <h3 className="w-full bg-primary-200 p-3 mb-5 text-sm 2xl:text-base rounded-2xl font-semibold text-center">
              Detailed Information
            </h3>
            <div className="p-4 space-y-4 bg-white dark:bg-primary-100 w-full rounded-2xl">
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Email</p>
                <p className="font-semibold">{user.email || "N/A"}</p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Joined On</p>
                <p className="font-semibold capitalize">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Phone</p>
                <p className="font-semibold capitalize">
                  {user.phone || "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Address</p>
                <p className="font-semibold capitalize">
                  {user.address || "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">City</p>
                <p className="font-semibold capitalize">
                  {user.city && user.country
                    ? `${user.city}, ${user.country}`
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-primary-100 p-4 flex rounded-2xl flex-col items-center">
            <h3 className="w-full bg-primary-200 text-white text-sm 2xl:text-base p-3 mb-5 rounded-3xl font-semibold text-center">
              Activities
            </h3>
            <div className="p-4 space-y-4 w-full rounded-2xl">
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Users Referred</p>
                <p className="font-semibold capitalize">
                  {user.referedUsers
                    ? user.referedUsers.length < 10
                      ? `0${user.referedUsers.length}`
                      : user.referedUsers.length
                    : "00"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Saved Properties</p>
                <p className="font-semibold capitalize">
                  {user.savedProperties ? user.savedProperties.length : 0}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Verification</p>
                <p className="font-semibold capitalize">
                  {user.isVerified ? "Verified Customer" : "Not Verified"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">Withdrawable Amount</p>
                <p className="font-semibold capitalize">
                  $
                  {user.withdrawableAmount
                    ? (user.withdrawableAmount / 100).toFixed(2)
                    : "0.00"}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-primary-50/50 pb-2 w-full py-2 text-xs 2xl:text-sm">
                <p className="font-semibold capitalize">
                  Withdrawable Referral
                </p>
                <p className="font-semibold capitalize">
                  $
                  {user.referalWithdrawableAmount
                    ? (user.referalWithdrawableAmount / 100).toFixed(2)
                    : "0.00"}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 2xl:py-10 gap-3 bg-primary-100 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-28 h-28 mb-4 2xl:w-36 2xl:h-36 rounded-full overflow-hidden">
              <Image
                src={user.profileImage || "/logoIcon.svg"}
                width={500}
                height={500}
                alt="User Profile"
                className="object-cover w-full h-full rounded-full object-center"
              />
            </div>
            <h3 className="text-2xl text-primary-50 capitalize text-center 2xl:text-3xl font-bold">
              {(user.firstname || "") + " " + (user.lastname || "") || "N/A"}
            </h3>
            <div className="flex items-center gap-2.5">
              <p
                className={`
                  ${user.isVerified ? "bg-emerald-600" : "bg-yellow-500"}
                  text-white text-xs 2xl:text-sm text-nowrap p-2.5 font-semibold rounded-full px-5`}
              >
                {user.isVerified ? "Verified" : "Not Verified"}
              </p>
              <p className="bg-emerald-600 text-white text-xs 2xl:text-sm p-2.5 font-semibold rounded-full px-5">
                {user._id ? user._id.slice(0, 8) + "..." : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
