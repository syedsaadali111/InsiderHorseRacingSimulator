import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      horses: [],
      isRunning: false,
    };
  },

  mutations: {
    setHorses(state, horses) {
      state.horses = horses;
    },
    setAnimationState(state, isRunning) {
      state.isRunning = isRunning;
    },
  },

  actions: {
    //we can simply call this method if we want to reset game state.
    initializeHorses({ commit }, horses) {
      commit('setHorses', horses);
      commit('setAnimationState', false);
    },
  },
});
