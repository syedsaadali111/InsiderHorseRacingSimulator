<script setup>
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import { useHorses } from '@/composables/useHorses';
import HorseList from './components/HorseList.vue';

const { initializeGameState } = useHorses();

onMounted(() => {
  initializeGameState();
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <HorseList class="flex-grow overflow-y-auto" />
  </div>
</template>

<style scoped></style>
