<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          Sistema de Cadastro
        </h1>
        <p class="text-lg text-gray-600">
          Bem-vindo ao seu sistema SaaS
        </p>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Página Inicial
        </h2>
        <p class="text-gray-600 mb-6">
          Esta é a página inicial do seu sistema. O Nuxt está configurado e funcionando corretamente com Tailwind CSS.
        </p>
        
        <div class="space-y-4">
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
            Começar
          </button>
          
          <div class="text-center">
            <a href="/_tailwind/" class="text-blue-600 hover:text-blue-800 text-sm underline">
              Ver Tailwind CSS Viewer
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Configuração da página
useHead({
  title: 'Sistema de Cadastro - Página Inicial',
  meta: [
    { name: 'description', content: 'Sistema SaaS de cadastro desenvolvido com Nuxt 3' }
  ]
})
</script>