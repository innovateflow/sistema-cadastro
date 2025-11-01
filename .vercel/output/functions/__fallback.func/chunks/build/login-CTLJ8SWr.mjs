import { mergeProps, defineComponent, ref, reactive, unref, withCtx, createTextVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './Button-DsrE9eWI.mjs';
import { u as useAuth } from './useAuth-BE0wpMpS.mjs';
import { b as useRouter } from './server.mjs';
import { u as useHead } from './composables-DoGmAY84.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    type: { default: "text" },
    label: {},
    placeholder: {},
    helperText: {},
    errorMessage: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { default: "md" }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`);
    const hasError = computed(() => !!props.errorMessage);
    const inputClasses = computed(() => {
      const base = [
        "block w-full rounded-lg border transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-1",
        "placeholder:text-text-tertiary"
      ];
      const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-4 py-3 text-lg"
      };
      const stateClasses = hasError.value ? "border-error text-error focus:border-error focus:ring-error" : "border-border-default text-text-primary focus:border-primary-300 focus:ring-primary-300";
      const disabledClasses = props.disabled ? "bg-background-tertiary text-text-tertiary cursor-not-allowed opacity-50" : "bg-background-primary hover:border-border-dark";
      return [
        ...base,
        sizeClasses[props.size],
        stateClasses,
        disabledClasses
      ].filter(Boolean).join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", unref(inputId))} class="block text-sm font-medium text-text-primary mb-1">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-error ml-1">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttr("id", unref(inputId))}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass(unref(inputClasses))}">`);
      if (unref(hasError)) {
        _push(`<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-error" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.helperText || __props.errorMessage) {
        _push(`<div class="mt-1">`);
        if (__props.errorMessage) {
          _push(`<p class="text-sm text-error">${ssrInterpolate(__props.errorMessage)}</p>`);
        } else if (__props.helperText) {
          _push(`<p class="text-sm text-text-tertiary">${ssrInterpolate(__props.helperText)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "Input" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PasswordInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    label: { default: "" },
    placeholder: { default: "" },
    helperText: { default: "" },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    id: { default: "" }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showPassword = ref(false);
    const isFocused = ref(false);
    const inputId = computed(() => {
      return props.id || `password-input-${Math.random().toString(36).substr(2, 9)}`;
    });
    const hasError = computed(() => {
      return !!props.errorMessage;
    });
    const inputClasses = computed(() => {
      const baseClasses = [
        "w-full",
        "px-3",
        "py-2.5",
        "pr-10",
        // Espaço para o botão de toggle
        "border",
        "rounded-lg",
        "text-text-primary",
        "placeholder-text-tertiary",
        "focus:outline-none",
        "focus:ring-2",
        "transition-all",
        "duration-200"
      ];
      if (hasError.value) {
        baseClasses.push(
          "border-error",
          "focus:border-error",
          "focus:ring-error/20"
        );
      } else if (isFocused.value) {
        baseClasses.push(
          "border-primary-300",
          "focus:border-primary-300",
          "focus:ring-primary-300/20"
        );
      } else {
        baseClasses.push(
          "border-border-light",
          "focus:border-primary-300",
          "focus:ring-primary-300/20"
        );
      }
      if (props.disabled) {
        baseClasses.push(
          "bg-background-tertiary",
          "text-text-tertiary",
          "cursor-not-allowed"
        );
      } else {
        baseClasses.push("bg-background-primary");
      }
      return baseClasses.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", unref(inputId))} class="block text-sm font-medium text-text-primary mb-1">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-error ml-1">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttr("id", unref(inputId))}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass(unref(inputClasses))}"><button type="button" class="${ssrRenderClass([{ "pr-10": unref(hasError) }, "absolute inset-y-0 right-0 pr-3 flex items-center text-text-tertiary hover:text-text-secondary transition-colors duration-200"])}">`);
      if (unref(showPassword)) {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`);
      }
      _push(`</button>`);
      if (unref(hasError)) {
        _push(`<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-error" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.helperText || __props.errorMessage) {
        _push(`<div class="mt-1">`);
        if (__props.errorMessage) {
          _push(`<p class="text-sm text-error">${ssrInterpolate(__props.errorMessage)}</p>`);
        } else if (__props.helperText) {
          _push(`<p class="text-sm text-text-tertiary">${ssrInterpolate(__props.helperText)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "PasswordInput" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  props: {
    initialTab: { default: "login" }
  },
  setup(__props) {
    const { loading } = useAuth();
    useRouter();
    const activeTab = ref("login");
    const loginError = ref(null);
    const loginSuccess = ref(false);
    const registerError = ref(null);
    const registerSuccess = ref(false);
    const registerMessage = ref(null);
    const loginForm = reactive({
      email: "",
      password: ""
    });
    const registerForm = reactive({
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = __nuxt_component_0$1;
      const _component_PasswordInput = __nuxt_component_1;
      const _component_Button = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background-primary rounded-xl shadow-custom-lg border border-border-light p-8 w-full max-w-md mx-auto" }, _attrs))}><div class="text-center mb-8"><h1 class="text-3xl font-bold text-text-primary mb-2"> Tarini <span class="text-primary-300">Cadastro</span></h1><p class="text-text-secondary">${ssrInterpolate(unref(activeTab) === "login" ? "Entre com suas credenciais de acesso" : "Crie suas credenciais de acesso")}</p></div><div class="flex mb-6 bg-background-secondary rounded-lg p-1"><button class="${ssrRenderClass([
        "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200",
        unref(activeTab) === "login" ? "bg-background-primary text-text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"
      ])}"> Entrar </button><button class="${ssrRenderClass([
        "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200",
        unref(activeTab) === "register" ? "bg-background-primary text-text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"
      ])}"> Registrar-se </button></div>`);
      if (unref(activeTab) === "login") {
        _push(`<form class="space-y-4">`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(loginForm).email,
          "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
          type: "email",
          label: "E-mail",
          placeholder: "exemplo@gmail.com",
          required: true
        }, null, _parent));
        _push(ssrRenderComponent(_component_PasswordInput, {
          modelValue: unref(loginForm).password,
          "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
          label: "Senha",
          placeholder: "••••••••",
          required: true
        }, null, _parent));
        if (unref(loginError)) {
          _push(`<div class="text-sm text-error bg-error/10 p-3 rounded-lg border border-error/20">${ssrInterpolate(unref(loginError))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(loginSuccess)) {
          _push(`<div class="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"> ✅ Login realizado com sucesso! Redirecionando... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-right"><a href="#" class="text-sm text-primary-300 hover:text-primary-400 transition-colors duration-200"> Esqueceu a senha? </a></div>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "submit",
          variant: "primary",
          size: "lg",
          "full-width": true,
          disabled: unref(loading),
          class: "mt-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(loading) ? "Entrando..." : "Entrar")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(loading) ? "Entrando..." : "Entrar"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
      } else {
        _push(`<form class="space-y-4">`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(registerForm).email,
          "onUpdate:modelValue": ($event) => unref(registerForm).email = $event,
          type: "email",
          label: "E-mail",
          placeholder: "exemplo@gmail.com",
          required: true
        }, null, _parent));
        _push(ssrRenderComponent(_component_PasswordInput, {
          modelValue: unref(registerForm).password,
          "onUpdate:modelValue": ($event) => unref(registerForm).password = $event,
          label: "Senha",
          placeholder: "Insira sua senha",
          required: true
        }, null, _parent));
        _push(ssrRenderComponent(_component_PasswordInput, {
          modelValue: unref(registerForm).confirmPassword,
          "onUpdate:modelValue": ($event) => unref(registerForm).confirmPassword = $event,
          label: "Confirmação de senha",
          placeholder: "Repita sua senha",
          required: true
        }, null, _parent));
        _push(`<div class="flex items-start space-x-3 pt-2"><input id="terms"${ssrIncludeBooleanAttr(Array.isArray(unref(registerForm).acceptTerms) ? ssrLooseContain(unref(registerForm).acceptTerms, null) : unref(registerForm).acceptTerms) ? " checked" : ""} type="checkbox" class="mt-1 h-4 w-4 text-primary-300 border-border-light rounded focus:ring-primary-300 focus:ring-2"><label for="terms" class="text-sm text-text-secondary"> Ao criar sua conta, você concorda em cumprir estes <a href="#" class="text-primary-300 hover:text-primary-400 underline"> Termos e compromissos </a>. </label></div>`);
        if (unref(registerError)) {
          _push(`<div class="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"> ❌ ${ssrInterpolate(unref(registerError))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(registerSuccess) && unref(registerMessage)) {
          _push(`<div class="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"> ✅ ${ssrInterpolate(unref(registerMessage))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Button, {
          type: "submit",
          variant: "primary",
          size: "lg",
          "full-width": true,
          disabled: !unref(registerForm).acceptTerms || unref(loading),
          class: "mt-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(loading) ? "Criando Conta..." : "Criar Minha Conta")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(loading) ? "Criando Conta..." : "Criar Minha Conta"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "LoginForm" });
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login - Tarini Cadastro",
      meta: [
        { name: "description", content: "Faça login ou registre-se no Tarini Cadastro" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoginForm = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background-secondary flex items-center justify-center p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LoginForm, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CTLJ8SWr.mjs.map
