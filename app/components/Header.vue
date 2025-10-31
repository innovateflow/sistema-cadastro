<template>
  <header class="bg-background-primary border-b border-border-light shadow-custom-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold text-text-primary hover:text-primary-300 transition-colors duration-200"
          >
            Sistema de <span class="text-primary-300">Cadastro</span>
          </NuxtLink>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Início
          </NuxtLink>
          <NuxtLink 
            to="/novocadastro" 
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Novo Cadastro
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden mt-4 pb-4 border-t border-border-light pt-4"
      >
        <nav class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Início
          </NuxtLink>
          <NuxtLink 
            to="/novocadastro" 
            @click="closeMobileMenu"
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Novo Cadastro
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Estado do menu mobile
const mobileMenuOpen = ref(false)

// Função para alternar menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Função para fechar menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}



// Fechar menu mobile ao redimensionar tela
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      mobileMenuOpen.value = false
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>