<template>
  <div>
    <div class="w-[600px] mx-auto">
      <div
        class="border-y border-dotted border-black relative h-16 bg-gray-100"
        v-for="horse in currentRace"
        :key="horse.name"
      >
        <HorseImage
          class="h-16 w-16"
          :style="{ backgroundColor: horse.color, left: '00px', position: 'absolute' }"
        />
      </div>
      {{ currentRace }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import HorseImage from './HorseImage.vue';

const store = useStore();
const currentRace = computed(() => store.state.schedule?.['1200']);
</script>
