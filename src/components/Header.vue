<template>
  <nav class="flex p-4 items-center justify-between bg-indigo-50">
    <div>
      <h1 class="text-2xl font-medium">Horse Racing</h1>
    </div>

    <div class="flex items-center justify-between gap-2">
      <button class="button-primary">Generate Program</button>
      <button class="button-primary" @click="incrementCount">Start/Pause</button>
      {{ count }}
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

defineOptions({
  name: 'app-header',
});

const store = useStore();

const count = computed(() => store.state.count);
const incrementCount = () => store.commit('increment');
</script>
