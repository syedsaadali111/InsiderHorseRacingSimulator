<template>
  <nav class="flex p-4 items-center justify-between bg-indigo-50">
    <div>
      <h1 class="text-2xl font-medium">Horse Racing</h1>
    </div>

    <div class="flex items-center justify-between gap-2">
      <button class="button-primary">Generate Program</button>
      <button class="button-primary" @click="incrementCount">Start/Pause</button>
    </div>
  </nav>
</template>

<script setup>
defineOptions({
  name: 'app-header',
});
</script>
