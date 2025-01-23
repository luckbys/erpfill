import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  FileText,
  Building2,
  Package,
  ChevronRight,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  onNavigate: (tab: string) => void;
  activeTab: string;
}

export function Sidebar({ className, onNavigate, activeTab }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card min-h-screen w-[270px] transition-all duration-300 ease-in-out",
        className,
      )}
    >
      {/* Logo Section */}
      <div className="h-[60px] flex items-center px-6 border-b">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <span className="font-semibold text-lg">NFe Manager</span>
        </div>
      </div>

      {/* Navigation Section */}
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 px-4 h-10 text-sm font-medium",
              activeTab === "dashboard" && "bg-accent",
            )}
            onClick={() => onNavigate("dashboard")}
          >
            <LayoutDashboard className="h-4 w-4" />
            Painel
            <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
          </Button>

          <Button
            variant={activeTab === "invoices" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 px-4 h-10 text-sm font-medium",
              activeTab === "invoices" && "bg-accent",
            )}
            onClick={() => onNavigate("invoices")}
          >
            <FileText className="h-4 w-4" />
            Notas Fiscais
            <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
          </Button>

          <Button
            variant={activeTab === "companies" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 px-4 h-10 text-sm font-medium",
              activeTab === "companies" && "bg-accent",
            )}
            onClick={() => onNavigate("companies")}
          >
            <Building2 className="h-4 w-4" />
            Empresas
            <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
          </Button>

          <Button
            variant={activeTab === "products" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 px-4 h-10 text-sm font-medium",
              activeTab === "products" && "bg-accent",
            )}
            onClick={() => onNavigate("products")}
          >
            <Package className="h-4 w-4" />
            Produtos
            <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
          </Button>
        </nav>
      </ScrollArea>
    </div>
  );
}
