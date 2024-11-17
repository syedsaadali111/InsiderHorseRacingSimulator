import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      horses: [],
      isRunning: false,
      schedule: null, // { 1200: [] }
      results: null, // { 1200: [] }

      raceQueue: [],
      currentRace: null,
    };
  },

  getters: {
    getNextRace(state) {
      return state.raceQueue.shift();
    },
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
    setRaceQueue(state, queue) {
      state.raceQueue = queue;
    },
    setCurrentRace(state, race) {
      state.currentRace = race;
    },
  },

  actions: {
    initializeHorses({ commit }, horses) {
      commit('setHorses', horses);
      commit('setProgramState', false);
    },
    updateSchedule({ commit }, schedule) {
      commit('setSchedule', schedule);
    },
    initializeRaceQueue({ state, commit }) {
      if (!state.schedule || !Object.entries(state.schedule)?.length) {
        return;
      }
      const queue = Object.entries(state.schedule).map(([raceLength, participants], index) => {
        return {
          raceNumber: index + 1,
          raceLength,
          participants: participants.map((p) => ({ ...p, offset: 0 })),
        };
      });
      commit('setCurrentRace', queue.shift());
      commit('setRaceQueue', queue);
    },
    setCurrentRace({ commit }, race) {
      commit('setCurrentRace', race);
    },
    setProgramState({ commit }, isRunning) {
      commit('setProgramState', isRunning);
    },
  },
});
