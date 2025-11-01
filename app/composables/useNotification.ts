export const useNotification = () => {
  // Funções básicas que só funcionam no cliente
  const showSuccess = (message: string) => {
    if (process.client) {
      try {
        const { $toast } = useNuxtApp()
        if ($toast) {
          $toast.success(message, { timeout: 4000 })
        } else {
          alert(`✅ ${message}`)
        }
      } catch (error) {
        console.error('Erro ao mostrar toast:', error)
        alert(`✅ ${message}`)
      }
    }
  }

  const showError = (message: string) => {
    if (process.client) {
      try {
        const { $toast } = useNuxtApp()
        if ($toast) {
          $toast.error(message, { timeout: 6000 })
        } else {
          alert(`❌ ${message}`)
        }
      } catch (error) {
        console.error('Erro ao mostrar toast:', error)
        alert(`❌ ${message}`)
      }
    }
  }

  const showWarning = (message: string) => {
    if (process.client) {
      try {
        const { $toast } = useNuxtApp()
        if ($toast) {
          $toast.warning(message, { timeout: 5000 })
        } else {
          alert(`⚠️ ${message}`)
        }
      } catch (error) {
        console.error('Erro ao mostrar toast:', error)
        alert(`⚠️ ${message}`)
      }
    }
  }

  const showInfo = (message: string) => {
    if (process.client) {
      try {
        const { $toast } = useNuxtApp()
        if ($toast) {
          $toast.info(message, { timeout: 4000 })
        } else {
          alert(`ℹ️ ${message}`)
        }
      } catch (error) {
        console.error('Erro ao mostrar toast:', error)
        alert(`ℹ️ ${message}`)
      }
    }
  }

  // Notificações pré-definidas
  const notifications = {
    funcionario: {
      cadastrado: () => showSuccess('Funcionário cadastrado com sucesso! 🎉'),
      atualizado: () => showSuccess('Funcionário atualizado com sucesso! ✅'),
      excluido: () => showSuccess('Funcionário excluído com sucesso! 🗑️'),
      erroCarregar: () => showError('Erro ao carregar funcionários. Tente novamente.'),
      erroCadastrar: () => showError('Erro ao cadastrar funcionário. Verifique os dados.'),
      erroAtualizar: () => showError('Erro ao atualizar funcionário. Tente novamente.'),
      erroExcluir: () => showError('Erro ao excluir funcionário. Tente novamente.'),
      dadosInvalidos: () => showWarning('Verifique se todos os campos obrigatórios estão preenchidos.')
    },
    
    auth: {
      loginSucesso: () => showSuccess('Login realizado com sucesso! 👋'),
      loginErro: () => showError('Credenciais inválidas. Verifique e-mail e senha.'),
      logoutSucesso: () => showInfo('Logout realizado com sucesso. Até logo! 👋'),
    },

    system: {
      carregando: () => showInfo('Carregando dados...'),
      semConexao: () => showError('Sem conexão. Verifique sua internet.'),
      erroInesperado: () => showError('Erro inesperado. Tente recarregar a página.')
    }
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    notifications
  }
}