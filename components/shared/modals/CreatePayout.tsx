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
  account: z.string().min(1, {
    message: "Please select an account",
  }),
  amount: z.string().min(1, {
    message: "Please enter an amount",
  }),
  reason: z.string().min(5, {
    message: "Please enter a reason",
  }),
  btcAmount: z.string().min(1, {
    message: "Please enter an amount",
  }),
  bankName: z.string().min(1, {
    message: "Please enter bank name",
  }),
  bankAddress: z.string().min(1, {
    message: "Please enter bank address",
  }),
  bankCity: z.string().min(1, {
    message: "Please enter bank city",
  }),
  bankZip: z.string().min(1, {
    message: "Please enter bank zip",
  }),
  bankCountry: z.string().min(1, {
    message: "Please enter bank country",
  }),
  bankRoutingNumber: z.string().min(1, {
    message: "Please enter bank routing number",
  }),
  bankAccountType: z.string().min(1, {
    message: "Please enter bank account type",
  }),
});

const AddClient = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>("");
  const [tab, setTab] = React.useState<number>(1);
  console.log("🚀 ~ AddClient ~ paymentMethod:", paymentMethod);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      amount: "",
      reason: "",
      btcAmount: "",
      bankName: "",

      bankAddress: "",
      bankCity: "",

      bankZip: "",
      bankCountry: "",
      bankRoutingNumber: "",
      bankAccountType: "",
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
        Create Payout
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  2xl:min-w-[600px]  ">
        <AlertDialogHeader className=" border-b pb-4">
          <div className="  flex items-center justify-between px-5 pt-5">
            <div className="flex flex-col  items-start">
              <p className=" md:text-lg 2xl:text-2xl font-semibold">
                Create Payout
              </p>
              <p className="text-xs md:text-sm 2xl:text-base ">
                Please create payouts from here.
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
            {tab === 1 ? (
              <div className=" w-full">
                <FormField
                  control={form.control}
                  name="account"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Account
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                            <SelectValue placeholder={"Select account"} />
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
                <div className=" mb-4 w-full">
                  <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1.5">
                    Method
                  </FormLabel>
                  <Select
                    onValueChange={(e) => {
                      setPaymentMethod(e);
                    }}
                  >
                    <SelectTrigger className=" appearance-none border rounded-full border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB] dark:bg-slate-800  placeholder:text-slate-500 dark:text-slate-300   w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                      <SelectValue placeholder={"Select payout method"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crypto">Crypto-BTC</SelectItem>
                      <SelectItem value="bank">Wire/Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {paymentMethod === "crypto" ? (
                  <>
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem className="mb-4 w-full">
                          <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                            Amount
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]
                            dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300   
                            w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none
                             focus:shadow-outline"
                              placeholder="Enter Amount"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem className="mb-4 w-full">
                          <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                            Reason
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="type here"
                              {...field}
                              className=" appearance-none border rounded-3xl  border-[#CED2D6 dark:border-slate-700]  bg-[#FBFBFB] dark:bg-slate-800   dark:text-slate-300 min-h-32   w-full py-2.5 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className=" py-4 border-t mt-3 border-slate-300 dark:border-slate-700 flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="btcAmount"
                        render={({ field }) => (
                          <FormItem className="mb-4 w-full">
                            <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                              Crypto-BTC
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]
                            dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300   
                            w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none
                             focus:shadow-outline"
                                placeholder="Enter BTC Amount"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem className="mb-4 w-full">
                          <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                            Amount
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]
                            dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300   
                            w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none
                             focus:shadow-outline"
                              placeholder="Enter Amount"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem className="mb-4 w-full">
                          <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                            Reason
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="type here"
                              {...field}
                              className=" appearance-none border rounded-3xl  border-[#CED2D6 dark:border-slate-700]  bg-[#FBFBFB] dark:bg-slate-800   dark:text-slate-300 min-h-32   w-full py-2.5 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            ) : (
              <div className=" w-full">
                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankAddress"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankCity"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank City
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank City"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankZip"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank Zip
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Zip"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankCountry"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank Country
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankRoutingNumber"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Bank Routing Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Routing Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankAccountType"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block  text-slate-700 pl-1 font-bold  mb-1">
                        Account Type
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none border rounded-full
                           border-[#CED2D6] dark:border-slate-700   bg-[#FBFBFB]    dark:bg-slate-800  placeholder:text-slate-800 dark:text-slate-300    w-full py-6 px-3.5 text-gray-800 leading-tight focus:outline-none     focus:shadow-outline"
                          placeholder="Enter Bank Account Type"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="flex w-full mb-2 gap-2 items-center justify-between">
              <AlertDialogCancel className=" px-8 border w-full border-slate-300 dark:border-slate-700 py-7  rounded-full">
                Cancel
              </AlertDialogCancel>
              {paymentMethod === "crypto" || tab === 2 ? (
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
                  <span className=" capitalize">create</span>
                  {/* )} */}
                </Button>
              ) : (
                <Button
                  onClick={() => setTab(2)}
                  type="button"
                  className=" rounded-full   bg-[#70E000] w-full font-semibold py-7 px-6   focus:outline-none focus:shadow-outline"
                >
                  <span className=" capitalize">Next</span>
                </Button>
              )}
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
