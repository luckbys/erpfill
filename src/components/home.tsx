import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InvoiceList from "./invoice/InvoiceList";
import DashboardStats from "./dashboard/DashboardStats";
import InvoiceForm from "./invoice/InvoiceForm";
import CompanyManagement from "./company/CompanyManagement";
import ProductManagement from "./product/ProductManagement";
import { Sidebar } from "./layout/Sidebar";

export default function Home() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              NFe Manager Dashboard
            </h1>
            <DashboardStats
              totalInvoices={25}
              totalCompanies={8}
              totalProducts={45}
              pendingInvoices={3}
            />
          </div>
        );
      case "invoices":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Invoices</h2>
                <Button onClick={() => setShowInvoiceForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Invoice
                </Button>
              </div>
              <InvoiceList />
            </div>
          </div>
        );
      case "companies":
        return <CompanyManagement />;
      case "products":
        return <ProductManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        className="fixed left-0 top-0 h-screen w-64 border-r bg-white"
        onNavigate={setActiveTab}
        activeTab={activeTab}
      />

      <main className="flex-1 ml-64 p-8">{renderContent()}</main>

      <Dialog open={showInvoiceForm} onOpenChange={setShowInvoiceForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Invoice</DialogTitle>
          </DialogHeader>
          <InvoiceForm
            onSubmit={(data) => {
              console.log("Invoice submitted:", data);
              setShowInvoiceForm(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
