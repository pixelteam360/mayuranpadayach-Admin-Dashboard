/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DeleteModal from "@/components/common/DeleteModal";
import Spinner from "@/components/common/Spinner";
import { useAllCategoryQuery } from "@/redux/features/businesses/businesses.api";
import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  const { data, isFetching } = useAllCategoryQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }
  console.log(data?.data);
  return (
    <div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
        {data?.data?.map((item: any) => (
          <div
            key={item.id}
            className="bg-white p-3 rounded-xl shadow-sm space-y-3"
          >
            <h2 className="text-center text-lg font-medium">{item?.name}</h2>
            <Image
              src={item?.image}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-40 rounded-xl"
            />

            <DeleteModal
              btn="btn"
              id={item.id}
              type="category"
              btnText="Delete"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
