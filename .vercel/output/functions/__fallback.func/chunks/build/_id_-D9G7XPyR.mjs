import { _ as __nuxt_component_0 } from './nuxt-link-5SauVG8d.mjs';
import { _ as __nuxt_component_0$1 } from './DropDown-6Na4j5X7.mjs';
import { ref, computed, mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, watchEffect, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useFuncionarios } from './useFuncionarios-BLpR6RdY.mjs';
import { _ as _export_sfc, c as useRoute, b as useRouter } from './server.mjs';
import { u as useHead } from './composables-DoGmAY84.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './useSupabaseClient-H06rCZGb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main$1 = {
  __name: "FormFuncionarioEdicao",
  __ssrInlineRender: true,
  props: {
    funcionario: {
      type: Object,
      required: true
    }
  },
  emits: ["funcionario-editado", "cancelar"],
  setup(__props, { emit: __emit }) {
    const props = __props;
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
    watchEffect(() => {
      if (props.funcionario) {
        form.value = {
          nome: props.funcionario.nome || "",
          cargo: props.funcionario.cargo || "",
          email: props.funcionario.email || null,
          endereco: props.funcionario.endereco || null,
          salario: props.funcionario.salario || null
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropDown = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" }, _attrs))} data-v-e6d264c0><div class="bg-gray-50 px-6 py-4 border-b border-gray-200" data-v-e6d264c0><div class="flex items-center justify-between" data-v-e6d264c0><div data-v-e6d264c0><h2 class="text-lg font-semibold text-gray-900" data-v-e6d264c0> Editar Funcionário </h2><p class="text-sm text-gray-600 mt-1" data-v-e6d264c0> Altere as informações do funcionário </p></div><div class="text-sm text-gray-500" data-v-e6d264c0><span class="inline-flex items-center" data-v-e6d264c0><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e6d264c0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-e6d264c0></path></svg> ID: ${ssrInterpolate(__props.funcionario.id)}</span></div></div></div><div class="p-6" data-v-e6d264c0><form class="space-y-6" data-v-e6d264c0><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-e6d264c0><div class="lg:col-span-2" data-v-e6d264c0><label for="nome" class="block text-sm font-medium text-gray-700 mb-2" data-v-e6d264c0> Nome Completo * </label><input id="nome"${ssrRenderAttr("value", unref(form).nome)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Digite o nome completo" data-v-e6d264c0></div><div data-v-e6d264c0>`);
      _push(ssrRenderComponent(_component_DropDown, {
        modelValue: unref(form).cargo,
        "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
        options: cargosDisponiveis,
        label: "Cargo *",
        placeholder: "Selecione o cargo",
        required: ""
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-e6d264c0><div data-v-e6d264c0><label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-v-e6d264c0> E-mail </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="exemplo@email.com" data-v-e6d264c0></div><div data-v-e6d264c0><label for="salario" class="block text-sm font-medium text-gray-700 mb-2" data-v-e6d264c0> Salário * </label><div class="relative" data-v-e6d264c0><span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" data-v-e6d264c0> R$ </span><input id="salario"${ssrRenderAttr("value", unref(form).salario)} type="number" step="0.01" min="0" required class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="0,00" data-v-e6d264c0></div></div></div><div data-v-e6d264c0><label for="endereco" class="block text-sm font-medium text-gray-700 mb-2" data-v-e6d264c0> Endereço Completo </label><textarea id="endereco" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none" placeholder="Rua, número, bairro, cidade - CEP" data-v-e6d264c0>${ssrInterpolate(unref(form).endereco)}</textarea></div><div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200" data-v-e6d264c0><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" data-v-e6d264c0>`);
      if (unref(loading)) {
        _push(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-e6d264c0><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-e6d264c0></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-e6d264c0></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Salvando..." : "Salvar Alterações")}</button><button type="button"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" data-v-e6d264c0> Cancelar </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormFuncionarioEdicao.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e6d264c0"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    useFuncionarios();
    const loading = ref(false);
    const error = ref(null);
    const funcionario = ref(null);
    const handleFuncionarioEditado = (funcionarioEditado) => {
      console.log("Funcionário editado:", funcionarioEditado);
      router.push("/");
    };
    const handleCancelar = () => {
      router.push("/");
    };
    useHead({
      title: computed(() => {
        if (funcionario.value) {
          return `Editar ${funcionario.value.nome} - Sistema Cadastro`;
        }
        return "Editar Funcionário - Sistema Cadastro";
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FormFuncionarioEdicao = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))} data-v-aad2145a><div class="container mx-auto px-4 py-8" data-v-aad2145a><div class="mb-8" data-v-aad2145a><div class="flex items-center justify-between" data-v-aad2145a><div data-v-aad2145a><h1 class="text-2xl font-bold text-gray-900" data-v-aad2145a>Editar Funcionário</h1><p class="text-gray-600 mt-1" data-v-aad2145a>${ssrInterpolate(unref(funcionario) ? `Editando: ${unref(funcionario).nome}` : "Carregando funcionário...")}</p></div><div class="flex items-center space-x-4" data-v-aad2145a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-aad2145a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-aad2145a${_scopeId}></path></svg> Voltar `);
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
      if (unref(loading)) {
        _push(`<div class="text-center py-8" data-v-aad2145a><div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" data-v-aad2145a></div><p class="text-gray-600" data-v-aad2145a>Carregando dados do funcionário...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-8" data-v-aad2145a><div class="bg-red-50 border border-red-200 rounded-lg p-6" data-v-aad2145a><svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-aad2145a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-aad2145a></path></svg><h3 class="text-lg font-medium text-red-900 mb-2" data-v-aad2145a>Funcionário não encontrado</h3><p class="text-red-600 mb-6" data-v-aad2145a>${ssrInterpolate(unref(error))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Voltar para início `);
            } else {
              return [
                createTextVNode(" Voltar para início ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (unref(funcionario)) {
        _push(`<div data-v-aad2145a>`);
        _push(ssrRenderComponent(_component_FormFuncionarioEdicao, {
          funcionario: unref(funcionario),
          onFuncionarioEditado: handleFuncionarioEditado,
          onCancelar: handleCancelar
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/funcionario/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aad2145a"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D9G7XPyR.mjs.map
