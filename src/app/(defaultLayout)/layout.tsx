import { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/AppSidebar";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="px-16 bg-gradient-to-t from-[#EEEFDA] to-[#D2DBDD] w-full">
        <SidebarTrigger />
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
