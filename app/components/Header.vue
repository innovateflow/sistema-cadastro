<template>
  <header class="bg-background-primary border-b border-border-light shadow-custom-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold text-text-primary"
          >
            Tarini <span class="text-primary-300">Cadastro</span>
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
            v-if="isAuthenticated"
            to="/novocadastro" 
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Novo Cadastro
          </NuxtLink>
          <NuxtLink 
            v-if="!isAuthenticated"
            to="/login" 
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Login
          </NuxtLink>
        </nav>

        <!-- User Actions (Desktop) -->
        <div v-if="isAuthenticated" class="hidden md:flex items-center space-x-4">
          <span class="text-sm text-text-secondary">
            Olá, {{ userDisplayName }}
          </span>
          <Button
            variant="outline"
            size="sm"
            @click="handleLogout"
            :disabled="loading"
          >
            {{ loading ? 'Saindo...' : 'Sair' }}
          </Button>
        </div>

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
            v-if="isAuthenticated"
            to="/novocadastro" 
            @click="closeMobileMenu"
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Novo Cadastro
          </NuxtLink>
          <NuxtLink 
            v-if="!isAuthenticated"
            to="/login" 
            @click="closeMobileMenu"
            class="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            active-class="text-primary-300 font-semibold"
          >
            Login
          </NuxtLink>
          
          <!-- User Info & Logout (Mobile) -->
          <div v-if="isAuthenticated" class="pt-2 border-t border-border-light">
            <div class="text-sm text-text-secondary mb-3">
              Olá, {{ userDisplayName }}
            </div>
            <Button
              variant="outline"
              size="sm"
              :full-width="true"
              @click="handleLogout"
              :disabled="loading"
            >
              {{ loading ? 'Saindo...' : 'Sair' }}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Composables
const { user, isAuthenticated, logout, loading } = useAuth()
const router = useRouter()

// Estado do menu mobile
const mobileMenuOpen = ref(false)

// Computed para nome do usuário
const userDisplayName = computed(() => {
  if (!user.value) return ''
  return user.value.email?.split('@')[0] || 'Usuário'
})

// Função para alternar menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Função para fechar menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Função para logout
const handleLogout = async () => {
  try {
    const result = await logout()
    
    if (result.success) {
      // Fechar menu mobile se estiver aberto
      closeMobileMenu()
      
      // Redirecionar para página de login
      router.push('/login')
    }
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
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