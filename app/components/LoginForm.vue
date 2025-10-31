<template>
  <div class="bg-background-primary rounded-xl shadow-custom-lg border border-border-light p-8 w-full max-w-md mx-auto">
    <!-- Logo/Título -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-text-primary mb-2">
        Tarini <span class="text-primary-300">Cadastro</span>
      </h1>
      <p class="text-text-secondary">
        {{ activeTab === 'login' ? 'Entre com suas credenciais de acesso' : 'Crie suas credenciais de acesso' }}
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex mb-6 bg-background-secondary rounded-lg p-1">
      <button
        @click="activeTab = 'login'"
        :class="[
          'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
          activeTab === 'login'
            ? 'bg-background-primary text-text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        ]"
      >
        Entrar
      </button>
      <button
        @click="activeTab = 'register'"
        :class="[
          'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
          activeTab === 'register'
            ? 'bg-background-primary text-text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        ]"
      >
        Registrar-se
      </button>
    </div>

    <!-- Formulário de Login -->
    <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
      <Input
        v-model="loginForm.email"
        type="email"
        label="E-mail"
        placeholder="exemplo@gmail.com"
        :required="true"
      />
      
      <PasswordInput
        v-model="loginForm.password"
        label="Senha"
        placeholder="••••••••"
        :required="true"
      />

      <!-- Mensagens de feedback -->
      <div v-if="loginError" class="text-sm text-error bg-error/10 p-3 rounded-lg border border-error/20">
        {{ loginError }}
      </div>
      
      <div v-if="loginSuccess" class="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
        ✅ Login realizado com sucesso! Redirecionando...
      </div>

      <div class="text-right">
        <a href="#" class="text-sm text-primary-300 hover:text-primary-400 transition-colors duration-200">
          Esqueceu a senha?
        </a>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        :full-width="true"
        :disabled="loading"
        class="mt-6"
      >
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </Button>
    </form>

    <!-- Formulário de Registro -->
    <form v-else @submit.prevent="handleRegister" class="space-y-4">
      <Input
        v-model="registerForm.email"
        type="email"
        label="E-mail"
        placeholder="exemplo@gmail.com"
        :required="true"
      />
      
      <PasswordInput
        v-model="registerForm.password"
        label="Senha"
        placeholder="Insira sua senha"
        :required="true"
      />
      
      <PasswordInput
        v-model="registerForm.confirmPassword"
        label="Confirmação de senha"
        placeholder="Repita sua senha"
        :required="true"
      />

      <!-- Termos e condições -->
      <div class="flex items-start space-x-3 pt-2">
        <input
          id="terms"
          v-model="registerForm.acceptTerms"
          type="checkbox"
          class="mt-1 h-4 w-4 text-primary-300 border-border-light rounded focus:ring-primary-300 focus:ring-2"
        />
        <label for="terms" class="text-sm text-text-secondary">
          Ao criar sua conta, você concorda em cumprir estes 
          <a href="#" class="text-primary-300 hover:text-primary-400 underline">
            Termos e compromissos
          </a>.
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        :full-width="true"
        :disabled="!registerForm.acceptTerms"
        class="mt-6"
      >
        Criar Minha Conta
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
// Composables
const { login, loading, error } = useAuth()
const router = useRouter()

// Estado das abas
const activeTab = ref<'login' | 'register'>('login')

// Estado para feedback
const loginError = ref<string | null>(null)
const loginSuccess = ref(false)

// Formulário de login
const loginForm = reactive({
  email: '',
  password: ''
})

// Formulário de registro
const registerForm = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

// Função para lidar com login
const handleLogin = async () => {
  // Limpar erros anteriores
  loginError.value = null
  loginSuccess.value = false
  
  // Validações básicas
  if (!loginForm.email || !loginForm.password) {
    loginError.value = 'Por favor, preencha todos os campos'
    return
  }
  
  if (!isValidEmail(loginForm.email)) {
    loginError.value = 'Por favor, insira um email válido'
    return
  }
  
  try {
    const result = await login({
      email: loginForm.email,
      password: loginForm.password
    })
    
    if (result.success) {
      loginSuccess.value = true
      
      // Redirecionar após login bem-sucedido
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } else {
      loginError.value = result.error || 'Erro ao fazer login'
    }
  } catch (err) {
    loginError.value = 'Erro inesperado. Tente novamente.'
  }
}

// Função para lidar com registro
const handleRegister = () => {
  console.log('Register:', registerForm)
  // Implementar lógica de registro futuramente
}

// Função para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Interface para props (se necessário no futuro)
interface LoginFormProps {
  initialTab?: 'login' | 'register'
}

// Props opcionais
const props = withDefaults(defineProps<LoginFormProps>(), {
  initialTab: 'login'
})

// Definir aba inicial baseada nas props
onMounted(() => {
  activeTab.value = props.initialTab
})
</script>