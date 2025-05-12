import UserTable from "@/components/modules/User/UserTable";
import PageHeader from "@/components/shared/PageHeader";

const UserPage = () => {
  return (
    <div>
      <PageHeader title="User Profile" />
      <UserTable />
    </div>
  );
};

export default UserPage;
