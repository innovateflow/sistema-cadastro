<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Cabeçalho da página -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Editar Funcionário</h1>
            <p class="text-gray-600 mt-1">
              {{ funcionario ? `Editando: ${funcionario.nome}` : 'Carregando funcionário...' }}
            </p>
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

      <!-- Loading -->
      <div v-if="loading" class="text-center py-8">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600">Carregando dados do funcionário...</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="text-lg font-medium text-red-900 mb-2">Funcionário não encontrado</h3>
          <p class="text-red-600 mb-6">{{ error }}</p>
          <NuxtLink 
            to="/" 
            class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Voltar para início
          </NuxtLink>
        </div>
      </div>

      <!-- Formulário -->
      <div v-else-if="funcionario">
        <FormFuncionarioEdicao 
          :funcionario="funcionario"
          @funcionario-editado="handleFuncionarioEditado"
          @cancelar="handleCancelar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const router = useRouter()
const { buscarFuncionarioPorId } = useFuncionarios()
const { showSuccess, showError } = useNotification()

const loading = ref(false)
const error = ref(null)
const funcionario = ref(null)

// Buscar funcionário ao montar a página
onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    
    const id = parseInt(route.params.id)
    
    if (isNaN(id)) {
      throw new Error('ID do funcionário inválido')
    }

    const data = await buscarFuncionarioPorId(id)
    
    if (data) {
      funcionario.value = data
    } else {
      error.value = 'Funcionário não encontrado'
    }
  } catch (err) {
    error.value = err.message || 'Erro ao carregar funcionário'
    console.error('Erro ao buscar funcionário:', err)
    showError('Erro ao carregar funcionário')
  } finally {
    loading.value = false
  }
})

// Handler para quando funcionário for editado
const handleFuncionarioEditado = (funcionarioEditado) => {
  console.log('Funcionário editado:', funcionarioEditado)
  
  // Redirecionar de volta para a página inicial
  router.push('/')
}

// Handler para cancelar edição
const handleCancelar = () => {
  router.push('/')
}

useHead({
  title: computed(() => {
    if (funcionario.value) {
      return `Editar ${funcionario.value.nome} - Sistema Cadastro`
    }
    return 'Editar Funcionário - Sistema Cadastro'
  })
})
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>