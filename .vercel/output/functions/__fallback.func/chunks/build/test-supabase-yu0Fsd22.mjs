import { _ as __nuxt_component_0 } from './nuxt-link-5SauVG8d.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';
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
  __name: "test-supabase",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const config = useRuntimeConfig();
    const loading = ref(false);
    const tableResult = ref(null);
    const consoleLogs = ref([]);
    const envInfo = computed(() => {
      const hasUrl = !!config.public.supabaseUrl;
      const hasKey = !!config.public.supabaseKey;
      const urlPreview = config.public.supabaseUrl ? `${config.public.supabaseUrl.slice(0, 30)}...` : "Não configurada";
      return { hasUrl, hasKey, urlPreview };
    });
    const connectionStatus = computed(() => {
      if (!envInfo.value.hasUrl || !envInfo.value.hasKey) {
        return {
          class: "bg-red-100 border border-red-300 text-red-800",
          title: "❌ Configuração Incompleta",
          message: "Variáveis de ambiente do Supabase não estão configuradas corretamente."
        };
      }
      if (!supabase) {
        return {
          class: "bg-yellow-100 border border-yellow-300 text-yellow-800",
          title: "⚠️ Cliente Não Inicializado",
          message: "O cliente Supabase não foi inicializado corretamente."
        };
      }
      return {
        class: "bg-green-100 border border-green-300 text-green-800",
        title: "✅ Configuração OK",
        message: "Variáveis de ambiente configuradas e cliente Supabase inicializado."
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-8" }, _attrs))}><div class="max-w-4xl mx-auto px-4"><div class="bg-white rounded-lg shadow-md p-6"><h1 class="text-2xl font-bold text-gray-900 mb-6">🧪 Teste de Conectividade Supabase</h1><div class="${ssrRenderClass([unref(connectionStatus).class, "mb-6 p-4 rounded-lg"])}"><div class="flex items-center"><div class="text-lg font-semibold">${ssrInterpolate(unref(connectionStatus).title)}</div></div><div class="text-sm mt-1">${ssrInterpolate(unref(connectionStatus).message)}</div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">📋 Variáveis de Ambiente</h2><div class="bg-gray-100 p-4 rounded-lg space-y-2"><div><strong>SUPABASE_URL:</strong> ${ssrInterpolate(unref(envInfo).hasUrl ? "✅ Configurada" : "❌ Não configurada")}</div><div><strong>SUPABASE_KEY:</strong> ${ssrInterpolate(unref(envInfo).hasKey ? "✅ Configurada" : "❌ Não configurada")}</div><div><strong>URL Preview:</strong> ${ssrInterpolate(unref(envInfo).urlPreview)}</div></div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">📊 Teste da Tabela &#39;funcionarios&#39;</h2><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 mb-4">${ssrInterpolate(unref(loading) ? "Testando..." : "Testar Conexão com Tabela")}</button>`);
      if (unref(tableResult)) {
        _push(`<div class="bg-gray-100 p-4 rounded-lg"><pre class="text-sm">${ssrInterpolate(JSON.stringify(unref(tableResult), null, 2))}</pre></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><h2 class="text-lg font-semibold mb-3">📝 Console Logs</h2><div class="bg-black text-green-400 p-4 rounded-lg text-sm font-mono max-h-64 overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(consoleLogs), (log, index) => {
        _push(`<div>${ssrInterpolate(log)}</div>`);
      });
      _push(`<!--]--></div></div><div class="pt-4 border-t">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-primary-600 hover:text-primary-800 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Voltar para a página principal `);
          } else {
            return [
              createTextVNode(" ← Voltar para a página principal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-supabase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-supabase-yu0Fsd22.mjs.map
