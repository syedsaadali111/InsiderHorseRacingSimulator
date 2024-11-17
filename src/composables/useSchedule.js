import { computed } from 'vue';
import { useStore } from 'vuex';

//returns n random non repeating elements from an array.
const getNRandomElements = (array, n) => {
  const arr = [...array];
  if (n >= arr.length) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length - n);
    //remove random element and push it to the end of array
    const el = arr.splice(randomIndex, 1);
    arr.push(...el);
  }
  return arr.slice(-n);
};

const HORSES_PER_ROUND = 10;
const RACE_LENGTHS = [1200, 1400, 1600, 1800, 2000, 2200];

export const useSchedule = () => {
  const store = useStore();
  const horses = computed(() => store.state.horses);

  const generateSchedule = () => {
    const schedule = {};
    for (let race of RACE_LENGTHS) {
      //get random horses for each round
      schedule[race] = getNRandomElements(horses.value, HORSES_PER_ROUND);
    }
    store.dispatch('updateSchedule', schedule);
  };

  return {
    generateSchedule,
  };
};
