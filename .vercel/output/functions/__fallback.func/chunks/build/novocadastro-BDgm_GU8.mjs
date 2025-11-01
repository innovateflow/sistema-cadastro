import { _ as __nuxt_component_0 } from './nuxt-link-5SauVG8d.mjs';
import { _ as __nuxt_component_0$1 } from './DropDown-6Na4j5X7.mjs';
import { mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useFuncionarios } from './useFuncionarios-BLpR6RdY.mjs';
import { u as useHead } from './composables-DoGmAY84.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@supabase/ssr';
import './useSupabaseClient-H06rCZGb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormFuncionario",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      nome: "",
      cargo: "",
      email: null,
      endereco: null,
      salario: null
    });
    const loading = ref(false);
    const cargosDisponiveis = [
      "Gestor de Tráfego",
      "Analista de Mídia Paga",
      "Copywriter",
      "Designer Gráfico / Motion Designer",
      "Closer",
      "SDR",
      "Social Media",
      "Especialista em Funil / CRO",
      "Analista de Dados / BI",
      "Gestor de Projetos / Account Manager"
    ];
    useFuncionarios();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropDown = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" }, _attrs))}><div class="bg-gray-50 px-6 py-4 border-b border-gray-200"><div class="flex items-center justify-between"><div><h2 class="text-lg font-semibold text-gray-900"> Cadastrar Novo Funcionário </h2><p class="text-sm text-gray-600 mt-1"> Preencha os dados do novo funcionário </p></div><div class="text-sm text-gray-500"><span class="inline-flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Dados do Funcionário </span></div></div></div><div class="p-6"><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="lg:col-span-2"><label for="nome" class="block text-sm font-medium text-gray-700 mb-2"> Nome Completo * </label><input id="nome"${ssrRenderAttr("value", unref(form).nome)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Digite o nome completo"></div><div>`);
      _push(ssrRenderComponent(_component_DropDown, {
        modelValue: unref(form).cargo,
        "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
        options: cargosDisponiveis,
        label: "Cargo",
        id: "cargo",
        placeholder: "Selecione o cargo",
        required: true
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="email" class="block text-sm font-medium text-gray-700 mb-2"> E-mail </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="exemplo@empresa.com"></div><div><label for="salario" class="block text-sm font-medium text-gray-700 mb-2"> Salário * </label><div class="relative"><span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"> R$ </span><input id="salario"${ssrRenderAttr("value", unref(form).salario)} type="number" step="0.01" min="0" required class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="0,00"></div></div></div><div><label for="endereco" class="block text-sm font-medium text-gray-700 mb-2"> Endereço </label><textarea id="endereco" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none" placeholder="Digite o endereço completo">${ssrInterpolate(unref(form).endereco)}</textarea></div><div class="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"> Limpar </button><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">`);
      if (unref(loading)) {
        _push(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Salvar </button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormFuncionario.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "FormFuncionario" });
const _sfc_main = {
  __name: "novocadastro",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Novo Cadastro - Sistema Cadastro",
      meta: [
        { name: "description", content: "Página para cadastrar novos funcionários no sistema" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FormFuncionario = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="mb-8"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Novo Cadastro</h1><p class="text-gray-600 mt-1">Adicione um novo funcionário ao sistema.</p></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Voltar `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                })
              ])),
              createTextVNode(" Voltar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_FormFuncionario, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/novocadastro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=novocadastro-BDgm_GU8.mjs.map
