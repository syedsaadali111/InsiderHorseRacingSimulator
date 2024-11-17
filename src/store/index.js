import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      horses: [],
      isRunning: false,
      schedule: null, // { 1200: [] }
      results: null, // { 1200: [] }
    };
  },

  mutations: {
    setHorses(state, horses) {
      state.horses = horses;
    },
    setProgramState(state, isRunning) {
      state.isRunning = isRunning;
    },
    setSchedule(state, schedule) {
      state.schedule = schedule;
    },
  },

  actions: {
    //we can simply call this action if we want to reset game state.
    initializeHorses({ commit }, horses) {
      commit('setHorses', horses);
      commit('setProgramState', false);
    },
    updateSchedule({ commit }, schedule) {
      commit('setSchedule', schedule);
    },
  },
});
