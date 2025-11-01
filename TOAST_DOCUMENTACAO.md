# Sistema de Toast - Documentação e Teste

## 📦 **Instalação Concluída**

### Biblioteca instalada:
- ✅ `vue-toastification@next` - Compatível com Vue 3 e Nuxt 4

### Arquivos criados:
- ✅ `app/plugins/toast.client.ts` - Plugin de configuração
- ✅ `app/composables/useNotification.ts` - Composable para uso
- ✅ `assets/css/main.css` - Estilos customizados
- ✅ `nuxt.config.ts` - Configuração atualizada

## 🎨 **Cores do Sistema Implementadas**

### Tipos de Toast:
- **Sucesso** 🟠 - `bg-primary-600` (Laranja do sistema)
- **Erro** 🔴 - `bg-red-600` 
- **Aviso** 🟡 - `bg-yellow-400`
- **Info** 🔵 - `bg-blue-600`

## 🚀 **Como Usar**

### 1. Importar o composable:
```typescript
const { notifications, showSuccess, showError } = useNotification()
```

### 2. Usar notificações pré-definidas:
```typescript
// Funcionários
notifications.funcionario.cadastrado()
notifications.funcionario.erroCarregar()

// Autenticação  
notifications.auth.loginSucesso()
notifications.auth.loginErro()

// Sistema
notifications.system.carregando()
```

### 3. Usar toasts personalizados:
```typescript
showSuccess('Operação realizada com sucesso!')
showError('Algo deu errado!')
showWarning('Atenção: verifique os dados')
showInfo('Informação importante')
```

## 🎯 **Exemplo de Teste**

Para testar, adicione isto em qualquer componente:

```vue
<template>
  <div>
    <button @click="testarToasts">Testar Toasts</button>
  </div>
</template>

<script setup>
const { showSuccess, showError, showWarning, showInfo } = useNotification()

const testarToasts = () => {
  showSuccess('Toast de sucesso!')
  setTimeout(() => showError('Toast de erro!'), 1000)
  setTimeout(() => showWarning('Toast de aviso!'), 2000)
  setTimeout(() => showInfo('Toast de info!'), 3000)
}
</script>
```

## ⚙️ **Configurações**

### Posicionamento: `TOP_RIGHT`
### Duração padrão:
- Sucesso: 4s
- Erro: 6s  
- Aviso: 5s
- Info: 4s

### Recursos habilitados:
- ✅ Clique para fechar
- ✅ Pausa ao hover
- ✅ Arrastar para fechar
- ✅ Máximo 5 toasts
- ✅ Barra de progresso
- ✅ Ícones

## 🔧 **Resolução de Problemas**

Se o `useNotification` não for reconhecido, reinicie o servidor:
```bash
npm run dev
```

O Nuxt 4 deve fazer o auto-import automaticamente.