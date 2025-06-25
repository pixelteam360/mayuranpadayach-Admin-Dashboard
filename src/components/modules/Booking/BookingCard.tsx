/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import userIcon from "../../../assets/placeholders/user-placeholder.jpg";
import Spinner from "@/components/common/Spinner";
import { useBookingListQuery } from "@/redux/features/businesses/businesses.api";

const BookingCard = () => {
  const { data, isFetching } = useBookingListQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const item = data?.data?.result;

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {item?.map((item: any, idx: number) => (
        <div
          key={idx}
          className="bg-white p-1 grid grid-cols-6 rounded-2xl border border-white gap-5"
        >
          <div className="col-span-2">
            <Image
              src={item?.user?.profileImage || userIcon}
              alt="user"
              width={1000}
              height={1000}
              className="rounded-2xl w-full h-18"
            />
          </div>

          <div className="col-span-4">
            <p className="text-xl font-semibold line-clamp-4 text-[14px] mb-2">
              {item?.user?.fullName}
            </p>
            <p className="text-[#636363] line-clamp-4 text-sm">
              {item?.business?.name}
            </p>
            <p className="text-[#636363] line-clamp-4 text-sm">
              {item?.business?.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingCard;