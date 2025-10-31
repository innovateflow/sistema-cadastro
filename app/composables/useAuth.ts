import type { User, SupabaseClient, AuthChangeEvent, Session } from '@supabase/supabase-js'

interface LoginCredentials {
  email: string
  password: string
}

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export const useAuth = () => {
  const { $supabase } = useNuxtApp() as any
  
  // Estado reativo
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Função de login
  const login = async (credentials: LoginCredentials) => {
    try {
      loading.value = true
      error.value = null
      
      const { data, error: authError } = await $supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      
      if (authError) {
        error.value = getErrorMessage(authError)
        return { success: false, error: error.value }
      }
      
      if (data.user) {
        user.value = data.user
        return { success: true, user: data.user }
      }
      
      return { success: false, error: 'Login falhou' }
      
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido'
      error.value = message
      return { success: false, error: message }
    } finally {
      loading.value = false
    }
  }
  
  // Função de logout
  const logout = async () => {
    try {
      loading.value = true
      error.value = null
      
      const { error: authError } = await $supabase.auth.signOut()
      
      if (authError) {
        error.value = getErrorMessage(authError)
        return { success: false, error: error.value }
      }
      
      user.value = null
      return { success: true }
      
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido'
      error.value = message
      return { success: false, error: message }
    } finally {
      loading.value = false
    }
  }
  
  // Verificar sessão atual
  const checkAuth = async () => {
    try {
      loading.value = true
      
      const { data: { session } } = await $supabase.auth.getSession()
      
      if (session?.user) {
        user.value = session.user
      }
      
    } catch (err) {
      console.error('Erro ao verificar autenticação:', err)
    } finally {
      loading.value = false
    }
  }
  
  // Função para traduzir mensagens de erro
  const getErrorMessage = (authError: any): string => {
    switch (authError.message) {
      case 'Invalid login credentials':
        return 'Email ou senha incorretos'
      case 'Email not confirmed':
        return 'Email ainda não confirmado'
      case 'Too many requests':
        return 'Muitas tentativas. Tente novamente mais tarde'
      default:
        return authError.message || 'Erro na autenticação'
    }
  }
  
  // Computed para verificar se está logado
  const isAuthenticated = computed(() => !!user.value)
  
  // Listener para mudanças na autenticação
  onMounted(() => {
    checkAuth()
    
    $supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      if (session?.user) {
        user.value = session.user
      } else {
        user.value = null
      }
    })
  })
  
  return {
    // Estado
    user: readonly(user),
    loading: readonly(loading),
    error: readonly(error),
    isAuthenticated,
    
    // Métodos
    login,
    logout,
    checkAuth
  }
}