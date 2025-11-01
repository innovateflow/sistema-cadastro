export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      funcionarios: {
        Row: {
          id: number
          nome: string
          cargo: string
          email: string | null
          endereco: string | null
          salario: number | null
          created_at: string
        }
        Insert: {
          id?: number
          nome: string
          cargo: string
          email?: string | null
          endereco?: string | null
          salario?: number | null
          created_at?: string
        }
        Update: {
          id?: number
          nome?: string
          cargo?: string
          email?: string | null
          endereco?: string | null
          salario?: number | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}