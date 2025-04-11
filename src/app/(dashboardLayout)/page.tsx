import OverView from "@/components/modules/Dashboard/OverView";
import TopFlagUserTable from "@/components/modules/Dashboard/TopFlagUserTable";
import PageHeader from "@/components/shared/PageHeader";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <PageHeader title="Overview" />
      <OverView />
      <h1 className="md:text-[32px] text-2xl font-bold mb-6 mt-9">
        Top Flag User List
      </h1>
      <TopFlagUserTable />
    </div>
  );
};

export default CommonLayoutHomePage;
