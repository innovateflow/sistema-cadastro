// Middleware para redirecionar usuários já autenticados
export default defineNuxtRouteMiddleware(async () => {
  // Só executar no lado do cliente
  if (process.client) {
    const { isUserAuthenticated } = useAuth()
    
    try {
      const isAuthenticated = await isUserAuthenticated()
      
      // Se está autenticado, redirecionar para a página inicial
      if (isAuthenticated) {
        return navigateTo('/')
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
    }
  }
})