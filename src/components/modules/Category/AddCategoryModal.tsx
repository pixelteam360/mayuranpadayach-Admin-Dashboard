/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateCategoryMutation } from "@/redux/features/businesses/businesses.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false);
  const [createCategory] = useCreateCategoryMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");

    const formData = new FormData();

    formData.append("image", data.image);
    formData.append("data", JSON.stringify({ name: data.name }));

    try {
      await createCategory(formData).unwrap();
      toast.success("Category created successfully", { id: toastId });
      setOpen(false);
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to create category", {
        id: toastId,
      });
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-primary rounded-lg px-4 py-2 text-white">
          + Add Category
        </DialogTrigger>
        <DialogContent className="max-w-[500px] !rounded-3xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-center mb-6">Add Category</DialogTitle>
            <DialogDescription></DialogDescription>
            <div className="">
              <MyFormWrapper onSubmit={handleSubmit}>
                <MyFormInput
                  name="name"
                  label="Category Name"
                  placeholder="Enter name"
                />
                <MyFormInput name="image" label="Category Image" type="file" />

                <MyBtn name="Submit" width="w-full" />
              </MyFormWrapper>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategoryModal;
