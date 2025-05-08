'use client'
import { useOverViewQuery } from "@/redux/features/user/user.api";
import { ClipboardMinus, Contact, TriangleAlert, Users } from "lucide-react";
import React from "react";

const OverView = () => {
  const { data } = useOverViewQuery(undefined);


  const overView = data?.data

  return (
    <div>
      <div className="grid grid-cols-4 gap-7">
        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Users />
            <p className="text-grayText">Total User</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalUser}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Contact />
            <p className="text-grayText">Total Flag Profile</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalProfile}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <ClipboardMinus />
            <p className="text-grayText">Total Report</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalReviewReport}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <TriangleAlert />
            <p className="text-grayText">Remove Request</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalProfileReport}</h1>
        </div>
      </div>
    </div>
  );
};

export default OverView;
