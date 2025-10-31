<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Cabeçalho da página -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Sistema Cadastro</h1>
            <p class="text-gray-600 mt-1">Sistema moderno e eficiente para gerenciamento de cadastros e dados.</p>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">
              Olá, {{ user?.email }}
            </span>
          </div>
        </div>
      </div>

      <!-- Componente da tabela de funcionários -->
      <FuncionarioTabela />
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'

// Proteger a página com middleware de autenticação
definePageMeta({
  middleware: 'auth'
})

// Configuração da página
useHead({
  title: 'Sistema Cadastro - Página Inicial',
  meta: [
    { name: 'description', content: 'Sistema SaaS de cadastro moderno e eficiente para sua empresa' }
  ]
})

// Obter informações do usuário logado
const { user } = useAuth()
</script>