"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assets/iamges/logo.png";
import {
  SquareUser,
  UserRoundX,
  Settings,
  ClipboardMinus,
  LayoutDashboardIcon,
  Contact,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Report",
    url: "/report",
    icon: ClipboardMinus,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Contact,
  },
  {
    title: "User",
    url: "/user",
    icon: SquareUser,
  },
  {
    title: "Remove",
    url: "/remove",
    icon: UserRoundX,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLolgout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
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
      <SidebarFooter className="!bg-[#1C1C1C] text-white">
          <button
            onClick={handleLolgout}
            className="py-3 border border-red-400 rounded-lg font-medium text-base"
          >
            Log out
          </button>
        </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
