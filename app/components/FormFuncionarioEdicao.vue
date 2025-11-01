<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <!-- Cabeçalho do formulário -->
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">
            Editar Funcionário
          </h2>
          <p class="text-sm text-gray-600 mt-1">
            Altere as informações do funcionário
          </p>
        </div>
        <div class="text-sm text-gray-500">
          <span class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            ID: {{ funcionario.id }}
          </span>
        </div>
      </div>
    </div>

    <!-- Conteúdo do formulário -->
    <div class="p-6">
      <!-- Formulário -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Grid de campos principais -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Nome -->
          <div class="lg:col-span-2">
            <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              id="nome"
              v-model="form.nome"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Digite o nome completo"
            />
          </div>

          <!-- Cargo -->
          <div>
            <DropDown
              v-model="form.cargo"
              :options="cargosDisponiveis"
              label="Cargo *"
              placeholder="Selecione o cargo"
              required
            />
          </div>
        </div>

        <!-- Grid secundário -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- E-mail -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="exemplo@email.com"
            />
          </div>

          <!-- Salário -->
          <div>
            <label for="salario" class="block text-sm font-medium text-gray-700 mb-2">
              Salário *
            </label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                R$
              </span>
              <input
                id="salario"
                v-model="form.salario"
                type="number"
                step="0.01"
                min="0"
                required
                class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="0,00"
              />
            </div>
          </div>
        </div>

        <!-- Endereço -->
        <div>
          <label for="endereco" class="block text-sm font-medium text-gray-700 mb-2">
            Endereço Completo
          </label>
          <textarea
            id="endereco"
            v-model="form.endereco"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="Rua, número, bairro, cidade - CEP"
          ></textarea>
        </div>

        <!-- Botões de ação -->
        <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            :disabled="loading"
            class="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loading ? 'Salvando...' : 'Salvar Alterações' }}
          </button>

          <button
            type="button"
            @click="handleCancelar"
            :disabled="loading"
            class="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  funcionario: {
    type: Object,
    required: true
  }
})

// Emits
const emit = defineEmits(['funcionario-editado', 'cancelar'])

// Estado do formulário
const form = ref({
  nome: '',
  cargo: '',
  email: null,
  endereco: null,
  salario: null
})

const loading = ref(false)

// Lista de cargos disponíveis
const cargosDisponiveis = [
  'Gestor de Tráfego',
  'Analista de Mídia Paga',
  'Copywriter',
  'Designer Gráfico / Motion Designer',
  'Closer',
  'SDR',
  'Social Media',
  'Especialista em Funil / CRO',
  'Analista de Dados / BI',
  'Gestor de Projetos / Account Manager'
]

// Composables
const { notifications } = useNotification()
const { atualizarFuncionario } = useFuncionarios()

// Preencher formulário com dados do funcionário
watchEffect(() => {
  if (props.funcionario) {
    form.value = {
      nome: props.funcionario.nome || '',
      cargo: props.funcionario.cargo || '',
      email: props.funcionario.email || null,
      endereco: props.funcionario.endereco || null,
      salario: props.funcionario.salario || null
    }
  }
})

// Função para lidar com o submit
const handleSubmit = async () => {
  try {
    loading.value = true
    
    // Validações básicas
    if (!form.value.nome.trim()) {
      notifications.funcionario.dadosInvalidos()
      return
    }
    
    if (!form.value.cargo.trim()) {
      notifications.funcionario.dadosInvalidos()
      return
    }
    
    if (!form.value.salario || isNaN(Number(form.value.salario)) || Number(form.value.salario) <= 0) {
      notifications.funcionario.dadosInvalidos()
      return
    }

    // Preparar dados para envio
    const dadosAtualizados = {
      nome: form.value.nome.trim(),
      cargo: form.value.cargo.trim(),
      email: form.value.email?.trim() || null,
      endereco: form.value.endereco?.trim() || null,
      salario: parseFloat(form.value.salario.toString())
    }
    
    // Atualizar funcionário no Supabase
    const resultado = await atualizarFuncionario(props.funcionario.id, dadosAtualizados)
    
    if (resultado.success) {
      notifications.funcionario.atualizado()
      
      // Preparar dados completos para emitir
      const funcionarioEditado = {
        id: props.funcionario.id,
        ...dadosAtualizados
      }
      
      // Emitir evento de funcionário editado
      emit('funcionario-editado', funcionarioEditado)
    } else {
      notifications.funcionario.erroAtualizar()
    }
    
  } catch (error) {
    console.error('Erro ao editar funcionário:', error)
    notifications.funcionario.erroAtualizar()
  } finally {
    loading.value = false
  }
}

// Função para cancelar
const handleCancelar = () => {
  emit('cancelar')
}
</script>

<style scoped>
/* Animação de loading */
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