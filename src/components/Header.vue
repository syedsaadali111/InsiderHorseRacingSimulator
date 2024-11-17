<template>
  <nav class="flex p-4 items-center justify-between bg-indigo-100">
    <div>
      <h1 class="text-2xl font-medium">Horse Racing</h1>
    </div>

    <div class="flex items-center justify-between gap-2">
      <button class="button-primary" @click="generateSchedule" :disabled="isRunning">
        Generate Program
      </button>
      <button class="button-primary" @click="toggleRace" :disabled="!schedule || isFinished">
        Start/Pause
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useCurrentRace } from '@/composables/useCurrentRace';
import { useSchedule } from '@/composables/useSchedule';
import { computed } from 'vue';
import { useStore } from 'vuex';

defineOptions({
  name: 'app-header',
});

const { generateSchedule } = useSchedule();
const { startRace, pauseRace } = useCurrentRace();
const store = useStore();
const isRunning = computed(() => store.state.isRunning);
const schedule = computed(() => store.state.schedule);
const isFinished = computed(() => store.state.isFinished);
const toggleRace = () => {
  if (isRunning.value) {
    pauseRace();
  } else {
    startRace();
  }
};
</script>
