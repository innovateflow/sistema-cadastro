// Middleware para proteger rotas autenticadas
// @ts-ignore - Tipos do Nuxt são injetados em tempo de execução
export default defineNuxtRouteMiddleware(async () => {
  // Só executar no lado do cliente
  // @ts-ignore
  if (process.client) {
    // @ts-ignore
    const { $supabase } = useNuxtApp()
    
    try {
      const { data: { session } } = await $supabase.auth.getSession()
      
      // Se não há sessão, redirecionar para login
      if (!session?.user) {
        // @ts-ignore
        return navigateTo('/login')
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      // @ts-ignore
      return navigateTo('/login')
    }
  }
})