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
        className="bg-[#70E000] dark:bg-[#70E00079] p-3 hidden md:block rounded-full 
      text-xs font-semibold  "
      >
        Create Certification
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Create Certification
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please create certification from here.
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
            <FormField
              control={form.control}
              name="customer"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
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

            <div className="mb-4 w-full">
              <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                Type
              </FormLabel>
              <FormControl>
                <Select onValueChange={(e) => setType(e)}>
                  <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <SelectValue placeholder={"chargeback abuser"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="evolution_funded">
                      Evolution Funded
                    </SelectItem>
                    <SelectItem value="evolution_">Evolution Funded</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </div>
            {type === "evolution_funded" && (
              <>
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                        Currency
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                            <SelectValue placeholder={" currency"} />
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
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                        Amount
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Amount"
                          {...field}
                          className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountSize"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full ">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                        Account Size
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Account Size"
                          {...field}
                          className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="mb-4 w-full border-b pb-4">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                    Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" appearance-none border flex items-center justify-between rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-4 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
              <p className=" text-sm font-semibold">Send Email</p>
              <Switch />
            </div>
            <button
              type="button"
              className=" my-2  justify-center font-semibold appearance-none border flex items-center  rounded-full    bg-[#70E0001A]   placeholder:text-slate-500 dark:text-slate-300   w-full py-4 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            >
              Preview
            </button>
            <div className="flex w-full my-4 gap-2 items-center justify-between">
              <AlertDialogCancel className="   px-8 border w-full border-slate-300 dark:border-slate-700 py-8  rounded-full">
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
