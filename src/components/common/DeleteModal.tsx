/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteBusinessMutation } from "@/redux/features/businesses/businesses.api";
import { useDeleteUserMutation } from "@/redux/features/user/user.api";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

interface DeleteModalProps {
  id: string;
  type: "business" | "user" | "reviewReport" | "profileReport";
  btn: "icon" | "btn";
  message?: string;
  btnText?: string;
}

const DeleteModal = ({ id, type, btn, message, btnText }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [deleteBusiness] = useDeleteBusinessMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async () => {
    const toastId = toast.loading(`Deleting...`);
    try {
      let res;
      if (type === "business") {
        res = await deleteBusiness(id).unwrap();
      } else if (type === "user") {
        res = await deleteUser(id).unwrap();
      } 

      if (res.data) {
        toast.success("Deleted Successfully", { id: toastId });
        setOpen(false);
      } else {
        toast.error(res?.error?.data?.message || "Failed to Delete", {
          id: toastId,
        });
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || `Failed to delete ${type}`, {
        id: toastId,
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {btn === "icon" ? (
        <DialogTrigger className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
          <RiDeleteBinLine className="text-xl text-red-500" />
        </DialogTrigger>
      ) : (
        <DialogTrigger className="bg-white text-black px-7 py-1 rounded-full">
          {btnText}
        </DialogTrigger>
      )}

      <DialogContent className="max-w-[800px] !rounded-3xl [&>button]:hidden bg-white">
        <DialogHeader>
          <DialogTitle>
            <div className="flex md:flex-row flex-col justify-between items-center md:gap-1 gap-4">
              <div className="">
                <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
                  {message
                    ? "Report Details"
                    : " Are you sure you want to proceed?"}
                </h1>
              </div>
              <div className="space-x-3 flex ">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xl border border-[#0C0B2133] text-[#0C0B21] py-4 px-9 rounded-full font-normal"
                >
                  Discard
                </button>
                <div>
                  <button
                    type="submit"
                    onClick={handleDelete}
                    className=" text-xl border border-secondary bg-secondary text-white py-4 px-9 rounded-full flex items-center justify-center gap-1 font-normal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        {message && (
          <div className="mt-5">
            <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
              Description
            </h1>

            <div className="border rounded-3xl p-4">
              <p>{message}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
