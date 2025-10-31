<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <!-- Cabeçalho da tabela -->
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">Lista de Funcionários</h2>
          <p class="text-sm text-gray-600 mt-1">
            {{ funcionarios.length }} funcionário(s) encontrado(s)
          </p>
        </div>
        <div class="text-sm text-gray-500">
          <span class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Equipe
          </span>
        </div>
      </div>
    </div>

    <!-- Estado de carregamento -->
    <div v-if="loading" class="px-6 py-12 text-center">
      <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <svg class="animate-spin w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <p class="text-gray-600">Carregando funcionários...</p>
    </div>

    <!-- Estado de erro -->
    <div v-else-if="error" class="px-6 py-12 text-center">
      <div class="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p class="text-red-600 font-medium mb-2">Erro ao carregar funcionários</p>
      <p class="text-gray-600 text-sm mb-4">{{ error }}</p>
      <button 
        @click="recarregarFuncionarios"
        class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Tentar Novamente
      </button>
    </div>

    <!-- Lista vazia -->
    <div v-else-if="funcionarios.length === 0" class="px-6 py-12 text-center">
      <div class="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <p class="text-gray-600 font-medium mb-2">Nenhum funcionário encontrado</p>
      <p class="text-gray-500 text-sm">Adicione funcionários ao sistema para vê-los aqui.</p>
    </div>

    <!-- Tabela de funcionários -->
    <div v-else class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cargo
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              E-mail
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr 
            v-for="funcionario in funcionarios" 
            :key="funcionario.id"
            class="hover:bg-gray-50 transition-colors duration-200"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-sm font-medium text-blue-600">
                      {{ getInitials(funcionario.nome) }}
                    </span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ funcionario.nome }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ funcionario.cargo }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div v-if="funcionario.email" class="text-sm text-gray-900">
                <a 
                  :href="`mailto:${funcionario.email}`"
                  class="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {{ funcionario.email }}
                </a>
              </div>
              <div v-else class="text-sm text-gray-400 italic">
                Email não informado
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFuncionarios } from '~/composables/useFuncionarios'
import { useSupabaseDebug } from '~/composables/useSupabaseDebug'

const { funcionarios, loading, error, fetchFuncionarios } = useFuncionarios()
const { testConnection, testAuth } = useSupabaseDebug()

// Carrega os funcionários quando o componente é montado
onMounted(async () => {
  // Debug: testar conexão e autenticação
  await testAuth()
  await testConnection()
  
  // Carregar funcionários
  fetchFuncionarios()
})

// Função para recarregar funcionários em caso de erro
const recarregarFuncionarios = () => {
  fetchFuncionarios()
}

// Função para obter as iniciais do nome
const getInitials = (nome: string): string => {
  if (!nome) return ''
  
  const names = nome.trim().split(' ').filter(n => n.length > 0)
  if (names.length === 0) return ''
  
  if (names.length === 1) {
    return names[0]!.substring(0, 2).toUpperCase()
  }
  
  return (names[0]!.charAt(0) + names[names.length - 1]!.charAt(0)).toUpperCase()
}
</script>