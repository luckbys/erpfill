import React, { useState } from "react";
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
import InvoicePDFViewer from "./InvoicePDFViewer";

interface Invoice {
  id: string;
  number: string;
  type: "NFe" | "NFCe" | "NFSe";
  status: "draft" | "pending" | "approved" | "rejected";
  natureza_operacao: string;
  data_emissao: string;
  data_entrada_saida: string;
  tipo_documento: string;
  finalidade_emissao: string;
  cnpj_emitente: string;
  nome_emitente: string;
  nome_fantasia_emitente: string;
  logradouro_emitente: string;
  numero_emitente: string;
  bairro_emitente: string;
  municipio_emitente: string;
  uf_emitente: string;
  cep_emitente: string;
  inscricao_estadual_emitente: string;
  nome_destinatario: string;
  cpf_destinatario: string;
  telefone_destinatario: string;
  logradouro_destinatario: string;
  numero_destinatario: string;
  bairro_destinatario: string;
  municipio_destinatario: string;
  uf_destinatario: string;
  pais_destinatario: string;
  cep_destinatario: string;
  valor_frete: string;
  valor_seguro: string;
  valor_total: string;
  valor_produtos: string;
  modalidade_frete: string;
  items: Array<{
    numero_item: string;
    codigo_produto: string;
    descricao: string;
    cfop: string;
    unidade_comercial: string;
    quantidade_comercial: string;
    valor_unitario_comercial: string;
    valor_bruto: string;
  }>;
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
    natureza_operacao: "Venda de mercadoria",
    data_emissao: "2024-03-20",
    data_entrada_saida: "2024-03-20",
    tipo_documento: "1",
    finalidade_emissao: "1",
    cnpj_emitente: "12.345.678/0001-90",
    nome_emitente: "Empresa Exemplo LTDA",
    nome_fantasia_emitente: "Empresa Exemplo",
    logradouro_emitente: "Rua Exemplo",
    numero_emitente: "123",
    bairro_emitente: "Centro",
    municipio_emitente: "São Paulo",
    uf_emitente: "SP",
    cep_emitente: "01234-567",
    inscricao_estadual_emitente: "123456789",
    nome_destinatario: "Cliente Exemplo",
    cpf_destinatario: "123.456.789-00",
    telefone_destinatario: "(11) 98765-4321",
    logradouro_destinatario: "Avenida Cliente",
    numero_destinatario: "456",
    bairro_destinatario: "Jardim",
    municipio_destinatario: "Rio de Janeiro",
    uf_destinatario: "RJ",
    pais_destinatario: "Brasil",
    cep_destinatario: "12345-678",
    valor_frete: "100.00",
    valor_seguro: "50.00",
    valor_total: "1650.00",
    valor_produtos: "1500.00",
    modalidade_frete: "0",
    items: [
      {
        numero_item: "1",
        codigo_produto: "001",
        descricao: "Produto Exemplo 1",
        cfop: "5102",
        unidade_comercial: "UN",
        quantidade_comercial: "2",
        valor_unitario_comercial: "500.00",
        valor_bruto: "1000.00",
      },
      {
        numero_item: "2",
        codigo_produto: "002",
        descricao: "Produto Exemplo 2",
        cfop: "5102",
        unidade_comercial: "UN",
        quantidade_comercial: "1",
        valor_unitario_comercial: "500.00",
        valor_bruto: "500.00",
      },
    ],
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
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleDownload = (invoice: Invoice) => {
    // In a real application, this would trigger a PDF download
    onDownloadInvoice(invoice.id);
  };

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
              <TableCell>
                {new Date(invoice.data_emissao).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell>
                {Number(invoice.valor_total).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>{invoice.nome_destinatario}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedInvoice(invoice)}
                    title="View Invoice"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownload(invoice)}
                    title="Download Invoice"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onDuplicateInvoice(invoice.id)}
                    title="Duplicate Invoice"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedInvoice && (
        <InvoicePDFViewer
          isOpen={!!selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
          invoice={selectedInvoice}
        />
      )}
    </div>
  );
}
