# Layouts - Estrutura Nuxt 4

## 📁 Estrutura de Layouts Implementada

### ✅ **Estrutura Padrão do Nuxt 4:**
```
app/
├── layouts/
│   └── default.vue     # ✅ Layout padrão global
├── pages/
│   ├── index.vue       # Usa default.vue automaticamente
│   └── novocadastro.vue # Usa default.vue automaticamente
├── components/
│   ├── Header.vue      # Componente de navegação
│   └── Footer.vue      # Componente de rodapé
└── app.vue             # Entry point limpo
```

## 🎯 **Como Funciona:**

### **1. Layout Padrão (`app/layouts/default.vue`)**
- ✅ **Auto-aplicado**: Todas as páginas usam automaticamente
- ✅ **Estrutura**: Header + `<slot />` + Footer
- ✅ **Flexível**: Pode ser sobrescrito por página específica

### **2. App.vue (Entry Point)**
- ✅ **Limpo**: Apenas `<NuxtPage />` e `<NuxtRouteAnnouncer />`
- ✅ **Responsabilidade**: Ponte entre layouts e páginas
- ✅ **Padrão Nuxt**: Seguindo convenções oficiais

### **3. Páginas**
- ✅ **Foco no conteúdo**: Apenas conteúdo específico da página
- ✅ **Layout automático**: Sem necessidade de importar Header/Footer
- ✅ **Flexibilidade**: Podem especificar layout customizado se necessário

## 🔄 **Fluxo de Renderização:**

```
1. app.vue (entry point)
   ↓
2. layouts/default.vue (layout wrapper)
   ↓ 
3. pages/[page].vue (conteúdo específico no <slot />)
```

## 📝 **Convenções Seguidas:**

### ✅ **Nomenclatura Padrão:**
- `layouts/default.vue` - Layout padrão (convenção Nuxt)
- `components/Header.vue` - Componente de cabeçalho (PascalCase)
- `components/Footer.vue` - Componente de rodapé (PascalCase)

### ✅ **Estrutura de Arquivos:**
```
app/
├── app.vue              # Entry point do Nuxt 4
├── layouts/             # Pasta de layouts
│   └── default.vue      # Layout padrão global
├── pages/               # Páginas da aplicação
├── components/          # Componentes reutilizáveis
└── ...
```

## 🚀 **Vantagens da Implementação:**

### **1. Padrão Oficial Nuxt 4:**
- ✅ Seguindo convenções recomendadas
- ✅ Melhor manutenibilidade
- ✅ Compatibilidade garantida

### **2. Flexibilidade:**
```vue
<!-- Para usar layout customizado em uma página -->
<script setup>
definePageMeta({
  layout: 'admin' // usaria layouts/admin.vue
})
</script>
```

### **3. Separação de Responsabilidades:**
- **app.vue**: Entry point
- **layouts/default.vue**: Estrutura global (Header + Footer)
- **pages/**: Conteúdo específico
- **components/**: Elementos reutilizáveis

## 🎨 **Layout Atual (default.vue):**

### **Estrutura:**
```vue
<template>
  <div class="min-h-screen flex flex-col">
    <Header />                <!-- Navegação global -->
    <main class="flex-1">
      <slot />                <!-- Conteúdo da página -->
    </main>
    <Footer />                <!-- Rodapé global -->
  </div>
</template>
```

### **Funcionalidades:**
- ✅ **Header**: Menu de navegação responsivo
- ✅ **Main**: Área flexível para conteúdo da página
- ✅ **Footer**: Rodapé com informações e links
- ✅ **Responsivo**: Layout adapta-se a diferentes telas

## 📚 **Documentação Oficial:**
- [Nuxt 4 Layouts](https://nuxt.com/docs/guide/directory-structure/layouts)
- [App.vue Structure](https://nuxt.com/docs/guide/directory-structure/app)

## 🔧 **Próximos Passos Possíveis:**

### **Layouts Adicionais:**
```
layouts/
├── default.vue    # Layout padrão (atual)
├── admin.vue      # Layout para área administrativa
├── auth.vue       # Layout para login/registro
└── minimal.vue    # Layout limpo sem header/footer
```

**A estrutura agora está 100% compatível com as convenções do Nuxt 4!** ✅