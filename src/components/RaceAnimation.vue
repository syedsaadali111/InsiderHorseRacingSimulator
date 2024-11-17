<template>
  <div class="mt-8">
    <div class="w-[600px] mx-auto">
      <div
        class="border-y border-dotted border-black relative h-16 bg-gray-100 flex items-center justify-center tracking-wide"
        v-for="horse in currentParticipants"
        :key="horse.name"
      >
        <HorseImage
          class="h-16 w-16 transition-all ease-linear"
          :style="{ backgroundColor: horse.color, left: `${horse.offset}px`, position: 'absolute' }"
        />
        <span class="text-4xl font-bold text-gray-400/75">{{ horse.name }}</span>
      </div>
    </div>
    <h2 class="text-center text-2xl font-medium mt-4">Lap {{ raceNumber }}: {{ raceLength }}m</h2>
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
const raceQueue = computed(() => store.state.raceQueue);
</script>
