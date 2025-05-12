/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import userIcon from "../../../assets/placeholders/user-placeholder.jpg";
import DeleteModal from "@/components/common/DeleteModal";
import { useReviewReportsQuery } from "@/redux/features/reviewAndPost/reviewAndPost.api";
import Spinner from "@/components/common/Spinner";

const ReportCard = () => {
  const { data, isFetching } = useReviewReportsQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const item = data?.data;
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {item.map((item: any, idx: number) => (
        <div
          key={idx}
          className="bg-[#eef1ed] p-4 grid grid-cols-4 rounded-3xl border border-white gap-1"
        >
          <div className="col-span-3 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src={userIcon}
                alt="user"
                width={100}
                height={100}
                className="h-10 w-10 rounded-full"
              />
              <p className="font-medium">Anonymous 00{idx + 1}</p>
            </div>
            <p className="text-[#B8B8B8] line-clamp-4 text-[14px]">
              {item?.review?.message}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <Image
              src={item?.review?.profile?.image || userIcon}
              alt="user"
              width={1000}
              height={1000}
              className="rounded-3xl w-full h-full"
            />
            <DeleteModal
              btn="btn"
              type="reviewReport"
              id={item?.id}
              btnText="View"
              message={item.message}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCard;
