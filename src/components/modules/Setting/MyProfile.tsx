"use client";
import Image from "next/image";
import userImg from "../../../assets/placeholders/user-placeholder.jpg";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Spinner from "@/components/common/Spinner";

const MyProfile = () => {
  const { data, isFetching } = useGetMeQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const userData = data?.data;

  return (
    <div className="flex w-full justify-center items-center py-5">
      <div className="md:w-1/2 bg-white/40 md:p-12 p-5 md:rounded-3xl rounded-2xl border-[3px] border-white text-center md:space-y-7 space-y-4">
        <div className="rounded-full overflow-hidden flex justify-center">
          <Image
            src={userData?.image || userImg}
            alt="user"
            width={1000}
            height={1000}
            className="w-[125px] h-[125px] rounded-full"
          />
        </div>

        <h2 className="md:text-[32px] text-2xl font-medium text-center">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 md:gap-9 gap-3">
          <div className="text-start">
            <h3 className="md:text-[25px] text-xl font-semibold">Name</h3>
            <p className="md:text-2xl text-[#0C0B2199]">{userData?.fullName}</p>
          </div>
          <div className="text-start ">
            <h3 className="md:text-[25px] text-xl font-semibold">Email</h3>
            <p className="md:text-2xl text-[#0C0B2199]">{userData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
