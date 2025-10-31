<template>
  <div class="w-full">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId"
      class="block text-sm font-medium text-text-primary mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1">*</span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Input Field -->
      <input
        :id="inputId"
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <!-- Toggle Password Visibility Button -->
      <button
        type="button"
        @click="togglePasswordVisibility"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-text-tertiary hover:text-text-secondary transition-colors duration-200"
        :class="{ 'pr-10': hasError }"
      >
        <svg 
          v-if="showPassword" 
          class="h-5 w-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <!-- Eye Slash (Hide) Icon -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
        </svg>
        <svg 
          v-else 
          class="h-5 w-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <!-- Eye (Show) Icon -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </button>

      <!-- Error Icon -->
      <div 
        v-if="hasError"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg class="h-5 w-5 text-error" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Helper Text / Error Message -->
    <div v-if="helperText || errorMessage" class="mt-1">
      <p 
        v-if="errorMessage" 
        class="text-sm text-error"
      >
        {{ errorMessage }}
      </p>
      <p 
        v-else-if="helperText" 
        class="text-sm text-text-tertiary"
      >
        {{ helperText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Interface para as props
interface PasswordInputProps {
  modelValue: string
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  required?: boolean
  id?: string
}

// Interface para os eventos
interface PasswordInputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
  (e: 'focus'): void
}

// Props
const props = withDefaults(defineProps<PasswordInputProps>(), {
  label: '',
  placeholder: '',
  helperText: '',
  errorMessage: '',
  disabled: false,
  required: false,
  id: ''
})

// Emits
const emit = defineEmits<PasswordInputEmits>()

// Estado interno
const showPassword = ref(false)
const isFocused = ref(false)

// ID único para o input
const inputId = computed(() => {
  return props.id || `password-input-${Math.random().toString(36).substr(2, 9)}`
})

// Computed para verificar se há erro
const hasError = computed(() => {
  return !!props.errorMessage
})

// Classes dinâmicas do input
const inputClasses = computed(() => {
  const baseClasses = [
    'w-full',
    'px-3',
    'py-2.5',
    'pr-10', // Espaço para o botão de toggle
    'border',
    'rounded-lg',
    'text-text-primary',
    'placeholder-text-tertiary',
    'focus:outline-none',
    'focus:ring-2',
    'transition-all',
    'duration-200'
  ]

  // Estados de erro
  if (hasError.value) {
    baseClasses.push(
      'border-error',
      'focus:border-error',
      'focus:ring-error/20'
    )
  } else if (isFocused.value) {
    // Estado de foco
    baseClasses.push(
      'border-primary-300',
      'focus:border-primary-300',
      'focus:ring-primary-300/20'
    )
  } else {
    // Estado normal
    baseClasses.push(
      'border-border-light',
      'focus:border-primary-300',
      'focus:ring-primary-300/20'
    )
  }

  // Estado desabilitado
  if (props.disabled) {
    baseClasses.push(
      'bg-background-tertiary',
      'text-text-tertiary',
      'cursor-not-allowed'
    )
  } else {
    baseClasses.push('bg-background-primary')
  }

  return baseClasses.join(' ')
})

// Função para alternar visibilidade da senha
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// Handlers de eventos
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleBlur = () => {
  isFocused.value = false
  emit('blur')
}

const handleFocus = () => {
  isFocused.value = true
  emit('focus')
}
</script>