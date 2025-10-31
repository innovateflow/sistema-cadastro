import type { SupabaseClient } from '@supabase/supabase-js'

export interface Funcionario {
  id: number
  nome: string
  cargo: string
  email: string | null
  endereco?: string | null
  salario?: number
  created_at?: string
}

export interface FuncionarioDisplay {
  id: number
  nome: string
  cargo: string
  email: string | null
}

export const useFuncionarios = () => {
  const { $supabase } = useNuxtApp() as { $supabase: SupabaseClient }
  
  const funcionarios = ref<FuncionarioDisplay[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Função para buscar todos os funcionários
  const fetchFuncionarios = async () => {
    try {
      loading.value = true
      error.value = null

      const { data, error: fetchError } = await $supabase
        .from('funcionarios')
        .select('id, nome, cargo, email')
        .order('nome', { ascending: true })

      if (fetchError) {
        error.value = fetchError.message
        console.error('Erro ao buscar funcionários:', fetchError)
        return
      }

      funcionarios.value = data || []
    } catch (err) {
      error.value = 'Erro inesperado ao carregar funcionários'
      console.error('Erro inesperado:', err)
    } finally {
      loading.value = false
    }
  }

  // Função para adicionar um novo funcionário
  const adicionarFuncionario = async (funcionario: Omit<Funcionario, 'id' | 'created_at'>) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: insertError } = await $supabase
        .from('funcionarios')
        .insert(funcionario)
        .select('id, nome, cargo, email')
        .single()

      if (insertError) {
        error.value = insertError.message
        return { success: false, error: error.value }
      }

      // Adicionar o novo funcionário à lista
      if (data) {
        funcionarios.value.push(data as FuncionarioDisplay)
      }
      return { success: true, data }
    } catch (err) {
      error.value = 'Erro inesperado ao adicionar funcionário'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  return {
    funcionarios: readonly(funcionarios),
    loading: readonly(loading),
    error: readonly(error),
    fetchFuncionarios,
    adicionarFuncionario
  }
}