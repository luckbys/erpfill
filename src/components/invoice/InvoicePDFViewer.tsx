import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InvoicePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: {
    number: string;
    type: string;
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
  };
}

export default function InvoicePDFViewer({
  isOpen,
  onClose,
  invoice,
}: InvoicePDFViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Invoice {invoice.number}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-6 bg-white">
          {/* Header Information */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">DANFE</h1>
            <p className="text-lg">
              Documento Auxiliar da Nota Fiscal Eletrônica
            </p>
            <p className="text-sm">0 - ENTRADA / 1 - SAÍDA</p>
            <p className="text-xl font-bold mt-2">Nº {invoice.number}</p>
            <p className="text-xl font-bold">SÉRIE 001</p>
          </div>

          <Separator />

          {/* Issuer Information */}
          <Card className="p-4">
            <h2 className="font-bold mb-2">EMITENTE</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">{invoice.nome_emitente}</p>
                <p>{invoice.nome_fantasia_emitente}</p>
                <p>{`${invoice.logradouro_emitente}, ${invoice.numero_emitente}`}</p>
                <p>{`${invoice.bairro_emitente} - ${invoice.municipio_emitente}/${invoice.uf_emitente}`}</p>
                <p>{`CEP: ${invoice.cep_emitente}`}</p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">CNPJ:</span>{" "}
                  {invoice.cnpj_emitente}
                </p>
                <p>
                  <span className="font-semibold">IE:</span>{" "}
                  {invoice.inscricao_estadual_emitente}
                </p>
              </div>
            </div>
          </Card>

          {/* Recipient Information */}
          <Card className="p-4">
            <h2 className="font-bold mb-2">DESTINATÁRIO</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">{invoice.nome_destinatario}</p>
                <p>{`${invoice.logradouro_destinatario}, ${invoice.numero_destinatario}`}</p>
                <p>{`${invoice.bairro_destinatario} - ${invoice.municipio_destinatario}/${invoice.uf_destinatario}`}</p>
                <p>{`CEP: ${invoice.cep_destinatario}`}</p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">CPF:</span>{" "}
                  {invoice.cpf_destinatario}
                </p>
                <p>
                  <span className="font-semibold">Telefone:</span>{" "}
                  {invoice.telefone_destinatario}
                </p>
              </div>
            </div>
          </Card>

          {/* Products Table */}
          <Card className="p-4">
            <h2 className="font-bold mb-2">PRODUTOS</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Código</th>
                    <th className="px-4 py-2 text-left">Descrição</th>
                    <th className="px-4 py-2 text-left">CFOP</th>
                    <th className="px-4 py-2 text-left">Un</th>
                    <th className="px-4 py-2 text-right">Qtde</th>
                    <th className="px-4 py-2 text-right">Valor Un</th>
                    <th className="px-4 py-2 text-right">Valor Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.numero_item} className="border-b">
                      <td className="px-4 py-2">{item.codigo_produto}</td>
                      <td className="px-4 py-2">{item.descricao}</td>
                      <td className="px-4 py-2">{item.cfop}</td>
                      <td className="px-4 py-2">{item.unidade_comercial}</td>
                      <td className="px-4 py-2 text-right">
                        {item.quantidade_comercial}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {Number(item.valor_unitario_comercial).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          },
                        )}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {Number(item.valor_bruto).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Totals */}
          <Card className="p-4">
            <h2 className="font-bold mb-2">TOTAIS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-semibold">Valor dos Produtos:</span>{" "}
                  {Number(invoice.valor_produtos).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>
                  <span className="font-semibold">Valor do Frete:</span>{" "}
                  {Number(invoice.valor_frete).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>
                  <span className="font-semibold">Valor do Seguro:</span>{" "}
                  {Number(invoice.valor_seguro).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">
                  Valor Total:{" "}
                  {Number(invoice.valor_total).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Information */}
          <Card className="p-4">
            <h2 className="font-bold mb-2">INFORMAÇÕES ADICIONAIS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-semibold">Natureza da Operação:</span>{" "}
                  {invoice.natureza_operacao}
                </p>
                <p>
                  <span className="font-semibold">Tipo de Documento:</span>{" "}
                  {invoice.tipo_documento}
                </p>
                <p>
                  <span className="font-semibold">Finalidade:</span>{" "}
                  {invoice.finalidade_emissao}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Data de Emissão:</span>{" "}
                  {new Date(invoice.data_emissao).toLocaleDateString("pt-BR")}
                </p>
                <p>
                  <span className="font-semibold">Data de Saída:</span>{" "}
                  {new Date(invoice.data_entrada_saida).toLocaleDateString(
                    "pt-BR",
                  )}
                </p>
                <p>
                  <span className="font-semibold">Modalidade do Frete:</span>{" "}
                  {invoice.modalidade_frete}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
