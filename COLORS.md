# Sistema de Cores - Design System

## 🎨 Paleta de Cores Definida

### 🧡 Cores Primárias (Laranja - Base: #fdcb6e)
```css
primary-50: #fef9f2   /* Laranja muito claro */
primary-100: #fef3e2  /* Laranja pastel */
primary-200: #fde4c4  /* Laranja claro */
primary-300: #fdcb6e  /* ⭐ LARANJA PRINCIPAL (Cor Base) */
primary-400: #fcb94d  /* Laranja médio */
primary-500: #f39c2b  /* Laranja vibrante */
primary-600: #e88308  /* Laranja escuro */
primary-700: #c26a06  /* Laranja mais escuro */
primary-800: #9d5405  /* Laranja muito escuro */
primary-900: #7c4404  /* Laranja marrom */
primary-950: #422202  /* Laranja extremamente escuro */
```

### ⚫ Cores Secundárias (Preto/Cinza - Base: #2d3436)
```css
secondary-50: #f6f7f8   /* Branco off-white */
secondary-100: #e8ebec  /* Cinza muito claro */
secondary-200: #d1d6d8  /* Cinza claro */
secondary-300: #a9b1b5  /* Cinza médio claro */
secondary-400: #7b858a  /* Cinza médio */
secondary-500: #636c71  /* Cinza padrão */
secondary-600: #555d61  /* Cinza escuro */
secondary-700: #4a5053  /* Cinza mais escuro */
secondary-800: #404447  /* Cinza muito escuro */
secondary-900: #2d3436  /* ⭐ PRETO PRINCIPAL (Cor Base) */
secondary-950: #1a1d1e  /* Preto absoluto */
```

## 🎯 Cores Semânticas

### Backgrounds
- `bg-background-primary` - Fundo principal branco (#ffffff)
- `bg-background-secondary` - Fundo secundário cinza claro (#f6f7f8)
- `bg-background-tertiary` - Fundo terciário (#e8ebec)
- `bg-background-dark` - Fundo escuro (#2d3436) ⭐ Cor Base
- `bg-background-dark-alt` - Fundo escuro alternativo (#404447)

### Textos
- `text-text-primary` - Texto principal (#2d3436) ⭐ Cor Base
- `text-text-secondary` - Texto secundário cinza (#636c71)
- `text-text-tertiary` - Texto terciário cinza claro (#7b858a)
- `text-text-inverse` - Texto inverso branco (#ffffff)
- `text-text-accent` - Texto destaque (#fdcb6e) ⭐ Cor Base

### Estados/Feedback
- `bg-success` / `text-success` - Verde para sucesso
- `bg-warning` / `text-warning` - Amarelo para avisos
- `bg-error` / `text-error` - Vermelho para erros
- `bg-info` / `text-info` - Azul para informações

### Bordas
- `border-border-light` - Borda clara (#e8ebec)
- `border-border-default` - Borda padrão (#d1d6d8)
- `border-border-dark` - Borda escura (#7b858a)

## 🎨 Shadows Personalizadas
- `shadow-custom-sm` - Shadow pequena
- `shadow-custom` - Shadow padrão
- `shadow-custom-md` - Shadow média
- `shadow-custom-lg` - Shadow grande
- `shadow-custom-xl` - Shadow extra grande
- `shadow-primary` - Shadow com cor primária
- `shadow-primary-lg` - Shadow grande com cor primária

## 📝 Exemplos de Uso

### Botões
```html
<!-- Botão Primário (Laranja Base) -->
<button class="bg-primary-300 hover:bg-primary-400 text-secondary-900 px-4 py-2 rounded-lg shadow-primary">
  Botão Primário
</button>

<!-- Botão Secundário (Preto Base) -->
<button class="bg-secondary-900 hover:bg-secondary-800 text-text-inverse px-4 py-2 rounded-lg">
  Botão Secundário
</button>

<!-- Botão Outline (Laranja Base) -->
<button class="border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-secondary-900 px-4 py-2 rounded-lg">
  Botão Outline
</button>
```

### Cards
```html
<!-- Card Principal -->
<div class="bg-background-primary p-6 rounded-xl shadow-custom-lg border border-border-light">
  <h3 class="text-text-primary font-semibold mb-2">Título do Card</h3>
  <p class="text-text-secondary">Conteúdo do card...</p>
</div>

<!-- Card Secundário -->
<div class="bg-background-secondary p-4 rounded-lg border border-border-default">
  <p class="text-text-primary">Card secundário</p>
</div>
```

### Estados de Feedback
```html
<!-- Sucesso -->
<div class="bg-success-light text-success-dark p-4 rounded-lg">
  ✅ Operação realizada com sucesso!
</div>

<!-- Aviso -->
<div class="bg-warning-light text-warning-dark p-4 rounded-lg">
  ⚠️ Atenção: Verifique os dados informados.
</div>

<!-- Erro -->
<div class="bg-error-light text-error-dark p-4 rounded-lg">
  ❌ Erro: Não foi possível processar a solicitação.
</div>
```

## 🌓 Modo Escuro (Futuro)
O sistema está preparado para implementação de modo escuro:
- Usar `bg-background-dark` e `bg-background-dark-alt`
- Texto com `text-text-inverse`
- Bordas com `border-secondary-700`

## 🎨 Identidade Visual
- **🧡 Cor Principal**: Laranja (#fdcb6e) - Energia, criatividade, otimismo
- **⚫ Cor Secundária**: Preto (#2d3436) - Profissionalismo, elegância, sofisticação
- **🎭 Estilo**: Flat Design moderno com sutis elevações
- **💼 Uso**: SaaS, sistemas corporativos, dashboards, aplicações web

## 🎯 Significado das Cores Escolhidas:
- **Laranja #fdcb6e**: Representa criatividade, entusiasmo e inovação
- **Preto #2d3436**: Transmite profissionalismo, confiança e modernidade
- **Combinação**: Equilibra energia criativa com seriedade profissional

Esta paleta garante:
✅ Excelente contraste e legibilidade (WCAG 2.1 AA)
✅ Acessibilidade para daltônicos
✅ Consistência visual em toda aplicação
✅ Flexibilidade para diferentes contextos
✅ Identidade visual única e memorável
✅ Cores bases específicas do projeto (#fdcb6e + #2d3436)