<template>
  <div class="min-h-[80vh] bg-background-secondary flex items-center justify-center p-4">
    <LoginForm />
  </div>
</template>

<script setup>
// Configuração da página
useHead({
  title: 'Login - Sistema de Cadastro',
  meta: [
    { name: 'description', content: 'Faça login ou registre-se no Sistema de Cadastro' }
  ]
})
</script>