/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { useDeleteRastaurantMutation } from "@/redux/features/restaurant/rastaurant.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

interface DeleteModalProps {
  id: string;
  type: "restaurent" | "user";
  btn: "icon" | "btn";
}

const DeleteModal = ({ id, type, btn }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  //   const [deletRestaurant] = useDeleteRastaurantMutation();
  const router = useRouter();

  const handleDelete = async () => {
    const toastId = toast.loading(`Deleting...`);
    try {
      let res;
      if (type === "restaurent") {
        // res = await deletRestaurant(id).unwrap();
      } else if (type === "user") {
        // res = await deleteCause(id).unwrap();
      }

      if (res.data) {
        toast.success("Deleted Successfully", { id: toastId });
        setOpen(false);
        router.push("/");
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
        <DialogTrigger className="bg-white px-7 py-1 rounded-full">
          View
        </DialogTrigger>
      )}

      <DialogContent className="max-w-[800px] !rounded-3xl [&>button]:hidden bg-white">
        <DialogHeader>
          <DialogTitle>
            <div className="flex md:flex-row flex-col justify-between items-center md:gap-1 gap-4">
              <div className="">
                <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
                  Report Details
                </h1>
                <p className="md:text-2xl font-normal">On 20 Jun, 2024</p>
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
                    className=" text-xl border border-secondary bg-secondary text-white py-4 px-9 rounded-full flex items-center justify-center gap-1 font-normal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-5">
          <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
            Report Description
          </h1>

          <div className="border rounded-3xl p-4">
            <p>
              tortor. sit gravida elementum luctus tincidunt odio nisl. Praesent
              est. placerat non. consectetur volutpat non id ullamcorper Nunc
              lacus laoreet Quisque odio hendrerit lacus Sed hendrerit tempor
              eget nulla, vitae Vestibulum sed consectetur lacus, ipsum nec non.
              Nunc quis sit tincidunt at fringilla Ut lacus orci Sed nec nec
              odio tincidunt eu elementum volutpat non. elit. est. id nibh Morbi
              ultrices eget urna. Donec libero, urna nisi vitae sed odio
              lobortis, tortor. varius
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
