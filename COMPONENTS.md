# Componentes - Design System

## 🧩 Componentes Criados

### 1. Button Component (`/app/components/Button.vue`)

Componente de botão reutilizável com múltiplas variantes e tamanhos.

#### Props:
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `disabled`: boolean (default: false)
- `fullWidth`: boolean (default: false)

#### Eventos:
- `@click`: Emitido quando o botão é clicado

#### Exemplos de Uso:
```vue
<!-- Botão Primário -->
<Button variant="primary" @click="handleClick">
  Botão Primário
</Button>

<!-- Botão Secundário Grande -->
<Button variant="secondary" size="lg" full-width>
  Botão Largo
</Button>

<!-- Botão Outline Desabilitado -->
<Button variant="outline" disabled>
  Desabilitado
</Button>

<!-- Botão Submit em Formulário -->
<Button type="submit" variant="primary">
  Enviar
</Button>
```

#### Variantes Disponíveis:
- **Primary**: Laranja (#fdcb6e) - Para ações principais
- **Secondary**: Preto (#2d3436) - Para ações secundárias
- **Outline**: Borda laranja com fundo transparente
- **Ghost**: Sem fundo, apenas hover

---

### 2. Input Component (`/app/components/Input.vue`)

Componente de input completo com label, validação e estados.

#### Props:
- `modelValue`: string | number - Valor do input (v-model)
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' (default: 'text')
- `label`: string - Label do campo
- `placeholder`: string - Placeholder do input
- `helperText`: string - Texto de ajuda
- `errorMessage`: string - Mensagem de erro
- `disabled`: boolean (default: false)
- `required`: boolean (default: false)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')

#### Eventos:
- `@update:modelValue`: Emitido quando o valor muda (v-model)
- `@blur`: Emitido quando perde o foco
- `@focus`: Emitido quando recebe o foco

#### Exemplos de Uso:
```vue
<!-- Input Básico -->
<Input 
  v-model="form.name"
  label="Nome"
  placeholder="Digite seu nome"
/>

<!-- Input com Validação -->
<Input 
  v-model="form.email"
  type="email"
  label="E-mail"
  placeholder="seu@email.com"
  :required="true"
  :error-message="emailError"
/>

<!-- Input com Helper Text -->
<Input 
  v-model="form.phone"
  type="tel"
  label="Telefone"
  placeholder="(11) 99999-9999"
  helper-text="Formato: (xx) xxxxx-xxxx"
/>

<!-- Input Desabilitado -->
<Input 
  v-model="form.company"
  label="Empresa"
  disabled
  helper-text="Campo não editável"
/>
```

#### Estados do Input:
- **Normal**: Borda cinza, foco em laranja
- **Error**: Borda vermelha, ícone de erro
- **Disabled**: Fundo cinza, não editável
- **Required**: Asterisco vermelho no label

---

## 🎨 Integração com Design System

### Cores Utilizadas:
- **Primary (Laranja #fdcb6e)**: Botões primários, foco dos inputs
- **Secondary (Preto #2d3436)**: Botões secundários, texto principal
- **Background**: Fundos dos inputs e hover states
- **Border**: Bordas dos inputs e estados
- **Text**: Hierarquia de texto (primary, secondary, tertiary)
- **Error/Success**: Estados de validação

### Consistência Visual:
✅ Todos os componentes seguem o mesmo padrão de cores
✅ Transições suaves (duration-200)
✅ Border radius consistente (rounded-lg)
✅ Spacing padronizado
✅ Estados de hover e focus bem definidos
✅ Acessibilidade (focus-ring, contrast)

---

## 🚀 Auto-importação (Nuxt 4)

Os componentes são automaticamente importados pelo Nuxt 4, basta usar:

```vue
<template>
  <div>
    <!-- Não precisa importar explicitamente -->
    <Button variant="primary">Clique aqui</Button>
    <Input v-model="value" label="Campo" />
  </div>
</template>

<script setup>
const value = ref('')
</script>
```

## 📝 Convenções Seguidas:

### Nomenclatura (PascalCase):
- ✅ `Button.vue` (não `button.vue` ou `Button-component.vue`)
- ✅ `Input.vue` (não `input.vue` ou `InputField.vue`)

### Estrutura de Arquivos:
```
app/
└── components/
    ├── Button.vue
    └── Input.vue
```

### TypeScript:
- ✅ Props tipadas com interfaces
- ✅ Eventos tipados
- ✅ Computed properties tipadas
- ✅ Suporte completo ao v-model

Estes componentes formam a base do design system e podem ser facilmente expandidos e reutilizados em todo o projeto.