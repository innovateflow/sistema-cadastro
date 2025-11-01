<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <!-- Cabeçalho do formulário -->
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">
            {{ isNovo ? 'Cadastrar Novo Funcionário' : 'Editar Funcionário' }}
          </h2>
          <p class="text-sm text-gray-600 mt-1">
            {{ isNovo ? 'Preencha os dados do novo funcionário' : 'Edite as informações do funcionário' }}
          </p>
        </div>
        <div class="text-sm text-gray-500">
          <span class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Dados do Funcionário
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
              label="Cargo"
              id="cargo"
              placeholder="Selecione o cargo"
              :required="true"
            />
          </div>
        </div>

        <!-- Segunda linha do grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="exemplo@empresa.com"
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

        <!-- Endereço - Campo largo -->
        <div>
          <label for="endereco" class="block text-sm font-medium text-gray-700 mb-2">
            Endereço
          </label>
          <textarea
            id="endereco"
            v-model="form.endereco"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="Digite o endereço completo"
          ></textarea>
        </div>

      <!-- Botões de ação -->
      <div class="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          @click="handleLimpar"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
        >
          Limpar
        </button>
        
        <button
          type="submit"
          :disabled="loading"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isNovo ? 'Salvar' : 'Editar' }}
        </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FuncionarioForm {
  nome: string
  cargo: string
  email: string | null
  endereco: string | null
  salario: number | null
}

interface Props {
  isNovo?: boolean
}

// Props com valor padrão
const props = withDefaults(defineProps<Props>(), {
  isNovo: true
})

// Estado do formulário
const form = ref<FuncionarioForm>({
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
const { adicionarFuncionario } = useFuncionarios()
const { notifications } = useNotification()

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
    const funcionarioData = {
      nome: form.value.nome.trim(),
      cargo: form.value.cargo.trim(),
      email: form.value.email?.trim() || null,
      endereco: form.value.endereco?.trim() || null,
      salario: parseFloat(form.value.salario.toString())
    }
    
    if (props.isNovo) {
      // Cadastrar novo funcionário
      const resultado = await adicionarFuncionario(funcionarioData)
      
      if (resultado.success) {
        notifications.funcionario.cadastrado()
        // Limpar formulário após cadastro
        resetForm()
      } else {
        notifications.funcionario.erroCadastrar()
      }
    } else {
      // TODO: Implementar edição
      notifications.funcionario.atualizado()
    }
    
  } catch (error) {
    console.error('Erro ao processar funcionário:', error)
    if (props.isNovo) {
      notifications.funcionario.erroCadastrar()
    } else {
      notifications.funcionario.erroAtualizar()
    }
  } finally {
    loading.value = false
  }
}

// Função para limpar o formulário
const handleLimpar = () => {
  resetForm()
}

// Função para resetar o formulário
const resetForm = () => {
  form.value = {
    nome: '',
    cargo: '',
    email: null,
    endereco: null,
    salario: null
  }
}
</script>