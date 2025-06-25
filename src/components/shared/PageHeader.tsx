"use client";
import Image from "next/image";
import userImg from "../../assets/placeholders/user-placeholder.jpg";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

const PageHeader = ({ title }: { title: string }) => {
  const { data } = useGetMeQuery(undefined);

  const userData = data?.data;
  return (
    <div className="flex justify-between mt-6 mb-10">
      <h1 className="md:text-[32px] text-2xl font-bold">{title}</h1>
      <div className="flex gap-2 items-center">
        <Image
          src={userData?.image || userImg}
          alt="user"
          width={1000}
          height={1000}
          className="w-8 h-8 rounded-full"
        />
        <p>{userData?.fullName}</p>
      </div>
    </div>
  );
};

export default PageHeader;
