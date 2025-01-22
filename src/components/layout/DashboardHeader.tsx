import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, LogOut, FileText, Building2 } from "lucide-react";

interface DashboardHeaderProps {
  userName?: string;
  userEmail?: string;
  notifications?: Array<{ id: string; message: string }>;
  onLogout?: () => void;
}

export default function DashboardHeader({
  userName = "John Doe",
  userEmail = "john@example.com",
  notifications = [
    { id: "1", message: "New invoice created" },
    { id: "2", message: "Company details updated" },
  ],
  onLogout = () => console.log("Logout clicked"),
}: DashboardHeaderProps) {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-primary">NFe Manager</div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <FileText className="w-4 h-4 mr-2" />
                Invoices
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[200px]">
                  <NavigationMenuLink className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Create NFe
                  </NavigationMenuLink>
                  <NavigationMenuLink className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Create NFCe
                  </NavigationMenuLink>
                  <NavigationMenuLink className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Create NFSe
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Building2 className="w-4 h-4 mr-2" />
                Companies
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[200px]">
                  <NavigationMenuLink className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    View All
                  </NavigationMenuLink>
                  <NavigationMenuLink className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Add New
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id}>
                {notification.message}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
                />
                <AvatarFallback>
                  {userName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{userName}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
