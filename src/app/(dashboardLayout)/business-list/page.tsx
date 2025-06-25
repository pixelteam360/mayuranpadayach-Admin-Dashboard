import BusinessListTable from "@/components/modules/Dashboard/BusinessListTable";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader title="Business List" />
      <BusinessListTable />
    </div>
  );
};

export default ProfilePage;
