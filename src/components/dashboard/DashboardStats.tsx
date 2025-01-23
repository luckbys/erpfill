import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Building2,
  Package,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface DashboardStatsProps {
  totalInvoices?: number;
  totalCompanies?: number;
  totalProducts?: number;
  pendingInvoices?: number;
  monthlyRevenue?: number;
  monthlyGrowth?: number;
  averageTicket?: number;
  averageTicketGrowth?: number;
}

export default function DashboardStats({
  totalInvoices = 0,
  totalCompanies = 0,
  totalProducts = 0,
  pendingInvoices = 0,
  monthlyRevenue = 0,
  monthlyGrowth = 0,
  averageTicket = 0,
  averageTicketGrowth = 0,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInvoices}</div>
          <div className="text-xs text-muted-foreground">
            {pendingInvoices} pending
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {monthlyRevenue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <div className="flex items-center text-xs">
            {monthlyGrowth >= 0 ? (
              <>
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">
                  {monthlyGrowth}% from last month
                </span>
              </>
            ) : (
              <>
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500">
                  {Math.abs(monthlyGrowth)}% from last month
                </span>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Ticket</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {averageTicket.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <div className="flex items-center text-xs">
            {averageTicketGrowth >= 0 ? (
              <>
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">
                  {averageTicketGrowth}% from last month
                </span>
              </>
            ) : (
              <>
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500">
                  {Math.abs(averageTicketGrowth)}% from last month
                </span>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pending Invoices
          </CardTitle>
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-500">
            {pendingInvoices}
          </div>
          <div className="text-xs text-muted-foreground">
            {((pendingInvoices / totalInvoices) * 100).toFixed(1)}% of total
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
