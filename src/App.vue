<script setup>
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import { useHorses } from '@/composables/useHorses';
import HorseList from './components/HorseList.vue';
import RaceProgram from './components/RaceProgram.vue';

const { initializeGameState } = useHorses();

onMounted(() => {
  initializeGameState();
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-grow overflow-hidden">
      <HorseList class="overflow-y-auto" />
      <RaceProgram class="overflow-y-auto" />
    </div>
  </div>
</template>

<style scoped></style>
