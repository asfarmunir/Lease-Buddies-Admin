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

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Please enter a valid first name",
  }),
  lastName: z.string().min(2, {
    message: "Please enter a valid last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  address: z.string().min(10, {
    message: "Please enter a valid address",
  }),
  zip: z.string().min(4, {
    message: "Please enter a valid zip code",
  }),
  address2: z.string().min(10, {
    message: "Please enter a valid address",
  }),
  city: z.string().min(2, {
    message: "Please enter a valid city",
  }),
  country: z.string().min(2, {
    message: "Please select your country",
  }),
  language: z.string().min(2, {
    message: "Please select your language",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      address2: "",
      city: "",
      country: "",
      language: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-[#70E000] dark:bg-[#70E00079] p-3 hidden md:block rounded-full 
      text-xs font-semibold  "
      >
        Add Customer
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader className=" border-b pb-4">
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Add Customer
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                You can add a new customer from here.
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
            className=" flex flex-col max-h-[27rem] 2xl:max-h-[570px]  px-5 pb-4 2xl:px-8  w-full   overflow-auto  "
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Address 1
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter address 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address2"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Address 2
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                      placeholder="Enter address 2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" w-full flex items-center justify-between gap-3">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                        placeholder="Enter your city"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                      Zip
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]  dark:bg-slate-800  placeholder:text-slate-400 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none           focus:shadow-outline"
                        placeholder="Enter your zip code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Country
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={"Select country"} />
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
              name="language"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                    Language
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={"Select language"} />
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

            <div className="flex w-full mb-2 gap-2 items-center justify-between">
              <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-7  rounded-full">
                Cancel
              </AlertDialogCancel>
              <Button
                type="submit"
                className=" rounded-full   bg-[#70E000] w-full font-semibold py-7 px-6   focus:outline-none focus:shadow-outline"
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
                <span className=" capitalize">Add</span>
                {/* )} */}
              </Button>
            </div>
            {/* {paymentMethod === "bank" && tab === 1 && (
              <div className="flex w-full mb-2 gap-2 items-center justify-between">
                <Button
                  onClick={() => setTab(1)}
                  type="button"
                  className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-7  rounded-full"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setTab(2)}
                  type="button"
                  className=" rounded-full   bg-[#70E000] w-full font-semibold py-7 px-6   focus:outline-none focus:shadow-outline"
                >
                  <span className=" capitalize">Next</span>
                </Button>
              </div>
            )} */}
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
