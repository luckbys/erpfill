import React from "react";
import DashboardStats from "./DashboardStats";
import RevenueChart from "./RevenueChart";
import TopProducts from "./TopProducts";
import InvoicesByStatus from "./InvoicesByStatus";

// Sample data - replace with real data from your API
const revenueData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toISOString(),
  revenue: Math.floor(Math.random() * 50000) + 10000,
}));

const topProductsData = [
  { name: "Produto A", value: 45000 },
  { name: "Produto B", value: 35000 },
  { name: "Produto C", value: 28000 },
  { name: "Produto D", value: 22000 },
  { name: "Produto E", value: 18000 },
];

const statusData = [
  { name: "Aprovado", value: 65, color: "#22c55e" },
  { name: "Pendente", value: 25, color: "#eab308" },
  { name: "Rejeitado", value: 10, color: "#ef4444" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <DashboardStats
        totalInvoices={125}
        totalCompanies={48}
        totalProducts={312}
        pendingInvoices={25}
        monthlyRevenue={158750}
        monthlyGrowth={12.5}
        averageTicket={1270}
        averageTicketGrowth={5.8}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <RevenueChart data={revenueData} />
        <TopProducts data={topProductsData} />
        <InvoicesByStatus data={statusData} />
      </div>
    </div>
  );
}
