export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          client_email: string
          client_name: string
          date: string
          id: number
          service: string
          time: string
        }
        Insert: {
          client_email: string
          client_name: string
          date: string
          id?: never
          service: string
          time: string
        }
        Update: {
          client_email?: string
          client_name?: string
          date?: string
          id?: never
          service?: string
          time?: string
        }
        Relationships: []
      }
      atendimentos: {
        Row: {
          assunto: string | null
          cliente_id: number | null
          data_criacao: string | null
          descricao: string | null
          id: number
          status: string | null
        }
        Insert: {
          assunto?: string | null
          cliente_id?: number | null
          data_criacao?: string | null
          descricao?: string | null
          id?: never
          status?: string | null
        }
        Update: {
          assunto?: string | null
          cliente_id?: number | null
          data_criacao?: string | null
          descricao?: string | null
          id?: never
          status?: string | null
        }
        Relationships: []
      }
      available_times: {
        Row: {
          id: number
          time: string
        }
        Insert: {
          id?: never
          time: string
        }
        Update: {
          id?: never
          time?: string
        }
        Relationships: []
      }
      campanhas_marketing: {
        Row: {
          data_fim: string | null
          data_inicio: string | null
          descricao: string | null
          id: number
          nome: string | null
          orcamento: number | null
        }
        Insert: {
          data_fim?: string | null
          data_inicio?: string | null
          descricao?: string | null
          id?: never
          nome?: string | null
          orcamento?: number | null
        }
        Update: {
          data_fim?: string | null
          data_inicio?: string | null
          descricao?: string | null
          id?: never
          nome?: string | null
          orcamento?: number | null
        }
        Relationships: []
      }
      clientes: {
        Row: {
          cnpj: string | null
          created_at: string | null
          email: string | null
          id: number
          nome: string | null
          telefone: string | null
        }
        Insert: {
          cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          telefone?: string | null
        }
        Update: {
          cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      contatos: {
        Row: {
          cliente_id: number | null
          data_contato: string | null
          descricao: string | null
          id: number
          tipo_contato: string | null
        }
        Insert: {
          cliente_id?: number | null
          data_contato?: string | null
          descricao?: string | null
          id?: never
          tipo_contato?: string | null
        }
        Update: {
          cliente_id?: number | null
          data_contato?: string | null
          descricao?: string | null
          id?: never
          tipo_contato?: string | null
        }
        Relationships: []
      }
      ctes: {
        Row: {
          cliente_id: number | null
          created_at: string | null
          data_emissao: string | null
          data_entrega: string | null
          destino: string | null
          id: number
          motorista_id: number | null
          numero: string
          observacoes: string | null
          origem: string | null
          serie: string | null
          status: string | null
          valor_frete: number | null
          veiculo_id: number | null
        }
        Insert: {
          cliente_id?: number | null
          created_at?: string | null
          data_emissao?: string | null
          data_entrega?: string | null
          destino?: string | null
          id?: number
          motorista_id?: number | null
          numero: string
          observacoes?: string | null
          origem?: string | null
          serie?: string | null
          status?: string | null
          valor_frete?: number | null
          veiculo_id?: number | null
        }
        Update: {
          cliente_id?: number | null
          created_at?: string | null
          data_emissao?: string | null
          data_entrega?: string | null
          destino?: string | null
          id?: number
          motorista_id?: number | null
          numero?: string
          observacoes?: string | null
          origem?: string | null
          serie?: string | null
          status?: string | null
          valor_frete?: number | null
          veiculo_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ctes_motorista_id_fkey"
            columns: ["motorista_id"]
            isOneToOne: false
            referencedRelation: "motoristas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ctes_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          city: string | null
          cpf_cnpj: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      mensagens: {
        Row: {
          autor: string | null
          conteudo: string | null
          created_at: string | null
          id: number
          ticket_id: number | null
          tipo: string | null
        }
        Insert: {
          autor?: string | null
          conteudo?: string | null
          created_at?: string | null
          id?: number
          ticket_id?: number | null
          tipo?: string | null
        }
        Update: {
          autor?: string | null
          conteudo?: string | null
          created_at?: string | null
          id?: number
          ticket_id?: number | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mensagens_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      motoristas: {
        Row: {
          categoria_cnh: string | null
          cnh: string
          created_at: string | null
          id: number
          nome: string
          status: string | null
          telefone: string | null
          validade_cnh: string | null
        }
        Insert: {
          categoria_cnh?: string | null
          cnh: string
          created_at?: string | null
          id?: number
          nome: string
          status?: string | null
          telefone?: string | null
          validade_cnh?: string | null
        }
        Update: {
          categoria_cnh?: string | null
          cnh?: string
          created_at?: string | null
          id?: number
          nome?: string
          status?: string | null
          telefone?: string | null
          validade_cnh?: string | null
        }
        Relationships: []
      }
      oportunidades_vendas: {
        Row: {
          cliente_id: number | null
          data_criacao: string | null
          descricao: string | null
          id: number
          status: string | null
          valor_estimado: number | null
        }
        Insert: {
          cliente_id?: number | null
          data_criacao?: string | null
          descricao?: string | null
          id?: never
          status?: string | null
          valor_estimado?: number | null
        }
        Update: {
          cliente_id?: number | null
          data_criacao?: string | null
          descricao?: string | null
          id?: never
          status?: string | null
          valor_estimado?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          barcode: string | null
          brand: string | null
          category: string | null
          cost: number | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          min_stock_quantity: number | null
          name: string
          price: number
          sku: string | null
          stock_quantity: number | null
          supplier: string | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          barcode?: string | null
          brand?: string | null
          category?: string | null
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          min_stock_quantity?: number | null
          name: string
          price: number
          sku?: string | null
          stock_quantity?: number | null
          supplier?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          barcode?: string | null
          brand?: string | null
          category?: string | null
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          min_stock_quantity?: number | null
          name?: string
          price?: number
          sku?: string | null
          stock_quantity?: number | null
          supplier?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          id: number
          name: string
          value: number
        }
        Insert: {
          id?: never
          name: string
          value: number
        }
        Update: {
          id?: never
          name?: string
          value?: number
        }
        Relationships: []
      }
      space_objects: {
        Row: {
          antenna_diameter: number | null
          flyby_objects: string | null
          id: number
          image_tags: string | null
          image_url: string | null
          name: string | null
          year: number | null
        }
        Insert: {
          antenna_diameter?: number | null
          flyby_objects?: string | null
          id?: never
          image_tags?: string | null
          image_url?: string | null
          name?: string | null
          year?: number | null
        }
        Update: {
          antenna_diameter?: number | null
          flyby_objects?: string | null
          id?: never
          image_tags?: string | null
          image_url?: string | null
          name?: string | null
          year?: number | null
        }
        Relationships: []
      }
      tickets: {
        Row: {
          cliente_id: number | null
          created_at: string | null
          descricao: string | null
          id: number
          numero: string | null
          responsavel: string | null
          status: string | null
          tipo: string | null
          updated_at: string | null
        }
        Insert: {
          cliente_id?: number | null
          created_at?: string | null
          descricao?: string | null
          id?: number
          numero?: string | null
          responsavel?: string | null
          status?: string | null
          tipo?: string | null
          updated_at?: string | null
        }
        Update: {
          cliente_id?: number | null
          created_at?: string | null
          descricao?: string | null
          id?: number
          numero?: string | null
          responsavel?: string | null
          status?: string | null
          tipo?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_items: {
        Row: {
          created_at: string | null
          id: string
          price: number
          product_id: string | null
          quantity: number
          total: number
          transaction_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          price: number
          product_id?: string | null
          quantity: number
          total: number
          transaction_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          price?: number
          product_id?: string | null
          quantity?: number
          total?: number
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_items_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          cashier_id: string | null
          change_amount: number | null
          created_at: string | null
          customer_id: string | null
          discount: number | null
          id: string
          payment_amount: number | null
          payment_method: string
          status: string | null
          subtotal: number
          total: number
        }
        Insert: {
          cashier_id?: string | null
          change_amount?: number | null
          created_at?: string | null
          customer_id?: string | null
          discount?: number | null
          id?: string
          payment_amount?: number | null
          payment_method: string
          status?: string | null
          subtotal: number
          total: number
        }
        Update: {
          cashier_id?: string | null
          change_amount?: number | null
          created_at?: string | null
          customer_id?: string | null
          discount?: number | null
          id?: string
          payment_amount?: number | null
          payment_method?: string
          status?: string | null
          subtotal?: number
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "transactions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      veiculos: {
        Row: {
          ano: number | null
          capacidade_carga: number | null
          created_at: string | null
          id: number
          marca: string | null
          modelo: string | null
          placa: string
          status: string | null
          ultima_manutencao: string | null
        }
        Insert: {
          ano?: number | null
          capacidade_carga?: number | null
          created_at?: string | null
          id?: number
          marca?: string | null
          modelo?: string | null
          placa: string
          status?: string | null
          ultima_manutencao?: string | null
        }
        Update: {
          ano?: number | null
          capacidade_carga?: number | null
          created_at?: string | null
          id?: number
          marca?: string | null
          modelo?: string | null
          placa?: string
          status?: string | null
          ultima_manutencao?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_customers_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_products_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_table: {
        Args: {
          table_sql: string
        }
        Returns: undefined
      }
      create_transaction_items_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_transactions_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      decrement_stock: {
        Args: {
          p_product_id: string
          p_quantity: number
        }
        Returns: number
      }
      execute_sql: {
        Args: {
          sql_query: string
        }
        Returns: undefined
      }
      migrate_product_ids: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
