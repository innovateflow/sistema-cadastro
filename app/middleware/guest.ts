// Middleware para redirecionar usuários já autenticados
// @ts-ignore - Tipos do Nuxt são injetados em tempo de execução
export default defineNuxtRouteMiddleware(async () => {
  // Só executar no lado do cliente
  // @ts-ignore
  if (process.client) {
    // @ts-ignore
    const { $supabase } = useNuxtApp()
    
    try {
      const { data: { session } } = await $supabase.auth.getSession()
      
      // Se há sessão, redirecionar para a página inicial
      if (session?.user) {
        // @ts-ignore
        return navigateTo('/')
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
    }
  }
})