"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assets/iamges/logo.png";
import {
  Calendar,
  SquareUser,
  UserRoundX,
  Settings,
  ClipboardMinus,
  LayoutDashboardIcon,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Report",
    url: "#",
    icon: ClipboardMinus,
  },
  {
    title: "Profile",
    url: "#",
    icon: Calendar,
  },
  {
    title: "User",
    url: "#",
    icon: SquareUser,
  },
  {
    title: "Remove",
    url: "#",
    icon: UserRoundX,
  },
  {
    title: "Setting",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="!bg-[#1C1C1C] text-white">
        <SidebarGroup />
        <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
          <Image src={logo} alt="logo" width={190} height={50} />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 space-y-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-[15px] font-bold px-4 ${
                    pathName === `${item.url}`
                      ? "bg-white text-black rounded-lg"
                      : "text-white"
                  }`}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
