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

  // Função para buscar funcionário por ID (otimizada)
  const buscarFuncionarioPorId = (id: number) => {
    // Primeiro tenta encontrar nos dados já carregados
    const funcionarioExistente = funcionarios.value.find(f => f.id === id)
    if (funcionarioExistente) {
      return funcionarioExistente
    }

    // Se não encontrar, faz busca no Supabase
    return buscarFuncionarioDoSupabase(id)
  }

  // Função auxiliar para buscar no Supabase
  const buscarFuncionarioDoSupabase = async (id: number) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: fetchError } = await $supabase
        .from('funcionarios')
        .select('id, nome, cargo, email, endereco, salario, created_at')
        .eq('id', id)
        .single()

      if (fetchError) {
        console.error('Erro ao buscar funcionário no Supabase:', fetchError)
        return null
      }

      return data
    } catch (err) {
      console.error('Erro inesperado ao buscar funcionário:', err)
      return null
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

  // Função para atualizar funcionário existente
  const atualizarFuncionario = async (id: number, dadosAtualizados: {
    nome: string
    cargo: string
    email: string | null
    endereco: string | null
    salario: number
  }) => {
    try {
      loading.value = true
      error.value = null

      console.log('🔄 Atualizando funcionário:', { id, dados: dadosAtualizados })

      // Preparar dados para atualização
      const dadosParaAtualizar = {
        nome: dadosAtualizados.nome.trim(),
        cargo: dadosAtualizados.cargo.trim(),
        endereco: dadosAtualizados.endereco?.trim() || null,
        email: dadosAtualizados.email?.trim() || null,
        salario: parseFloat(dadosAtualizados.salario.toString())
      }

      console.log('📝 Dados formatados para atualização:', dadosParaAtualizar)

      const { data, error: updateError } = await $supabase
        .from('funcionarios')
        .update(dadosParaAtualizar)
        .eq('id', id)
        .select('id, nome, cargo, email')
        .single()

      console.log('📊 Resposta da atualização:', { data, error: updateError })

      if (updateError) {
        error.value = updateError.message
        console.error('❌ Erro na atualização:', updateError)
        return { success: false, error: error.value }
      }

      // Atualizar o funcionário na lista local
      if (data) {
        const index = funcionarios.value.findIndex(f => f.id === id)
        if (index !== -1) {
          funcionarios.value[index] = data as FuncionarioDisplay
          console.log('✅ Funcionário atualizado na lista local')
        }
      }
      
      return { success: true, data }
    } catch (err) {
      error.value = 'Erro inesperado ao atualizar funcionário'
      console.error('💥 Erro inesperado na atualização:', err)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Função para deletar funcionário
  const deletarFuncionario = async (id: number) => {
    try {
      loading.value = true
      error.value = null

      console.log('🗑️ Deletando funcionário:', { id })

      const { error: deleteError } = await $supabase
        .from('funcionarios')
        .delete()
        .eq('id', id)

      console.log('📊 Resposta da exclusão:', { error: deleteError })

      if (deleteError) {
        error.value = deleteError.message
        console.error('❌ Erro na exclusão:', deleteError)
        return { success: false, error: error.value }
      }

      // Remover funcionário da lista local
      const index = funcionarios.value.findIndex(f => f.id === id)
      if (index !== -1) {
        funcionarios.value.splice(index, 1)
        console.log('✅ Funcionário removido da lista local')
      }
      
      return { success: true }
    } catch (err) {
      error.value = 'Erro inesperado ao deletar funcionário'
      console.error('💥 Erro inesperado na exclusão:', err)
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
    adicionarFuncionario,
    buscarFuncionarioPorId,
    atualizarFuncionario,
    deletarFuncionario
  }
}