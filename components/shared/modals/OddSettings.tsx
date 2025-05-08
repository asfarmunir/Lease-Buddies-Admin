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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  sport: z.string().min(1, {
    message: "Please select a sport",
  }),
  event: z.string().min(1, {
    message: "Please enter event name",
  }),
  odds: z.string().min(1, {
    message: "Please enter odds",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sport: "",
      event: "",
      odds: "",
    },
  });

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={` capitalize text-xs text-nowrap font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full 
                     bg-slate-50 dark:bg-slate-900  text-primary
                }`}
      >
        Odds Settings
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Odds Settings
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please Adjust Odd Settings from here.
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
            className=" flex flex-col max-h-[27rem] 2xl:max-h-full  px-5 py-4 xl:px-8  w-full   overflow-auto  "
          >
            <FormField
              control={form.control}
              name="sport"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Sports
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={"Select sports"} />
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
            <FormField
              control={form.control}
              name="event"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Event Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter event name"
                      {...field}
                      className="border rounded-full border-[#CED2D6] dark:border-slate-700  bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300  w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="odds"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Odds
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter odds"
                      {...field}
                      className="border rounded-full border-[#CED2D6] dark:border-slate-700  bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300  w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    />
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
                className=" rounded-full text-primary  bg-[#70E000] w-full font-semibold py-8 px-6   focus:outline-none focus:shadow-outline"
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
                <span className=" capitalize">Save Settings</span>
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
