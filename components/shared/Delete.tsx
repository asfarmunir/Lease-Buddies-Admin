"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { deletePropertyById } from "@/lib/database/actions/property.actions";
import { useRef } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Delete = ({ id }: { id: string }) => {
  const modalRef = useRef();

  const deleteProperty = async () => {
    toast.loading("deleting huntgroun...");
    const res = await deletePropertyById(id);
    toast.dismiss();
    if (res.status !== 200) {
      toast.error("Error deleting huntground.");
      //@ts-ignore
      if (modalRef.current) modalRef.current.click();
    }

    toast.success("Huntground removed successfully");
    //@ts-ignore
    if (modalRef.current) modalRef.current.click();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        // @ts-ignore
        ref={modalRef}
        className="bg-primary-50 hover:bg-primary-50/50 transition-colors   flex items-center  justify-center w-8 h-8 rounded-full text-xs 2xl:text-sm font-semibold"
      >
        <MdDelete className="w-5 h-5 text-black" />
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0 pb-10 transition-all dark:bg-[#161313CC] border-none 2xl:min-w-[600px]">
        <AlertDialogCancel className="w-fit absolute right-3 rounded-full border-none dark:bg-[#161313CC] top-3">
          <IoClose className="w-5 h-5 text-white" />
        </AlertDialogCancel>
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl border-b-2 px-8 border-primary-50/50 pb-3 font-semibold text-center mb-6">
            Delete Huntground?
          </h1>
          <p className=" text-center">
            Are you sure to delete this data, it will be deleted permenently and
            cannot be recovered.
          </p>
          <div className=" w-full flex items-center gap-4 mt-4">
            <AlertDialogCancel className="w-full  bg-white text-black rounded-lg text-lg  ">
              Cancel
            </AlertDialogCancel>
            <button
              onClick={deleteProperty}
              className=" w-full py-2 rounded-lg bg-primary-50 text-black "
            >
              Delete
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
