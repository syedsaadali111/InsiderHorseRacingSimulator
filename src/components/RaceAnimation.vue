<template>
  <div class="mt-8">
    <div
      v-if="!currentParticipants?.length && !raceFinished"
      class="text-gray-500 p-2 rounded-xl mt-4 text-center"
    >
      There are no current races. Generate a race program to begin!
    </div>
    <div v-else-if="raceFinished" class="text-gray-500 p-2 rounded-xl mt-4 text-center">
      All races are finished. Generate another race program to try again!
    </div>
    <template v-else>
      <div class="w-[600px] mx-auto border-red-500 border-r-2">
        <div
          class="border-y border-dotted border-black relative h-16 bg-gray-100 flex items-center justify-center tracking-wide"
          v-for="horse in currentParticipants"
          :key="horse.name + raceNumber"
        >
          <HorseImage
            :key="horse.name + '_' + raceNumber"
            class="h-16 w-16 transition-all ease-linear -translate-x-full"
            :style="{
              backgroundColor: horse.color,
              left: `${(horse.offset / raceLength) * 100}%`,
              position: 'absolute',
            }"
          />
          <span class="text-4xl font-bold text-gray-400/75">{{ horse.name }}</span>
        </div>
      </div>
      <h2 class="text-center text-2xl font-medium mt-4">Lap {{ raceNumber }}: {{ raceLength }}m</h2>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import HorseImage from './HorseImage.vue';

const store = useStore();
const currentParticipants = computed(() => store.state.currentRace?.participants);
const raceLength = computed(() => store.state.currentRace?.raceLength);
const raceNumber = computed(() => store.state.currentRace?.raceNumber);
const raceFinished = computed(() => store.state.isFinished);
</script>
