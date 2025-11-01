import Toast, { POSITION, useToast } from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  // Configurações básicas do toast
  const options = {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true
  }

  // Registrar o plugin
  nuxtApp.vueApp.use(Toast, options)

  // Disponibilizar o toast globalmente
  return {
    provide: {
      toast: useToast()
    }
  }
})