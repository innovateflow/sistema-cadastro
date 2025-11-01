import { _ as __nuxt_component_0$1 } from './nuxt-link-5SauVG8d.mjs';
import { mergeProps, unref, defineComponent, ref, withCtx, createBlock, createTextVNode, openBlock, createVNode, isRef, computed, h, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as useNuxtApp, _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { u as useFuncionarios } from './useFuncionarios-BLpR6RdY.mjs';
import { u as useAuth } from './useAuth-BE0wpMpS.mjs';
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
import './useSupabaseClient-H06rCZGb.mjs';

const _sfc_main$2 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Object],
      default: null
    },
    type: {
      type: String,
      default: "info",
      // info, success, warning, danger
      validator: (value) => ["info", "success", "warning", "danger"].includes(value)
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: "Confirmar"
    },
    cancelText: {
      type: String,
      default: "Cancelar"
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: "Processando..."
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const iconClasses = computed(() => {
      const classes = {
        info: "bg-blue-100",
        success: "bg-green-100",
        warning: "bg-yellow-100",
        danger: "bg-red-100"
      };
      return classes[props.type] || classes.info;
    });
    const iconColorClasses = computed(() => {
      const classes = {
        info: "text-blue-600",
        success: "text-green-600",
        warning: "text-yellow-600",
        danger: "text-red-600"
      };
      return classes[props.type] || classes.info;
    });
    const confirmButtonClasses = computed(() => {
      const classes = {
        info: "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600",
        success: "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600",
        warning: "bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600",
        danger: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600"
      };
      return `${classes[props.type] || classes.info} ${props.loading ? "opacity-75 cursor-not-allowed" : ""}`;
    });
    const defaultIcons = {
      info: "InformationCircleIcon",
      success: "CheckCircleIcon",
      warning: "ExclamationTriangleIcon",
      danger: "ExclamationTriangleIcon"
    };
    computed(() => {
      if (props.icon) return props.icon;
      const iconName = defaultIcons[props.type];
      const icons = {
        InformationCircleIcon: () => h("svg", {
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ]),
        CheckCircleIcon: () => h("svg", {
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ]),
        ExclamationTriangleIcon: () => h("svg", {
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          })
        ])
      };
      return icons[iconName] || icons.InformationCircleIcon;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.modelValue) {
          _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-458d61e8><div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" data-v-458d61e8></div><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" data-v-458d61e8>`);
          if (__props.modelValue) {
            _push2(`<div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6" data-v-458d61e8><div class="sm:flex sm:items-start" data-v-458d61e8>`);
            if (__props.icon) {
              _push2(`<div class="${ssrRenderClass([unref(iconClasses), "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"])}" data-v-458d61e8>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.icon), {
                class: ["h-6 w-6", unref(iconColorClasses)]
              }, null), _parent);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full" data-v-458d61e8>`);
            if (__props.title) {
              _push2(`<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title" data-v-458d61e8>${ssrInterpolate(__props.title)}</h3>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-2" data-v-458d61e8>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.message) {
                _push2(`<p class="text-sm text-gray-500" data-v-458d61e8>${ssrInterpolate(__props.message)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent);
            _push2(`</div></div></div><div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:gap-3" data-v-458d61e8>`);
            ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
              if (__props.showConfirm) {
                _push2(`<button type="button"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} class="${ssrRenderClass([unref(confirmButtonClasses), "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto transition-colors"])}" data-v-458d61e8>`);
                if (__props.loading) {
                  _push2(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-458d61e8><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-458d61e8></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-458d61e8></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(__props.loading ? __props.loadingText : __props.confirmText)}</button>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.showCancel) {
                _push2(`<button type="button"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto transition-colors disabled:opacity-50" data-v-458d61e8>${ssrInterpolate(__props.cancelText)}</button>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent);
            _push2(`</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-458d61e8"]]), { __name: "Modal" });
const useSupabaseDebug = () => {
  const { $supabase } = useNuxtApp();
  const testConnection = async () => {
    try {
      console.log("🔄 Testando conexão com Supabase...");
      const config = useRuntimeConfig();
      console.log("⚙️ Configurações do runtime:", {
        supabaseUrl: config.public.supabaseUrl ? "Configurado ✅" : "Não configurado ❌",
        supabaseKey: config.public.supabaseKey ? "Configurado ✅" : "Não configurado ❌"
      });
      console.log("🔗 Supabase client:", $supabase);
      const { data, error } = await $supabase.from("funcionarios").select("count", { count: "exact", head: true });
      if (error) {
        console.error("❌ Erro na conexão:", error);
        console.error("❌ Detalhes completos do erro:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        return { success: false, error: error.message };
      }
      console.log("✅ Conexão com Supabase OK!");
      console.log(`📊 Total de funcionários na tabela: ${data}`);
      return { success: true, count: data };
    } catch (err) {
      console.error("❌ Erro inesperado:", err);
      return { success: false, error: "Erro inesperado na conexão" };
    }
  };
  const testAuth = async () => {
    try {
      console.log("🔄 Testando autenticação...");
      const { data: { session } } = await $supabase.auth.getSession();
      if (session?.user) {
        console.log("✅ Usuário autenticado:", session.user.email);
        return { success: true, user: session.user };
      } else {
        console.log("⚠️ Nenhum usuário autenticado");
        return { success: false, error: "Usuário não autenticado" };
      }
    } catch (err) {
      console.error("❌ Erro na verificação de autenticação:", err);
      return { success: false, error: "Erro na verificação de autenticação" };
    }
  };
  return {
    testConnection,
    testAuth
  };
};
const useNotification = () => {
  const showSuccess = (message) => {
  };
  const showError = (message) => {
  };
  const showWarning = (message) => {
  };
  const showInfo = (message) => {
  };
  const notifications = {
    funcionario: {
      cadastrado: () => showSuccess(),
      atualizado: () => showSuccess(),
      excluido: () => showSuccess(),
      erroCarregar: () => showError(),
      erroCadastrar: () => showError(),
      erroAtualizar: () => showError(),
      erroExcluir: () => showError(),
      dadosInvalidos: () => showWarning()
    },
    auth: {
      loginSucesso: () => showSuccess(),
      loginErro: () => showError(),
      logoutSucesso: () => showInfo()
    },
    system: {
      carregando: () => showInfo(),
      semConexao: () => showError(),
      erroInesperado: () => showError()
    }
  };
  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    notifications
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FuncionarioTabela",
  __ssrInlineRender: true,
  setup(__props) {
    const { funcionarios, loading, error, deletarFuncionario } = useFuncionarios();
    useSupabaseDebug();
    const { notifications } = useNotification();
    const modalExclusao = ref(false);
    const funcionarioSelecionado = ref(null);
    const excluindoFuncionario = ref(false);
    const getInitials = (nome) => {
      if (!nome) return "";
      const names = nome.trim().split(" ").filter((n) => n.length > 0);
      if (names.length === 0) return "";
      if (names.length === 1) {
        return names[0].substring(0, 2).toUpperCase();
      }
      return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
    };
    const executarExclusao = async () => {
      if (!funcionarioSelecionado.value) return;
      try {
        excluindoFuncionario.value = true;
        const resultado = await deletarFuncionario(funcionarioSelecionado.value.id);
        if (resultado.success) {
          notifications.funcionario.excluido();
          modalExclusao.value = false;
          funcionarioSelecionado.value = null;
        } else {
          notifications.funcionario.erroExcluir();
        }
      } catch (error2) {
        console.error("Erro ao excluir funcionário:", error2);
      } finally {
        excluindoFuncionario.value = false;
      }
    };
    const cancelarExclusao = () => {
      modalExclusao.value = false;
      funcionarioSelecionado.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Modal = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" }, _attrs))}><div class="bg-gray-50 px-6 py-4 border-b border-gray-200"><div class="flex items-center justify-between"><div><h2 class="text-lg font-semibold text-gray-900">Lista de Funcionários</h2><p class="text-sm text-gray-600 mt-1">${ssrInterpolate(unref(funcionarios).length)} funcionário(s) encontrado(s) </p></div><div class="text-sm text-gray-500"><span class="inline-flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path></svg> Equipe </span></div></div></div>`);
      if (unref(loading)) {
        _push(`<div class="px-6 py-12 text-center"><div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4"><svg class="animate-spin w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div><p class="text-gray-600">Carregando funcionários...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="px-6 py-12 text-center"><div class="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4"><svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="text-red-600 font-medium mb-2">Erro ao carregar funcionários</p><p class="text-gray-600 text-sm mb-4">${ssrInterpolate(unref(error))}</p><button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Tentar Novamente </button></div>`);
      } else if (unref(funcionarios).length === 0) {
        _push(`<div class="px-6 py-12 text-center"><div class="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><p class="text-gray-600 font-medium mb-2">Nenhum funcionário encontrado</p><p class="text-gray-500 text-sm">Adicione funcionários ao sistema para vê-los aqui.</p></div>`);
      } else {
        _push(`<div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Nome </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Cargo </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> E-mail </th><th scope="col" class="relative px-6 py-3"><span class="sr-only">Ações</span></th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
        ssrRenderList(unref(funcionarios), (funcionario) => {
          _push(`<tr class="hover:bg-gray-50 transition-colors duration-200"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-10 w-10"><div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center"><span class="text-sm font-medium text-blue-600">${ssrInterpolate(getInitials(funcionario.nome))}</span></div></div><div class="ml-4"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(funcionario.nome)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${ssrInterpolate(funcionario.cargo)}</div></td><td class="px-6 py-4 whitespace-nowrap">`);
          if (funcionario.email) {
            _push(`<div class="text-sm text-gray-900">${ssrInterpolate(funcionario.email)}</div>`);
          } else {
            _push(`<div class="text-sm text-gray-400 italic"> Email não informado </div>`);
          }
          _push(`</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><div class="flex items-center gap-2 justify-end">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/funcionario/${funcionario.id}`,
            class: "inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 border border-primary-200 rounded-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg> Editar `);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4 mr-1",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    })
                  ])),
                  createTextVNode(" Editar ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Excluir </button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(ssrRenderComponent(_component_Modal, {
        modelValue: unref(modalExclusao),
        "onUpdate:modelValue": ($event) => isRef(modalExclusao) ? modalExclusao.value = $event : null,
        type: "danger",
        title: "Confirmar Exclusão",
        message: `Tem certeza que deseja excluir o funcionário ${unref(funcionarioSelecionado)?.nome}? Esta ação não pode ser desfeita.`,
        "confirm-text": "Excluir",
        "cancel-text": "Cancelar",
        loading: unref(excluindoFuncionario),
        "loading-text": "Excluindo...",
        onConfirm: executarExclusao,
        onCancel: cancelarExclusao
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FuncionarioTabela.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "FuncionarioTabela" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sistema Cadastro - Página Inicial",
      meta: [
        { name: "description", content: "Sistema SaaS de cadastro moderno e eficiente para sua empresa" }
      ]
    });
    const { user } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FuncionarioTabela = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="mb-8"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Sistema Cadastro</h1><p class="text-gray-600 mt-1">Sistema moderno e eficiente para gerenciamento de cadastros e dados.</p></div><div class="flex items-center space-x-4"><span class="text-sm text-gray-500"> Olá, ${ssrInterpolate(unref(user)?.email)}</span></div></div></div>`);
      _push(ssrRenderComponent(_component_FuncionarioTabela, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bg1SLQyO.mjs.map
