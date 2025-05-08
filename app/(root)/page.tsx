// import { Input } from "@/components/ui/input";
// import { calculateTotalBookingAmount } from "@/lib/database/actions/booking.action";
// import { calculateBookingPaymentStats } from "@/lib/database/actions/user.action";
// import { getServerSession } from "next-auth";
// import Image from "next/image";
// import React from "react";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
// import PaymentPeriodFilter from "@/components/shared/PaymentsPeriodFilter";
// const page = async ({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | undefined };
// }) => {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect("/login");
//   }

//   const timePeriod = searchParams?.period as string | undefined;
//   console.log("🚀 ~ page ~ timePeriod:", timePeriod);
//   const stats = await calculateBookingPaymentStats(timePeriod);
//   console.log("🚀 ~ page ~ stats:", stats);
//   const totalPayment = await calculateTotalBookingAmount();

//   // Helper function to format currency
//   const formatCurrency = (amount: number) => {
//     return (amount / 100).toFixed(2); // Dividing by 100 and formatting to 2 decimal places
//   };

//   const salesGrowth =
//     stats.totalBookingPaymentsLastMonth! - stats.totalBookingPaymentsTwoMonths!;

//   return (
//     <div className="w-full px-5 md:px-20 mt-10 2xl-mt-12 bg-[#000214]">
//       <div className="flex items-center justify-between w-full">
//         <div className="flex flex-col">
//           <p className="font-thin mb-2 2xl:text-lg text-primary-50">
//             Sales Management
//           </p>
//           <h1 className="text-4xl 2xl:text-5xl font-bold">Dashboard</h1>
//         </div>
//       </div>

//       <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3 gap-4">
//         {/* Revenue Section */}
//         <div className="w-full rounded-3xl p-3.5 mt-6 2xl:mt-8">
//           <p className="2xl:text-xl text-lg mb-4">Revenue</p>
//           <div className="w-full flex bg-[#16131399] flex-col p-6 pb-7 gap-3.5 rounded-3xl">
//             <div className="w-full flex items-center justify-between">
//               <div className="flex flex-col gap-1">
//                 <p className="2xl:text-lg font-thin">Last Month Sale</p>
//                 <h1 className="text-3xl 2xl:text-4xl font-bold">
//                   ${formatCurrency(stats.totalBookingPaymentsLastMonth || 0)}
//                 </h1>
//               </div>
//               <p className="bg-[#00C88C1A] px-4 py-2.5 text-xs font-semibold rounded-full text-center text-green-600">
//                 +1.5%
//               </p>
//             </div>
//             {stats.totalBookingPaymentsLastMonth && (
//               <div className="w-full h-7 mb-4 rounded-full bg-[#372F2F99]">
//                 {/* Calculate width percentage based on totalBookingPaymentsLastMonth out of 1000 */}
//                 <div
//                   className="bg-[#3A99D3] rounded-full h-full"
//                   style={{
//                     width: `${Math.min(
//                       (stats.totalBookingPaymentsLastMonth / 100000) * 10,
//                       100
//                     )}%`, // Ensure the width doesn't exceed 100%
//                   }}
//                 ></div>
//               </div>
//             )}

//             <div className="w-full flex items-center justify-between">
//               <div className="flex flex-col gap-1">
//                 <p className="2xl:text-lg font-thin">Total Sales</p>
//                 <h1 className="text-3xl 2xl:text-4xl font-bold">
//                   $
//                   {stats.bookingPaymentsInPeriod === null
//                     ? formatCurrency(stats.totalBookingPayments || 0)
//                     : formatCurrency(stats.bookingPaymentsInPeriod || 0)}
//                 </h1>
//               </div>
//               <PaymentPeriodFilter />
//             </div>
//             {stats.totalBookingPayments && (
//               <div className="w-full h-7 mb-4 rounded-full bg-[#372F2F99]">
//                 {/* Calculate width percentage based on totalBookingPayments out of 1000 */}
//                 <div
//                   className="bg-[#3A99D3] rounded-full h-full"
//                   style={{
//                     width: `${Math.min(
//                       (stats.totalBookingPayments / 100000) * 100,
//                       100
//                     )}%`, // Ensure the width doesn't exceed 100%
//                   }}
//                 ></div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Withdrawable Profit Section */}
//         <div className="w-full rounded-3xl p-3.5 mt-6 2xl:mt-8">
//           <p className="2xl:text-xl text-lg mb-4">Withdrawable Profit</p>
//           <div className="w-full bg-[#16131399] rounded-3xl p-6 mb-4 relative flex flex-col gap-3">
//             <p className="2xl:text-lg font-semibold">Sales Growth</p>
//             <h3 className="text-2xl 2xl:text-3xl font-bold">
//               {salesGrowth > 0 ? (
//                 <span className="text-green-500">
//                   +${formatCurrency(salesGrowth)}
//                 </span>
//               ) : (
//                 <span className="text-red-500">
//                   -${formatCurrency(Math.abs(salesGrowth))}
//                 </span>
//               )}
//             </h3>
//             {/* <p className="text-xs 2xl:text-sm text-green-500 font-semibold">
//               {salesGrowth > 0 ? "+" : "-"}18% Total to pay
//             </p> */}
//             <Image
//               src="/images/graph.svg"
//               width={100}
//               height={100}
//               alt="chart"
//               className="absolute right-10 top-[40%]"
//             />
//           </div>

//           <div className="w-full bg-[#16131399] rounded-3xl p-6 relative flex flex-col gap-3">
//             <p className="2xl:text-lg font-semibold">Total Revenues</p>
//             <h3 className="text-2xl 2xl:text-3xl font-bold">
//               $
//               {formatCurrency(
//                 totalPayment.totalBookingAmount - stats.totalBookingPayments!
//               )}
//             </h3>
//             <p className="text-xs 2xl:text-sm text-green-500 font-semibold">
//               +18% Total to pay
//             </p>
//             <Image
//               src="/images/graph.svg"
//               width={100}
//               height={100}
//               alt="chart"
//               className="absolute right-10 top-[40%]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
