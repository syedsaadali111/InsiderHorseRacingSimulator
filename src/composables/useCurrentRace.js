import { computed } from 'vue';
import { useStore } from 'vuex';
import { useIntervalFn } from '@vueuse/core';

export const useCurrentRace = () => {
  const store = useStore();
  const currentRace = computed(() => store.state.currentRace);

  const { pause, resume } = useIntervalFn(
    () => {
      const race = { ...currentRace.value };
      race.participants.forEach((p) => (p.offset += 10));
      store.dispatch('setCurrentRace', race);
    },
    100,
    { immediate: false },
  );

  const startRace = () => {
    store.dispatch('setProgramState', true);
    resume();
  };
  const pauseRace = () => {
    store.dispatch('setProgramState', false);
    pause();
  };

  return {
    startRace,
    pauseRace,
  };
};
