<template>
  <div class="min-h-screen bg-background-secondary flex items-center justify-center p-4">
    <div class="max-w-2xl w-full space-y-8">
      <!-- Header Principal -->
      <div class="text-center">
        <h1 class="text-5xl font-bold text-text-primary mb-4">
          Sistema de <span class="text-primary-300">Cadastro</span>
        </h1>
        <p class="text-xl text-text-secondary">
          Bem-vindo ao seu sistema SaaS moderno
        </p>
      </div>
      
      <!-- Card Principal -->
      <div class="bg-background-primary p-8 rounded-xl shadow-custom-lg border border-border-light">
        <h2 class="text-3xl font-semibold text-text-primary mb-6 text-center">
          🚀 Sistema Configurado
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <!-- Feature 1 -->
          <div class="p-4 bg-background-secondary rounded-lg border border-border-light">
            <h3 class="text-lg font-semibold text-text-primary mb-2">Nuxt 4 + TypeScript</h3>
            <p class="text-text-secondary text-sm">Framework moderno e performático</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="p-4 bg-background-secondary rounded-lg border border-border-light">
            <h3 class="text-lg font-semibold text-text-primary mb-2">Tailwind CSS</h3>
            <p class="text-text-secondary text-sm">Sistema de design personalizado</p>
          </div>
        </div>
        
        <!-- Botões de Ação -->
        <div class="space-y-4">
          <button class="w-full bg-primary-300 hover:bg-primary-400 text-secondary-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-primary hover:shadow-primary-lg transform hover:scale-105">
            🎯 Começar Agora
          </button>
          
          <button class="w-full bg-secondary-900 hover:bg-secondary-800 text-text-inverse font-medium py-3 px-6 rounded-lg transition-all duration-200 border border-secondary-700">
            📚 Ver Documentação
          </button>
          
          <div class="flex gap-4">
            <a href="/_tailwind/" class="flex-1 text-center bg-background-secondary hover:bg-background-tertiary text-text-accent font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-border-default">
              🎨 Tailwind Viewer
            </a>
            <button class="flex-1 bg-success-light hover:bg-success text-success-dark hover:text-text-inverse font-medium py-2 px-4 rounded-lg transition-all duration-200">
              ✅ Status OK
            </button>
          </div>
        </div>
      </div>

      <!-- Paleta de Cores Demo -->
      <div class="bg-background-primary p-6 rounded-xl shadow-custom border border-border-light">
        <h3 class="text-2xl font-semibold text-text-primary mb-4 text-center">
          🎨 Sistema de Cores
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Cores Primárias -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-text-secondary">Laranja #fdcb6e</p>
            <div class="h-12 bg-primary-300 rounded-lg shadow-sm border border-primary-400"></div>
            <div class="h-8 bg-primary-200 rounded"></div>
            <div class="h-6 bg-primary-500 rounded"></div>
          </div>
          
          <!-- Cores Secundárias -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-text-secondary">Preto #2d3436</p>
            <div class="h-12 bg-secondary-900 rounded-lg shadow-sm"></div>
            <div class="h-8 bg-secondary-700 rounded"></div>
            <div class="h-6 bg-secondary-500 rounded"></div>
          </div>
          
          <!-- Estados -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-text-secondary">Estados</p>
            <div class="h-4 bg-success rounded"></div>
            <div class="h-4 bg-warning rounded"></div>
            <div class="h-4 bg-error rounded"></div>
            <div class="h-4 bg-info rounded"></div>
          </div>
          
          <!-- Backgrounds -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-text-secondary">Backgrounds</p>
            <div class="h-4 bg-background-primary border border-border-light rounded"></div>
            <div class="h-4 bg-background-secondary rounded"></div>
            <div class="h-4 bg-background-tertiary rounded"></div>
            <div class="h-4 bg-background-dark rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Configuração da página
useHead({
  title: 'Sistema de Cadastro - Página Inicial',
  meta: [
    { name: 'description', content: 'Sistema SaaS de cadastro desenvolvido com Nuxt 3' }
  ]
})
</script>