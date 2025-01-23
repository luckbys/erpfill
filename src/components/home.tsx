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
import Dashboard from "./dashboard/Dashboard";
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
        return <Dashboard />;
      case "invoices":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Invoices</h2>
                <Button onClick={() => setShowInvoiceForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Nota Fiscal
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
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar onNavigate={setActiveTab} activeTab={activeTab} />
        <main className="flex-1 p-8">{renderContent()}</main>
      </div>

      <Dialog open={showInvoiceForm} onOpenChange={setShowInvoiceForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Criar Nova Nota Fiscal</DialogTitle>
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
