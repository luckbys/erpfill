import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Copy } from "lucide-react";

interface Invoice {
  id: string;
  number: string;
  type: "NFe" | "NFCe" | "NFSe";
  status: "draft" | "pending" | "approved" | "rejected";
  issueDate: string;
  totalValue: string;
  recipientName: string;
}

interface InvoiceListProps {
  invoices?: Invoice[];
  onViewInvoice?: (id: string) => void;
  onDownloadInvoice?: (id: string) => void;
  onDuplicateInvoice?: (id: string) => void;
}

const defaultInvoices: Invoice[] = [
  {
    id: "1",
    number: "NFE-001",
    type: "NFe",
    status: "approved",
    issueDate: "2024-03-20",
    totalValue: "1500.00",
    recipientName: "Company A",
  },
  {
    id: "2",
    number: "NFCE-001",
    type: "NFCe",
    status: "pending",
    issueDate: "2024-03-21",
    totalValue: "750.00",
    recipientName: "Company B",
  },
];

const statusColors = {
  draft: "bg-gray-500",
  pending: "bg-yellow-500",
  approved: "bg-green-500",
  rejected: "bg-red-500",
};

export default function InvoiceList({
  invoices = defaultInvoices,
  onViewInvoice = (id) => console.log("View invoice:", id),
  onDownloadInvoice = (id) => console.log("Download invoice:", id),
  onDuplicateInvoice = (id) => console.log("Duplicate invoice:", id),
}: InvoiceListProps) {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Issue Date</TableHead>
            <TableHead>Total Value</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.number}</TableCell>
              <TableCell>{invoice.type}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${statusColors[invoice.status]} text-white`}
                >
                  {invoice.status.charAt(0).toUpperCase() +
                    invoice.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{invoice.issueDate}</TableCell>
              <TableCell>R$ {invoice.totalValue}</TableCell>
              <TableCell>{invoice.recipientName}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onViewInvoice(invoice.id)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onDownloadInvoice(invoice.id)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onDuplicateInvoice(invoice.id)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
