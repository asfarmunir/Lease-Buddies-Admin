"use client";

import React from "react";
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
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { getCaptchaToken } from "@/lib/captcha";
import { verifyCaptcha } from "@/lib/database/actions/user.action";

const formSchema = z.object({
  email: z.string().min(2, { message: "Email is required" }),
  password: z.string().min(2, { message: "Password is required" }),
});

const AddClient = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    setLoading(true);

    // const token = await getCaptchaToken();

    // const captchaResponse = await verifyCaptcha(token);

    // if (!captchaResponse.success) {
    //   toast.error(captchaResponse.message);
    //   setLoading(false);
    //   return;
    // }

    const { email, password } = values;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res);
    if (!res!.ok) {
      toast.error(res!.error);
      setLoading(false);
      return;
    }
    toast.success("Logged in successfully");
    router.push("/grounds");
    setLoading(false);
  }

  return (
    <Form {...form}>
      <div
        id="first"
        className="flex flex-col bg-[#161313CC]  items-center justify-center w-fit mx-auto gap-5 md:gap-3 p-5  2xl:pt-16 rounded-xl "
      >
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold 2xl:mb-2 px-12">
          Login to continue
        </h2>
        <p className="font-semibold mb-2 ">Welcome back admin!</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full px-4 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4 w-full">
                <FormControl className="">
                  <div className="flex items-center px-3 p-1 rounded-lg gap-2.5 bg-[#2A2A2A]">
                    <Image
                      src="/images/email.svg"
                      width={25}
                      height={25}
                      alt="email"
                    />
                    <Input
                      placeholder="Email* "
                      {...field}
                      className="   border-none bg-transparent focus:ring-1 outline-offset-1 
                         shadow  focus:border mr-0 md:mr-6  rounded-lg   p-3
                          2xl:py-6 2xl:px-6 text-[#848BAC] leading-tight 

                          "
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4 w-full">
                <FormControl className="">
                  <div className="flex items-center px-3 p-1 rounded-lg gap-2.5 bg-[#2A2A2A]">
                    <Image
                      src="/images/password.svg"
                      width={25}
                      height={25}
                      alt="email"
                    />
                    <Input
                      placeholder="Password* "
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className="   border-none bg-transparent focus:ring-1  outline-offset-1 
                         shadow  focus:border mr-0 md:mr-6  rounded-lg   p-3 
                          2xl:py-6 2xl:px-6 text-[#848BAC] leading-tight 

                          "
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image
                        src="/images/eye.svg"
                        width={40}
                        className=" border-l pl-2 border-primary-50/50"
                        height={40}
                        alt="email"
                      />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end pt-4 items-center w-full">
            <button
              type="button"
              onClick={() => {
                router.push("/reset-password");
              }}
              className="text-xs 2xl:text-sm font-semibold"
            >
              Forgot Password?
            </button>
          </div>

          <div className="flex flex-col w-full mt-2 items-center justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-t from-[#3A99D3] to-[#FFE7A9] mb-4   w-full rounded-xl  mt-2 text-black font-bold py-6 px-10 2xl:text-lg flex items-center justify-center   focus:outline-none focus:shadow-outline"
            >
              {loading ? (
                <MoonLoader size={25} />
              ) : (
                <span className=" capitalize">Log In</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default AddClient;
