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
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />

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
interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}

interface Emits {
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false,
  size: 'md'
})

const emit = defineEmits<Emits>()

// Generate unique ID for input
const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)

// Check if input has error
const hasError = computed(() => !!props.errorMessage)

// Handle input events
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

// Computed classes for input styling
const inputClasses = computed(() => {
  const base = [
    'block w-full rounded-lg border transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'placeholder:text-text-tertiary'
  ]

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  }

  // State styles
  const stateClasses = hasError.value
    ? 'border-error text-error focus:border-error focus:ring-error'
    : 'border-border-default text-text-primary focus:border-primary-300 focus:ring-primary-300'

  // Disabled styles
  const disabledClasses = props.disabled
    ? 'bg-background-tertiary text-text-tertiary cursor-not-allowed opacity-50'
    : 'bg-background-primary hover:border-border-dark'

  return [
    ...base,
    sizeClasses[props.size],
    stateClasses,
    disabledClasses
  ].filter(Boolean).join(' ')
})
</script>