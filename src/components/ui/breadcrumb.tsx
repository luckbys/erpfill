import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[];
  onItemClick?: (item: BreadcrumbItem) => void;
}

export function Breadcrumb({
  items,
  onItemClick,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} {...props}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            )}
            <button
              onClick={() => onItemClick?.(item)}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                item.active
                  ? "text-primary cursor-default"
                  : "text-muted-foreground cursor-pointer",
              )}
              disabled={item.active}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
