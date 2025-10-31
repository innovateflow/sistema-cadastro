<template>
  <div class="bg-background-primary rounded-xl shadow-custom-lg border border-border-light p-8 w-full max-w-md mx-auto">
    <!-- Logo/Título -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-text-primary mb-2">
        Sistema de <span class="text-primary-300">Cadastro</span>
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
        placeholder="exemplo@outlook.com"
        :required="true"
      />
      
      <Input
        v-model="loginForm.password"
        type="password"
        label="Senha"
        placeholder="••••••••"
        :required="true"
      />

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
        class="mt-6"
      >
        Entrar
      </Button>
    </form>

    <!-- Formulário de Registro -->
    <form v-else @submit.prevent="handleRegister" class="space-y-4">
      <Input
        v-model="registerForm.email"
        type="email"
        label="E-mail"
        placeholder="johnsnow@example.com"
        :required="true"
      />
      
      <Input
        v-model="registerForm.password"
        type="password"
        label="Senha"
        placeholder="Insira sua senha"
        :required="true"
      />
      
      <Input
        v-model="registerForm.confirmPassword"
        type="password"
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
// Estado das abas
const activeTab = ref<'login' | 'register'>('login')

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
const handleLogin = () => {
  console.log('Login:', loginForm)
  // Implementar lógica de login
}

// Função para lidar com registro
const handleRegister = () => {
  console.log('Register:', registerForm)
  // Implementar lógica de registro
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