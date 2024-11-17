import { useStore } from 'vuex';
import horseNames from '@/assets/horseNames';
//not sure how to randomly generate horse names, so using a static list of 20 names, as the number of horses are fixed

//shuffles the array (in place) of names so that they are in random order on every app launch
const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a random remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

//generate a random hex color value. (6 random characters);
const generateRandomColor = () => {
  const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let colorValue = '#';
  for (let i = 0; i < 6; i++) {
    colorValue += hexChars[Math.floor(Math.random() * 16)];
  }
  return colorValue;
};

export const useHorses = () => {
  const names = shuffle([...horseNames]);
  const store = useStore();

  const initializeGameState = () => {
    const data = names.map((name) => {
      return {
        name,
        condition: Math.floor(Math.random() * 100) + 1, //random number between 1 and 100
        color: generateRandomColor(),
      };
    });
    store.dispatch('initializeHorses', data);
  };

  return {
    initializeGameState,
  };
};
