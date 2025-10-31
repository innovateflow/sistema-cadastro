<template>
  <div class="bg-background-secondary min-h-[60vh]">
    <div class="container mx-auto px-4 py-12">
      <!-- Conteúdo da página será adicionado aqui -->
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
  title: 'Tarini Cadastro - Página Inicial',
  meta: [
    { name: 'description', content: 'Sistema SaaS de cadastro moderno e eficiente para sua empresa' }
  ]
})
</script>