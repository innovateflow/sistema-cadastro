<template>
  <div class="min-h-screen bg-background-secondary flex items-center justify-center p-4">
    <LoginForm />
  </div>
</template>

<script setup>
// Desabilitar layout padrão (sem header/footer) e aplicar middleware guest
definePageMeta({
  layout: false,
  middleware: 'guest'
})

// Configuração da página
useHead({
  title: 'Login - Tarini Cadastro',
  meta: [
    { name: 'description', content: 'Faça login ou registre-se no Tarini Cadastro' }
  ]
})
</script>