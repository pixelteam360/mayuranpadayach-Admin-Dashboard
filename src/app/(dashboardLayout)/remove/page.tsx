import RemoveProfileTable from "@/components/modules/Remove/RemoveProfileTable";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const RemovePage = () => {
  return (
    <div>
      <PageHeader title="Remove Request" />
      <RemoveProfileTable />
    </div>
  );
};

export default RemovePage;
