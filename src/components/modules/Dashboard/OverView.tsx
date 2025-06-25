"use client";
import { useOverViewQuery } from "@/redux/features/user/user.api";
import { BookMarked, Building2, Users } from "lucide-react";
import React from "react";
import { GrUserWorker } from "react-icons/gr";

const OverView = () => {
  const { data } = useOverViewQuery(undefined);

  const overView = data?.data;

  return (
    <div>
      <div className="grid grid-cols-4 gap-7">
        <div className="bg-white p-6 border-2 border-[#e2d6ff] rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Users />
            <p className="text-grayText">Total User</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalUser}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-[#e2d6ff] flex justify-between gap-2">
          <div className="space-y-1">
            <BookMarked />
            <p className="text-grayText">Total Booking</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalProfile}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-[#e2d6ff] flex justify-between gap-2">
          <div className="space-y-1">
            <Building2 />
            <p className="text-grayText">Total Business</p>
          </div>
          <h1 className="text-[32px] font-bold">
            {overView?.totalReviewReport}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-[#e2d6ff] flex justify-between gap-2">
          <div className="space-y-1">
            <GrUserWorker className="text-xl" />
            <p className="text-grayText">Total Worker</p>
          </div>
          <h1 className="text-[32px] font-bold">
            {overView?.totalProfileReport}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OverView;
