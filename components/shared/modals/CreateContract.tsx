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
  account: z.string().min(1, {
    message: "Please select an account",
  }),
});

const AddClient = () => {
  const [type, setType] = React.useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-[#3A99D33a] text-primary-50 border border-primary-50  p-3 hidden md:block rounded-full 
      text-xs font-semibold  "
      >
        Add Contract
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px] border border-primary-50  ">
        <AlertDialogHeader>
          <div className="border-b border-primary-50 pb-5  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Create Contract
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please create contracts from here.
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
            className=" flex flex-col   px-2 py-4 xl:px-3  w-full   overflow-auto  "
          >
            <FormField
              control={form.control}
              name="account"
              render={({ field }) => (
                <FormItem className="mb-4 w-full  pb-4">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-2">
                    Account
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" appearance-none border rounded-2xl border-slate-800  bg-primary-100  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={" select account"} />
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

            <div className=" appearance-none border  flex items-center justify-between rounded-2xl border-slate-800  bg-primary-100  placeholder:text-slate-500 dark:text-slate-300   w-full py-4 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
              <p className=" text-sm font-semibold">
                Create Silently (not E-mail)
              </p>
              <Switch />
            </div>

            <div className="flex w-full my-4 gap-2 items-center justify-between">
              <AlertDialogCancel className="   px-8 border w-full border-slate-300 dark:border-slate-700 py-6  rounded-full">
                Cancel
              </AlertDialogCancel>

              <Button
                type="submit"
                className=" rounded-full   bg-gradient-to-b from-[#3A99D3] to-[#FFE7A9] w-full font-semibold py-6 px-6   focus:outline-none focus:shadow-outline"
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
