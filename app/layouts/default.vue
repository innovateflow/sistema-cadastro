<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Global -->
    <Header />
    
    <!-- Conteúdo das Páginas -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer Global -->
    <Footer />
  </div>
</template>

<script setup>
// Layout padrão do Nuxt 4
// Este layout será aplicado automaticamente a todas as páginas
// que não especificarem um layout customizado
</script>