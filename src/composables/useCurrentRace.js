import { computed } from 'vue';
import { useStore } from 'vuex';
import { useIntervalFn } from '@vueuse/core';

export const useCurrentRace = () => {
  const store = useStore();
  const currentRace = computed(() => store.state.currentRace);

  const BIG_STEP = 10;
  const SMALL_STEP = 5;
  const MAX_OFFSET = 600;

  /* Horses take big or small steps based on their condition.
  higher condition has a higher probability of taking a big step,
  but doesn't guarantee a win to keep things exciting! */
  const getOffset = ({ condition, offset }) => {
    //return 0 if at the finish line already
    if (offset >= MAX_OFFSET) {
      return 0;
    }
    //generate a random number between 1 - 100
    const num = Math.floor(Math.random() * 100) + 1;
    if (num < condition) {
      return Math.min(offset + BIG_STEP, MAX_OFFSET);
    }
    return Math.min(offset + SMALL_STEP, MAX_OFFSET);
  };

  const isRaceFinished = (race) => {
    return race?.participants.every((p) => p.offset >= MAX_OFFSET);
  };

  const { pause, resume } = useIntervalFn(
    () => {
      if (!currentRace.value) {
        //all races are finished
        console.log('All races are finished');
        pauseRace();
        store.dispatch('setRaceFinished', true);
        return;
      }
      if (isRaceFinished(currentRace.value)) {
        //current lap is finished
        console.log(`Lap ${currentRace.value.raceNumber} finished`);
        store.dispatch('storeCurrentRaceResult');
        store.dispatch('setCurrentRace', store.getters.getNextRace);
        return;
      }
      const race = { ...currentRace.value };
      race.participants.forEach((p) => {
        const newOffset = getOffset(p);
        if (newOffset === 0) {
          return;
        }
        if (newOffset >= MAX_OFFSET) {
          store.dispatch('addCurrentRaceResults', p);
        }
        p.offset = newOffset;
      });
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
