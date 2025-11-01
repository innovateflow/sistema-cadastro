<template>
  <div class="relative" ref="dropdownRef">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <!-- Botão do dropdown -->
    <button
      :id="id"
      type="button"
      @click="toggleDropdown"
      :class="[
        'relative w-full cursor-pointer rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-sm transition-colors',
        isOpen 
          ? 'border-primary-500 ring-1 ring-primary-500 focus:outline-none' 
          : 'border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500',
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400'
      ]"
      :disabled="disabled"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
    >
      <span class="block truncate" :class="selectedValue ? 'text-gray-900' : 'text-gray-500'">
        {{ selectedValue || placeholder }}
      </span>
      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg 
          class="h-5 w-5 text-gray-400 transition-transform duration-200" 
          :class="{ 'rotate-180': isOpen }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>

    <!-- Lista de opções -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-show="isOpen"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="listbox"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          :class="[
            'relative cursor-pointer select-none py-2 pl-3 pr-9 transition-colors',
            selectedValue === option
              ? 'bg-primary-600 text-white'
              : 'text-gray-900 hover:bg-primary-50'
          ]"
          role="option"
          :aria-selected="selectedValue === option"
        >
          <span class="block truncate" :class="selectedValue === option ? 'font-semibold' : 'font-normal'">
            {{ option }}
          </span>
          
          <!-- Ícone de selecionado -->
          <span 
            v-if="selectedValue === option" 
            class="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | null
  options: string[]
  placeholder?: string
  label?: string
  id?: string
  required?: boolean
  disabled?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string | null): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Selecione uma opção',
  id: 'dropdown',
  required: false,
  disabled: false
})

const emit = defineEmits<Emits>()

// Estado do componente
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

// Valor selecionado
const selectedValue = computed(() => props.modelValue)

// Alternar dropdown
const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

// Selecionar opção
const selectOption = (option: string) => {
  emit('update:modelValue', option)
  isOpen.value = false
}

// Fechar dropdown ao clicar fora
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// Fechar dropdown com ESC
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>