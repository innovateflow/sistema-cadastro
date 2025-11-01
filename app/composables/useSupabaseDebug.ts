export const useSupabaseDebug = () => {
  const { $supabase } = useNuxtApp() as any

  const testConnection = async () => {
    try {
      console.log('🔄 Testando conexão com Supabase...')
      
      // Verificar configurações
      const config = useRuntimeConfig()
      console.log('⚙️ Configurações do runtime:', {
        supabaseUrl: config.public.supabaseUrl ? 'Configurado ✅' : 'Não configurado ❌',
        supabaseKey: config.public.supabaseKey ? 'Configurado ✅' : 'Não configurado ❌'
      })
      
      console.log('🔗 Supabase client:', $supabase)
      
      // Teste básico de conexão
      const { data, error } = await $supabase
        .from('funcionarios')
        .select('count', { count: 'exact', head: true })
      
      if (error) {
        console.error('❌ Erro na conexão:', error)
        console.error('❌ Detalhes completos do erro:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        return { success: false, error: error.message }
      }
      
      console.log('✅ Conexão com Supabase OK!')
      console.log(`📊 Total de funcionários na tabela: ${data}`)
      
      return { success: true, count: data }
    } catch (err) {
      console.error('❌ Erro inesperado:', err)
      return { success: false, error: 'Erro inesperado na conexão' }
    }
  }

  const testAuth = async () => {
    try {
      console.log('🔄 Testando autenticação...')
      
      const { data: { session } } = await $supabase.auth.getSession()
      
      if (session?.user) {
        console.log('✅ Usuário autenticado:', session.user.email)
        return { success: true, user: session.user }
      } else {
        console.log('⚠️ Nenhum usuário autenticado')
        return { success: false, error: 'Usuário não autenticado' }
      }
    } catch (err) {
      console.error('❌ Erro na verificação de autenticação:', err)
      return { success: false, error: 'Erro na verificação de autenticação' }
    }
  }

  return {
    testConnection,
    testAuth
  }
}