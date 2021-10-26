import { axiosInstance } from "src/boot/axios";

const state = {};
const mutations = {};
const actions = {
  async cadastrar(_, formulario) {
    return await axiosInstance.post("/usuario/cadastrar", formulario);
  }
};
const getters = {};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
