import { ClipboardMinus, Contact, TriangleAlert, Users } from "lucide-react";
import React from "react";

const OverView = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-7">
        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Users />
            <p className="text-grayText">Total User</p>
          </div>
          <h1 className="text-[32px] font-bold">1,200</h1>
          {/* <button className="bg-gradient-to-t from-[#EEEFDA] to-[#D2DBDD] w-10 h-10 rounded-full flex justify-center items-center">
              <MoveUpRight />
            </button> */}
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Contact />
            <p className="text-grayText">Total Flag Profile</p>
          </div>
          <h1 className="text-[32px] font-bold">900</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <ClipboardMinus />
            <p className="text-grayText">Total Report</p>
          </div>
          <h1 className="text-[32px] font-bold">2,200</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <TriangleAlert />
            <p className="text-grayText">Remove Request</p>
          </div>
          <h1 className="text-[32px] font-bold">400</h1>
        </div>
        
      </div>
    </div>
  );
};

export default OverView;
