export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  getters: {
    isCollapse(state) {
      return state.isCollapse;
    },
  },
  mutations: {
    CHANGE_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
    changeCollapse({ commit }) {
      commit("CHANGE_COLLAPSE");
    },
  },
};
