<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Cabeçalho da página -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Novo Cadastro</h1>
            <p class="text-gray-600 mt-1">Adicione um novo funcionário ao sistema.</p>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </NuxtLink>
          </div>
        </div>
      </div>



      <!-- Componente do formulário -->
      <FormFuncionario :is-novo="true" />
    </div>
  </div>
</template>

<script setup>
// Proteger a página com middleware de autenticação
definePageMeta({
  middleware: 'auth'
})

// Configuração da página
useHead({
  title: 'Novo Cadastro - Sistema Cadastro',
  meta: [
    { name: 'description', content: 'Página para cadastrar novos funcionários no sistema' }
  ]
})


</script>