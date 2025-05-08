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

const formSchema = z.object({
  platform: z.string().min(1, {
    message: "Please select a platform",
  }),
  customer: z.string().min(1, {
    message: "Please select a customer",
  }),
  plan: z.string().min(1, {
    message: "Please select a plan",
  }),
  reason: z.string().min(10, {
    message: "Please enter a reason",
  }),
  accountAsRetake: z.boolean(),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: "",
      customer: "",
      plan: "",
      reason: "",
      accountAsRetake: false,
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold"
      >
        <GrEdit className="w-4 h-4 text-black dark:text-white" />
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Edit Blacklist
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please edit blacklist from here.
              </p>
            </div>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-primary bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col max-h-[27rem] 2xl:max-h-full  px-2 py-4 xl:px-3  w-full h-[500px]  overflow-auto  "
          >
            <div className=" w-full bg-slate-50 dark:bg-slate-900  rounded-xl flex flex-col gap-5 p-6">
              <div className=" w-full flex items-center justify-between">
                <p className="text-sm">Customer Name</p>
                <p className="text-sm font-semibold">
                  Christopher Stephan Linke
                </p>
              </div>
              <div className=" w-full flex items-center justify-between">
                <p className="text-sm">Customer Email</p>
                <p className="text-sm font-semibold">
                  c.linke1991@googlemail.com
                </p>
              </div>
              <div className=" w-full flex items-center justify-between">
                <p className="text-sm">Country</p>
                <p className="text-sm font-semibold">DE</p>
              </div>
            </div>
            <div className=" py-4 border-t  border-b mt-6 gap-1 border-slate-300 dark:border-slate-700 flex items-center justify-between">
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                      IP Address
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"ip address"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button className=" bg-[#70E0001A] rounded-full p-3.5">
                <MdOutlineAdd className="text-[#70E000] text-xl" />
              </button>
            </div>
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem className="my-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                    Type
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={"chargeback abuser"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full my-4 gap-2 items-center justify-between">
              <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-8  rounded-full">
                Cancel
              </AlertDialogCancel>

              <Button
                type="submit"
                className=" rounded-full   bg-[#70E000] w-full font-semibold py-8 px-6   focus:outline-none focus:shadow-outline"
              >
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
                <span className=" capitalize">create</span>
                {/* )} */}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
