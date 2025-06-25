/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import userIcon from "../../../assets/placeholders/user-placeholder.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import Spinner from "@/components/common/Spinner";
import DeleteModal from "@/components/common/DeleteModal";
import { useProfileReportsQuery } from "@/redux/features/reviewAndPost/reviewAndPost.api";


const RemoveProfileTable = () => {
  const { data, isFetching } = useProfileReportsQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const profileData = data?.data;

  return (
    <div className="mb-12">
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Header */}
          <div className="grid grid-cols-4 px-6 py-3 text-sm font-semibold rounded-t-xl">
            <span>Profile</span>
            <span>Relation Status</span>
            <span>Address</span>
            <span></span>
          </div>

          {/* Rows */}
          <div className="space-y-4 mt-2">
            {profileData?.map((item: any) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center gap-4 bg-white/30 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item?.profile?.image || userIcon}
                    alt="user"
                    width={100}
                    height={100}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="text-gray-800 font-medium">
                    {item?.profile?.fullName}
                  </span>
                </div>

                <div className="text-gray-500">{item?.profile?.maritalStatus} </div>

                <div className="text-gray-700 text-sm">{item?.profile?.location}</div>

                <div className="text-gray-400 text-xl cursor-pointer flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4 text-black" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DeleteModal
                          id={item.id}
                          btn="btn"
                          btnText="Delete Profile"
                          type="profileReport"
                          message={item?.message}
                        />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveProfileTable;
