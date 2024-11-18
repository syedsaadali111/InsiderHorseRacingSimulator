# Horse Racing Simulator

This is the horse racing simulation app as requested by the instructions sent in mail.

This app is deployed using Vercel at (https://insider-horse-racing-simulator.vercel.app/)

## Functionalities
1. Generates a list of 20 random horses, with a `name`, random `color` and a random value for `condition` in the range of 1-100.
2. Generates a schedule for a race with 6 rounds of varying length. 10 randomly chosen horses participate in each round.
3. Animates the racing horses on screen, and shows/updates the results for each round in real time.
4. Success/Speed of horses are based on their condition value. Horses are _more likely_ to win with a higher condition value.

## Technologies used
1. Vite
2. VueJS
3. Vuex
4. TailwindCSS
5. Vitest + Vue Test Utils

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```
