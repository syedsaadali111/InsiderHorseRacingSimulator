<template>
  <div class="p-4 bg-indigo-50">
    <h2 class="text-xl font-medium text-center">Results</h2>
    <div v-if="!results" class="text-gray-500 p-2 rounded-xl mt-4">No results available yet.</div>
    <table
      v-else
      v-for="([raceLength, horses], index) in Object.entries(results)"
      class="mx-auto mt-4 w-full"
      :key="raceLength"
    >
      <thead>
        <tr>
          <th colspan="3">Lap {{ index + 1 }}: {{ raceLength }}m</th>
        </tr>
        <tr>
          <th class="text-left">Position</th>
          <th class="text-left">Name</th>
          <th class="text-left">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(horse, index) in horses" :key="horse.name">
          <td>{{ index + 1 }}</td>
          <td>{{ horse.name }}</td>
          <td>
            <div class="h-6 w-10" :style="{ backgroundColor: horse.color }"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const results = computed(() => store.state.results);
</script>
