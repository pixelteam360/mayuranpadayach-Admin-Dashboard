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
    title: "Booking List",
    url: "/booking-list",
    icon: ClipboardMinus,
  },
  {
    title: "Business List",
    url: "/business-list",
    icon: Contact,
  },
  {
    title: "User List",
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
      <SidebarContent className="!bg-gradient-to-t from-[#7B4BF5] to-[#BD5FF3] text-white">
        <SidebarGroup />
        <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={50}
            className="w-32"
          />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 space-y-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-[15px] font-bold px-4  py-6 ${
                    pathName === `${item.url}`
                      ? "bg-white text-[#BD5FF3] rounded-lg"
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
      <SidebarFooter className="!bg-[#7B4BF5] text-white">
        <button
          onClick={handleLolgout}
          className="py-3 border border-primary rounded-lg font-medium text-base"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
