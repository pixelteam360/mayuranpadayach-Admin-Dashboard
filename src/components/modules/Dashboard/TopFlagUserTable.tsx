import { Button } from "@/components/ui/button";
import userIcon from "../../../assets/placeholders/user-placeholder.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

const users = [
  {
    name: "Cordell Edwards",
    image: "/avatar1.jpg",
    flag: "Red Flag",
    products: 95,
    address: "227 Brookview Drive Beaumont, TX 77701",
  },
  {
    name: "Derrick Spencer",
    image: "/avatar2.jpg",
    flag: "Red Flag",
    products: 120,
    address: "227 Brookview Drive Beaumont, TX 77701",
  },
  {
    name: "Larissa Burton",
    image: "/avatar3.jpg",
    flag: "Red Flag",
    products: 120,
    address: "227 Brookview Drive Beaumont, TX 77701",
  },
];

const TopFlagUserTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Header */}
          <div className="grid grid-cols-5 px-6 py-3 text-sm font-semibold rounded-t-xl">
            <span>Profile</span>
            <span>Flag</span>
            <span>Relation Status</span>
            <span>Address</span>
            <span></span>
          </div>

          {/* Rows */}
          <div className="space-y-4 mt-2">
            {users.map((user, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 items-center gap-4 bg-white/30 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={userIcon}
                    alt="user"
                    width={100}
                    height={100}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="text-gray-800 font-medium">{user.name}</span>
                </div>

                <div className="font-bold">{user.flag}</div>

                <div className="text-gray-500">{user.products} Products</div>

                <div className="text-gray-700 text-sm">{user.address}</div>

                <div className="text-gray-400 text-xl cursor-pointer flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4 text-black" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit customer</DropdownMenuItem>
                      <DropdownMenuItem>Remove flag</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFlagUserTable;
