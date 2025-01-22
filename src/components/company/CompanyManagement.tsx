import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import CompanyForm from "./CompanyForm";

interface Company {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  address: string;
}

interface CompanyManagementProps {
  companies?: Company[];
  onCreateCompany?: (company: Omit<Company, "id">) => void;
  onUpdateCompany?: (id: string, company: Omit<Company, "id">) => void;
  onDeleteCompany?: (id: string) => void;
  isLoading?: boolean;
}

const defaultCompanies: Company[] = [
  {
    id: "1",
    name: "Example Corp",
    cnpj: "12345678901234",
    email: "contact@example.com",
    phone: "1234567890",
    address: "123 Business St",
  },
  {
    id: "2",
    name: "Sample Ltd",
    cnpj: "98765432109876",
    email: "info@sample.com",
    phone: "9876543210",
    address: "456 Commerce Ave",
  },
];

export default function CompanyManagement({
  companies = defaultCompanies,
  onCreateCompany = (company) => console.log("Create company:", company),
  onUpdateCompany = (id, company) =>
    console.log("Update company:", id, company),
  onDeleteCompany = (id) => console.log("Delete company:", id),
  isLoading = false,
}: CompanyManagementProps) {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companyToDelete, setCompanyToDelete] = useState<string | null>(null);

  const handleCreateClick = () => {
    setSelectedCompany(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (company: Company) => {
    setSelectedCompany(company);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (companyId: string) => {
    setCompanyToDelete(companyId);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = (data: Omit<Company, "id">) => {
    if (selectedCompany) {
      onUpdateCompany(selectedCompany.id, data);
    } else {
      onCreateCompany(data);
    }
    setIsFormOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (companyToDelete) {
      onDeleteCompany(companyToDelete);
      setIsDeleteDialogOpen(false);
      setCompanyToDelete(null);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Company Management</h2>
        <Button onClick={handleCreateClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add Company
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>CNPJ</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.cnpj}</TableCell>
              <TableCell>{company.email}</TableCell>
              <TableCell>{company.phone}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEditClick(company)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDeleteClick(company.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedCompany ? "Edit Company" : "Add New Company"}
            </DialogTitle>
          </DialogHeader>
          <CompanyForm
            onSubmit={handleFormSubmit}
            initialData={selectedCompany || undefined}
            isLoading={isLoading}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this company? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
