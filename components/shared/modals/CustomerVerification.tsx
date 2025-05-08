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
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

const formSchema = z.object({
  timezone: z.string().min(1, {
    message: "Please select a timezone",
  }),
  language: z.string().min(1, {
    message: "Please select a language",
  }),
  currency: z.string().min(1, {
    message: "Please select a currency",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      timezone: "",
      language: "",
      currency: "",
    },
  });

  const router = useRouter();
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
        Verifications
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader>
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Verifications
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                you can see your verification status from here.
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
            <div className=" flex flex-col p-5 flex-grow bg-[#80ED99]/10 rounded-2xl mb-4">
              <div className="flex items-center justify-between w-full mb-7">
                <Image
                  src="/verified.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=""
                />
                <p className=" border border-[#80ED99] rounded-full px-3 py-2">
                  <span className=" font-semibold">Verified</span>
                </p>
              </div>
              <h2 className=" font-bold text-lg 2xl:text-xl">
                Platform: Manually Update
              </h2>
              <p className=" text-xs 2xl:text-sm">30/06/2024 04:58:04 PM</p>
            </div>{" "}
            <div className=" appearance-none border flex items-center justify-between rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-4 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
              <p className=" text-sm font-semibold">Create account as retake</p>
              <Switch />
            </div>
            <div className="flex w-full my-4 gap-2 items-center justify-between">
              <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-8  rounded-full">
                Close
              </AlertDialogCancel>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
