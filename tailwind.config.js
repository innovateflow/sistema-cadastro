/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias - Laranja (#fdcb6e base)
        primary: {
          50: '#fef9f2',   // Laranja muito claro
          100: '#fef3e2',  // Laranja pastel
          200: '#fde4c4',  // Laranja claro
          300: '#fdcb6e',  // Laranja principal base ⭐
          400: '#fcb94d',  // Laranja médio
          500: '#f39c2b',  // Laranja vibrante
          600: '#e88308',  // Laranja escuro
          700: '#c26a06',  // Laranja mais escuro
          800: '#9d5405',  // Laranja muito escuro
          900: '#7c4404',  // Laranja marrom
          950: '#422202'   // Laranja extremamente escuro
        },
        
        // Cores secundárias - Preto/Cinza (#2d3436 base)
        secondary: {
          50: '#f6f7f8',   // Branco off-white
          100: '#e8ebec',  // Cinza muito claro
          200: '#d1d6d8',  // Cinza claro
          300: '#a9b1b5',  // Cinza médio claro
          400: '#7b858a',  // Cinza médio
          500: '#636c71',  // Cinza padrão
          600: '#555d61',  // Cinza escuro
          700: '#4a5053',  // Cinza mais escuro
          800: '#404447',  // Cinza muito escuro
          900: '#2d3436',  // Preto principal base ⭐
          950: '#1a1d1e'   // Preto absoluto
        },

        // Cores de background
        background: {
          primary: '#ffffff',    // Fundo principal branco
          secondary: '#f6f7f8',  // Fundo secundário cinza claro
          tertiary: '#e8ebec',   // Fundo terciário
          dark: '#2d3436',       // Fundo escuro (cor base)
          'dark-alt': '#404447'  // Fundo escuro alternativo
        },

        // Cores de texto
        text: {
          primary: '#2d3436',    // Texto principal (preto base)
          secondary: '#636c71',  // Texto secundário (cinza)
          tertiary: '#7b858a',   // Texto terciário (cinza claro)
          inverse: '#ffffff',    // Texto inverso (branco)
          accent: '#fdcb6e'      // Texto destaque (laranja base)
        },

        // Cores de estado/feedback
        success: {
          light: '#d4f4dd',
          DEFAULT: '#28a745',
          dark: '#1e7e34'
        },
        warning: {
          light: '#fff3cd',
          DEFAULT: '#ffc107',
          dark: '#d39e00'
        },
        error: {
          light: '#f5c6cb',
          DEFAULT: '#dc3545',
          dark: '#bd2130'
        },
        info: {
          light: '#d1ecf1',
          DEFAULT: '#17a2b8',
          dark: '#138496'
        },

        // Cores de borda
        border: {
          light: '#e8ebec',
          DEFAULT: '#d1d6d8',
          dark: '#7b858a'
        },

        // Cores de shadow/elevação
        shadow: {
          light: 'rgba(45, 52, 54, 0.05)',     // Shadow com preto base
          DEFAULT: 'rgba(45, 52, 54, 0.1)',    // Shadow padrão com preto base
          dark: 'rgba(45, 52, 54, 0.25)',      // Shadow escura com preto base
          colored: 'rgba(253, 203, 110, 0.15)' // Shadow com laranja base
        }
      },

      // Configurações de box-shadow personalizadas
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(45, 52, 54, 0.05)',
        'custom': '0 4px 6px -1px rgba(45, 52, 54, 0.1), 0 2px 4px -1px rgba(45, 52, 54, 0.06)',
        'custom-md': '0 10px 15px -3px rgba(45, 52, 54, 0.1), 0 4px 6px -2px rgba(45, 52, 54, 0.05)',
        'custom-lg': '0 20px 25px -5px rgba(45, 52, 54, 0.1), 0 10px 10px -5px rgba(45, 52, 54, 0.04)',
        'custom-xl': '0 25px 50px -12px rgba(45, 52, 54, 0.25)',
        'primary': '0 10px 15px -3px rgba(253, 203, 110, 0.2), 0 4px 6px -2px rgba(253, 203, 110, 0.1)',
        'primary-lg': '0 20px 25px -5px rgba(253, 203, 110, 0.2), 0 10px 10px -5px rgba(253, 203, 110, 0.1)'
      }
    },
  },
  plugins: [],
}