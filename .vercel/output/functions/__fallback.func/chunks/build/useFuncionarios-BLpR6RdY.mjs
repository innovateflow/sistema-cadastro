import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';
import { ref, readonly } from 'vue';

const useFuncionarios = () => {
  useSupabaseClient();
  const funcionarios = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const fetchFuncionarios = async () => {
    return;
  };
  const adicionarFuncionario = async (funcionario) => {
    {
      return { success: false, error: "Operação não disponível no servidor" };
    }
  };
  const buscarFuncionarioPorId = (id) => {
    return null;
  };
  const atualizarFuncionario = async (id, funcionario) => {
    {
      return { success: false, error: "Operação não disponível no servidor" };
    }
  };
  const deletarFuncionario = async (id) => {
    {
      return { success: false, error: "Operação não disponível no servidor" };
    }
  };
  return {
    funcionarios: readonly(funcionarios),
    loading: readonly(loading),
    error: readonly(error),
    fetchFuncionarios,
    adicionarFuncionario,
    buscarFuncionarioPorId,
    atualizarFuncionario,
    deletarFuncionario
  };
};

export { useFuncionarios as u };
//# sourceMappingURL=useFuncionarios-BLpR6RdY.mjs.map
