<template>
  <button 
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

interface Emits {
  click: [event: MouseEvent]
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  fullWidth: false
})

const emit = defineEmits<Emits>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  const base = [
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  ]

  // Variant styles
  const variantClasses = {
    primary: 'bg-primary-300 hover:bg-primary-400 text-secondary-900 shadow-primary hover:shadow-primary-lg focus:ring-primary-400',
    secondary: 'bg-secondary-900 hover:bg-secondary-800 text-text-inverse border border-secondary-700 focus:ring-secondary-600',
    outline: 'border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-secondary-900 focus:ring-primary-400',
    ghost: 'text-text-primary hover:bg-background-secondary focus:ring-secondary-400'
  }

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  // Disabled styles
  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none'

  // Width styles
  const widthClasses = props.fullWidth ? 'w-full' : ''

  return [
    ...base,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.disabled ? disabledClasses : '',
    widthClasses
  ].filter(Boolean).join(' ')
})
</script>