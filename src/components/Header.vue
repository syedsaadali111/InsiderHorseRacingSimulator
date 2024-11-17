<template>
  <nav class="flex p-4 items-center justify-between bg-indigo-100">
    <div>
      <h1 class="text-2xl font-medium">Horse Racing</h1>
    </div>

    <div class="flex items-center justify-between gap-2">
      <button class="button-primary" @click="generateSchedule">Generate Program</button>
      <button class="button-primary">Start/Pause</button>
    </div>
  </nav>
</template>

<script setup>
import { useSchedule } from '@/composables/useSchedule';

defineOptions({
  name: 'app-header',
});

const { generateSchedule } = useSchedule();
</script>
