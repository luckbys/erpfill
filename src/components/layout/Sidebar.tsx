import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Building2, Package } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  onNavigate: (tab: string) => void;
  activeTab: string;
}

export function Sidebar({ className, onNavigate, activeTab }: SidebarProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">NFe Manager</h1>
      </div>
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onNavigate("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "invoices" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onNavigate("invoices")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Invoices
          </Button>
          <Button
            variant={activeTab === "companies" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onNavigate("companies")}
          >
            <Building2 className="mr-2 h-4 w-4" />
            Companies
          </Button>
          <Button
            variant={activeTab === "products" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onNavigate("products")}
          >
            <Package className="mr-2 h-4 w-4" />
            Products
          </Button>
        </div>
      </nav>
    </div>
  );
}
