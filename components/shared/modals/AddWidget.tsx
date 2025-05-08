"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoMdAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { GrEdit } from "react-icons/gr";
import { MdOutlineAdd } from "react-icons/md";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  customer: z.string().min(1, {
    message: "Please select a customer",
  }),

  date: z.string().min(1, {
    message: "Please select a date",
  }),
  sendEmail: z.boolean(),
  currency: z.string().min(1, {
    message: "Please select a currency",
  }),
  accountSize: z.string().min(1, {
    message: "Please enter a account size",
  }),
  amount: z.string().min(1, {
    message: "Please enter a amount",
  }),
});

const AddClient = () => {
  const [type, setType] = React.useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer: "",
      date: "",
      sendEmail: false,
      currency: "",
      accountSize: "",
      amount: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex items-center justify-between py-3 px-4
       flex-grow rounded-xl font-semibold bg-[#372F2FCC]/30 border border-[#372F2FCC] "
      >
        Add Widget
        <Image
          src="/add.png"
          width={20}
          height={20}
          alt="add"
          className="dark:invert"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  rounded-lg 2xl:min-w-[600px]  ">
        <AlertDialogHeader className="pb-4 border-b">
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Add Widget
              </p>
              <p className="text-xs  md:text-sm 2xl:text-base ">
                Enhance your user experience with our customizable widgets.
              </p>
            </div>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-primary bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <div className=" px-4 mb-7 space-y-2">
          <div className="w-full flex items-center justify-between p-4 bg-[#FBFBFB] dark:bg-slate-900 rounded-lg">
            <p className="font-semibold">Account Created</p>
            <Checkbox />
          </div>
          <div className="w-full flex items-center justify-between p-4 bg-[#FBFBFB] dark:bg-slate-900 rounded-lg">
            <p className="font-semibold">Account Passed</p>
            <Checkbox />
          </div>
          <div className="w-full flex items-center justify-between p-4 bg-[#FBFBFB] dark:bg-slate-900 rounded-lg">
            <p className="font-semibold">Account Repeated</p>
            <Checkbox />
          </div>
          <div className="w-full flex items-center justify-between p-4 bg-[#FBFBFB] dark:bg-slate-900 rounded-lg">
            <p className="font-semibold">Account Customer Certificates</p>
            <Checkbox />
          </div>
          <div className="w-full flex items-center justify-between p-4 bg-[#FBFBFB] dark:bg-slate-900 rounded-lg">
            <p className="font-semibold">Customer Verifications</p>
            <Checkbox />
          </div>
        </div>

        <div className="flex w-full mb-5 gap-2 px-4 items-center justify-between">
          <AlertDialogCancel className="   px-8 border w-full border-slate-300 dark:border-slate-700 py-6  rounded-full">
            Cancel
          </AlertDialogCancel>

          <Button className=" rounded-full   bg-[#70E000] w-full font-semibold py-6 px-6   focus:outline-none focus:shadow-outline">
            {/* {loading ? (
                      <ColorRing
                        visible={true}
                        height="35"
                        width="35"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ]}
                      />
                    ) : ( */}
            <span className=" capitalize">Add Widget</span>
            {/* )} */}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
