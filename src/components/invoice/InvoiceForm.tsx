import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const invoiceFormSchema = z.object({
  natureza_operacao: z.string().min(1, "Operation nature is required"),
  data_emissao: z.string().min(1, "Issue date is required"),
  data_entrada_saida: z.string().min(1, "Entry/Exit date is required"),
  tipo_documento: z.string().min(1, "Document type is required"),
  finalidade_emissao: z.string().min(1, "Issue purpose is required"),
  cnpj_emitente: z.string().min(14, "Issuer CNPJ must be 14 digits"),
  cpf_emitente: z.string().min(11, "Issuer CPF must be 11 digits"),
  nome_emitente: z.string().min(1, "Issuer name is required"),
  nome_fantasia_emitente: z.string().min(1, "Issuer trade name is required"),
  logradouro_emitente: z.string().min(1, "Issuer street is required"),
  numero_emitente: z.string().min(1, "Issuer number is required"),
  bairro_emitente: z.string().min(1, "Issuer neighborhood is required"),
  municipio_emitente: z.string().min(1, "Issuer city is required"),
  uf_emitente: z.string().min(2, "Issuer state is required"),
  cep_emitente: z.string().min(8, "Issuer CEP must be 8 digits"),
  inscricao_estadual_emitente: z
    .string()
    .min(1, "Issuer state registration is required"),
  nome_destinatario: z.string().min(1, "Recipient name is required"),
  cpf_destinatario: z.string().min(11, "Recipient CPF must be 11 digits"),
  telefone_destinatario: z
    .string()
    .min(10, "Recipient phone must be at least 10 digits"),
  logradouro_destinatario: z.string().min(1, "Recipient street is required"),
  numero_destinatario: z.string().min(1, "Recipient number is required"),
  bairro_destinatario: z.string().min(1, "Recipient neighborhood is required"),
  municipio_destinatario: z.string().min(1, "Recipient city is required"),
  uf_destinatario: z.string().min(2, "Recipient state is required"),
  pais_destinatario: z.string().min(1, "Recipient country is required"),
  cep_destinatario: z.string().min(8, "Recipient CEP must be 8 digits"),
  valor_frete: z.string(),
  valor_seguro: z.string(),
  valor_total: z.string().min(1, "Total value is required"),
  valor_produtos: z.string().min(1, "Products value is required"),
  modalidade_frete: z.string().min(1, "Freight mode is required"),
  items: z.array(
    z.object({
      numero_item: z.string(),
      codigo_produto: z.string(),
      descricao: z.string(),
      cfop: z.string(),
      unidade_comercial: z.string(),
      quantidade_comercial: z.string(),
      valor_unitario_comercial: z.string(),
      valor_unitario_tributavel: z.string(),
      unidade_tributavel: z.string(),
      codigo_ncm: z.string(),
      quantidade_tributavel: z.string(),
      valor_bruto: z.string(),
      icms_situacao_tributaria: z.string(),
      icms_origem: z.string(),
      pis_situacao_tributaria: z.string(),
      cofins_situacao_tributaria: z.string(),
    }),
  ),
});

type InvoiceFormData = z.infer<typeof invoiceFormSchema>;

interface InvoiceFormProps {
  onSubmit?: (data: InvoiceFormData) => void;
  initialData?: Partial<InvoiceFormData>;
  isLoading?: boolean;
}

const defaultValues: InvoiceFormData = {
  natureza_operacao: "Remessa",
  data_emissao: new Date().toISOString().split("T")[0],
  data_entrada_saida: new Date().toISOString().split("T")[0],
  tipo_documento: "1",
  finalidade_emissao: "1",
  cnpj_emitente: "",
  cpf_emitente: "",
  nome_emitente: "",
  nome_fantasia_emitente: "",
  logradouro_emitente: "",
  numero_emitente: "",
  bairro_emitente: "",
  municipio_emitente: "",
  uf_emitente: "",
  cep_emitente: "",
  inscricao_estadual_emitente: "",
  nome_destinatario: "",
  cpf_destinatario: "",
  telefone_destinatario: "",
  logradouro_destinatario: "",
  numero_destinatario: "",
  bairro_destinatario: "",
  municipio_destinatario: "",
  uf_destinatario: "",
  pais_destinatario: "Brasil",
  cep_destinatario: "",
  valor_frete: "0",
  valor_seguro: "0",
  valor_total: "",
  valor_produtos: "",
  modalidade_frete: "0",
  items: [
    {
      numero_item: "1",
      codigo_produto: "",
      descricao: "",
      cfop: "",
      unidade_comercial: "UN",
      quantidade_comercial: "",
      valor_unitario_comercial: "",
      valor_unitario_tributavel: "",
      unidade_tributavel: "UN",
      codigo_ncm: "",
      quantidade_tributavel: "",
      valor_bruto: "",
      icms_situacao_tributaria: "41",
      icms_origem: "0",
      pis_situacao_tributaria: "07",
      cofins_situacao_tributaria: "07",
    },
  ],
};

const STEPS = [
  {
    label: "Basic Info",
    fields: [
      "natureza_operacao",
      "tipo_documento",
      "finalidade_emissao",
      "data_emissao",
      "data_entrada_saida",
    ],
  },
  {
    label: "Issuer Info",
    fields: [
      "cnpj_emitente",
      "cpf_emitente",
      "nome_emitente",
      "nome_fantasia_emitente",
      "logradouro_emitente",
      "numero_emitente",
      "bairro_emitente",
      "municipio_emitente",
      "uf_emitente",
      "cep_emitente",
      "inscricao_estadual_emitente",
    ],
  },
  {
    label: "Recipient Info",
    fields: [
      "nome_destinatario",
      "cpf_destinatario",
      "telefone_destinatario",
      "logradouro_destinatario",
      "numero_destinatario",
      "bairro_destinatario",
      "municipio_destinatario",
      "uf_destinatario",
      "pais_destinatario",
      "cep_destinatario",
    ],
  },
  {
    label: "Products & Values",
    fields: [
      "valor_frete",
      "valor_seguro",
      "valor_total",
      "valor_produtos",
      "modalidade_frete",
    ],
  },
];

export default function InvoiceForm({
  onSubmit = (data) => console.log("Form submitted:", data),
  initialData = defaultValues,
  isLoading = false,
}: InvoiceFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: { ...defaultValues, ...initialData },
  });

  const handleSubmit = (data: InvoiceFormData) => {
    onSubmit(data);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg border p-6">
      <div className="mb-6">
        <Breadcrumb
          className="mb-6"
          items={STEPS.map((step, index) => ({
            label: step.label,
            active: index === currentStep,
          }))}
          onItemClick={(item) => {
            const stepIndex = STEPS.findIndex(
              (step) => step.label === item.label,
            );
            if (stepIndex <= currentStep) {
              setCurrentStep(stepIndex);
            }
          }}
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STEPS[currentStep].fields.map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fieldName
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <div className="flex justify-between space-x-4 pt-6">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
              <div className="flex space-x-4 ml-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  disabled={isLoading}
                >
                  Reset
                </Button>
                {currentStep < STEPS.length - 1 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Create Invoice"}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
