import { _ as __nuxt_component_0 } from './nuxt-link-5SauVG8d.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
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

const _sfc_main = {
  __name: "debug",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const isClient = false;
    const isServer = true;
    const isDev = false;
    const testando = ref(false);
    const resultadoTeste = ref(null);
    const logs = ref([]);
    const hasSupabaseUrl = !!config.public.supabaseUrl;
    const hasSupabaseKey = !!config.public.supabaseKey;
    const supabaseUrlPreview = config.public.supabaseUrl ? `${config.public.supabaseUrl.slice(0, 20)}...` : null;
    useHead({
      title: "Debug - Sistema Cadastro"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="bg-white rounded-lg shadow p-6"><h1 class="text-2xl font-bold mb-6">Debug do Sistema</h1><div class="mb-6"><h2 class="text-lg font-semibold mb-3">Informações do Ambiente</h2><div class="bg-gray-100 p-4 rounded"><p><strong>Cliente:</strong> ${ssrInterpolate(unref(isClient) ? "Sim" : "Não")}</p><p><strong>Servidor:</strong> ${ssrInterpolate(unref(isServer) ? "Sim" : "Não")}</p><p><strong>Desenvolvimento:</strong> ${ssrInterpolate(unref(isDev) ? "Sim" : "Não")}</p></div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">Configurações do Supabase</h2><div class="bg-gray-100 p-4 rounded"><p><strong>URL configurada:</strong> ${ssrInterpolate(hasSupabaseUrl ? "Sim" : "Não")}</p><p><strong>Key configurada:</strong> ${ssrInterpolate(hasSupabaseKey ? "Sim" : "Não")}</p>`);
      if (unref(supabaseUrlPreview)) {
        _push(`<p><strong>URL Preview:</strong> ${ssrInterpolate(unref(supabaseUrlPreview))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">Teste de Navegação</h2><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ir para Página Inicial `);
          } else {
            return [
              createTextVNode(" Ir para Página Inicial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/novocadastro",
        class: "block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ir para Novo Cadastro `);
          } else {
            return [
              createTextVNode(" Ir para Novo Cadastro ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">Teste de Conexão</h2><button${ssrIncludeBooleanAttr(unref(testando)) ? " disabled" : ""} class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50">${ssrInterpolate(unref(testando) ? "Testando..." : "Testar Conexão Supabase")}</button>`);
      if (unref(resultadoTeste)) {
        _push(`<div class="${ssrRenderClass([unref(resultadoTeste).success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "mt-3 p-3 rounded"])}">${ssrInterpolate(unref(resultadoTeste).message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">Console de Erros</h2><div class="bg-black text-green-400 p-4 rounded font-mono text-sm h-32 overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(logs), (log, index) => {
        _push(`<div>${ssrInterpolate(log)}</div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/debug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=debug-BgXC6nfW.mjs.map
