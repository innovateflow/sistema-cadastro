<template>
  <!-- Overlay do Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click="handleOverlayClick"
      >
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

        <!-- Modal container -->
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-if="modelValue"
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              @click.stop
            >
              <!-- Cabeçalho do Modal -->
              <div class="sm:flex sm:items-start">
                <!-- Ícone -->
                <div
                  v-if="icon"
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
                  :class="iconClasses"
                >
                  <component :is="icon" class="h-6 w-6" :class="iconColorClasses" />
                </div>

                <!-- Conteúdo -->
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <!-- Título -->
                  <h3
                    v-if="title"
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {{ title }}
                  </h3>

                  <!-- Slot para conteúdo customizado -->
                  <div class="mt-2">
                    <slot>
                      <p v-if="message" class="text-sm text-gray-500">
                        {{ message }}
                      </p>
                    </slot>
                  </div>
                </div>
              </div>

              <!-- Botões de ação -->
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:gap-3">
                <!-- Slot para ações customizadas -->
                <slot name="actions">
                  <!-- Botão principal (confirmar/ok) -->
                  <button
                    v-if="showConfirm"
                    type="button"
                    :disabled="loading"
                    class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto transition-colors"
                    :class="confirmButtonClasses"
                    @click="$emit('confirm')"
                  >
                    <svg
                      v-if="loading"
                      class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ loading ? loadingText : confirmText }}
                  </button>

                  <!-- Botão secundário (cancelar) -->
                  <button
                    v-if="showCancel"
                    type="button"
                    :disabled="loading"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto transition-colors disabled:opacity-50"
                    @click="$emit('cancel')"
                  >
                    {{ cancelText }}
                  </button>
                </slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  icon: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: 'info', // info, success, warning, danger
    validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value)
  },
  showConfirm: {
    type: Boolean,
    default: true
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: 'Confirmar'
  },
  cancelText: {
    type: String,
    default: 'Cancelar'
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Processando...'
  },
  closeOnOverlay: {
    type: Boolean,
    default: true
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel', 'close'])

// Computed para classes do ícone baseado no tipo
const iconClasses = computed(() => {
  const classes = {
    info: 'bg-blue-100',
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    danger: 'bg-red-100'
  }
  return classes[props.type] || classes.info
})

const iconColorClasses = computed(() => {
  const classes = {
    info: 'text-blue-600',
    success: 'text-green-600', 
    warning: 'text-yellow-600',
    danger: 'text-red-600'
  }
  return classes[props.type] || classes.info
})

const confirmButtonClasses = computed(() => {
  const classes = {
    info: 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600',
    success: 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600',
    warning: 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600',
    danger: 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
  }
  return `${classes[props.type] || classes.info} ${props.loading ? 'opacity-75 cursor-not-allowed' : ''}`
})

// Função para lidar com clique no overlay
const handleOverlayClick = () => {
  if (props.closeOnOverlay && !props.loading) {
    emit('update:modelValue', false)
    emit('close')
  }
}

// Fechar modal com ESC
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && props.modelValue && !props.loading) {
      emit('update:modelValue', false)
      emit('close')
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})

// Ícone padrão baseado no tipo
const defaultIcons = {
  info: 'InformationCircleIcon',
  success: 'CheckCircleIcon', 
  warning: 'ExclamationTriangleIcon',
  danger: 'ExclamationTriangleIcon'
}

// Se não foi fornecido um ícone, usar o padrão do tipo
const iconComponent = computed(() => {
  if (props.icon) return props.icon
  
  // Retornar um componente SVG baseado no tipo
  const iconName = defaultIcons[props.type]
  
  // Componentes de ícone inline
  const icons = {
    InformationCircleIcon: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round', 
        'stroke-width': '2',
        d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ]),
    CheckCircleIcon: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2', 
        d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ]),
    ExclamationTriangleIcon: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
      })
    ])
  }
  
  return icons[iconName] || icons.InformationCircleIcon
})
</script>

<style scoped>
/* Garantir que as transições funcionem corretamente */
.duration-300 {
  transition-duration: 300ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
</style>