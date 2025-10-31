// Middleware para proteger rotas autenticadas
export default defineNuxtRouteMiddleware(async () => {
  // Só executar no lado do cliente
  if (process.client) {
    const { isUserAuthenticated } = useAuth()
    
    try {
      const isAuthenticated = await isUserAuthenticated()
      
      // Se não está autenticado, redirecionar para login
      if (!isAuthenticated) {
        return navigateTo('/login')
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      return navigateTo('/login')
    }
  }
})