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
  const adicionarFuncionario = async (funcionario: {
    nome: string
    cargo: string
    email: string | null
    endereco: string | null
    salario: number
  }) => {
    try {
      loading.value = true
      error.value = null

      console.log('🔍 Dados recebidos para inserir:', funcionario)
      console.log('🔧 Supabase client:', $supabase)

      // Preparar dados para inserção na ordem correta da tabela
      const dadosParaInserir = {
        nome: funcionario.nome.trim(),
        cargo: funcionario.cargo.trim(),
        endereco: funcionario.endereco?.trim() || null,
        email: funcionario.email?.trim() || null,
        salario: parseFloat(funcionario.salario.toString())
      }

      console.log('📝 Dados formatados para o Supabase:', dadosParaInserir)
      console.log('🔍 Tipos dos dados:', {
        nome: typeof dadosParaInserir.nome,
        cargo: typeof dadosParaInserir.cargo,
        endereco: typeof dadosParaInserir.endereco,
        email: typeof dadosParaInserir.email,
        salario: typeof dadosParaInserir.salario
      })

      const { data, error: insertError } = await $supabase
        .from('funcionarios')
        .insert([dadosParaInserir])
        .select('id, nome, cargo, email')
        .single()

      console.log('📊 Resposta do Supabase:', { data, error: insertError })

      if (insertError) {
        error.value = insertError.message
        console.error('❌ Erro do Supabase:', insertError)
        console.error('❌ Detalhes completos:', {
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          code: insertError.code
        })
        return { success: false, error: error.value }
      }

      // Adicionar o novo funcionário à lista
      if (data) {
        funcionarios.value.push(data as FuncionarioDisplay)
        console.log('✅ Funcionário adicionado à lista local')
      }
      
      return { success: true, data }
    } catch (err) {
      error.value = 'Erro inesperado ao adicionar funcionário'
      console.error('💥 Erro inesperado completo:', err)
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