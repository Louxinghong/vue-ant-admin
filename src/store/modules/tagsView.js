export default {
  namespaced: true,
  state: {
    visitedViews: [],
  },
  getters: {
    visitedViews(state) {
      return state.visitedViews;
    },
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some((v) => v.path === view.path)) {
        return;
      }
      state.visitedViews.push(view);
    },
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
  },
  actions: {
    addVisitedView({ commit }, view) {
      commit("ADD_VISITED_VIEW", view);
    },
    delVisitedView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("DEL_VISITED_VIEW", view);
        resolve([...state.visitedViews]);
      });
    },
  },
};
