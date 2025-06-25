import OverView from "@/components/modules/Dashboard/OverView";
import PageHeader from "@/components/shared/PageHeader";
import BusinessListTable from "@/components/modules/Dashboard/BusinessListTable";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <PageHeader title="Overview" />
      <OverView />
      <h1 className="md:text-[32px] text-2xl font-bold mb-6 mt-9">
        Top Business List
      </h1>
      <BusinessListTable />
    </div>
  );
};

export default CommonLayoutHomePage;
