import AddCategoryModal from "@/components/modules/Category/AddCategoryModal";
import CategoryCard from "@/components/modules/Category/CategoryCard";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const RemovePage = () => {
  return (
    <div>
      <PageHeader title="Category" />
      <div className="flex justify-end">
        <AddCategoryModal />
      </div>
      <CategoryCard />
    </div>
  );
};

export default RemovePage;
