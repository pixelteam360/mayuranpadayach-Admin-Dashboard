import TopFlagUserTable from "@/components/modules/Dashboard/TopFlagUserTable";
import PageHeader from "@/components/shared/PageHeader";


const UserPage = () => {
    return (
        <div>
            <PageHeader title="User Profile"/>
            <TopFlagUserTable />
        </div>
    );
};

export default UserPage;