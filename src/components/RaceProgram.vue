<template>
  <div class="pb-4 px-4 bg-indigo-50">
    <h2
      class="text-xl font-medium text-center sticky top-0 bg-indigo-50 py-2 border-b border-gray-300"
      data-test="race-program-header"
    >
      Program
    </h2>
    <div
      v-if="!schedule"
      class="text-gray-500 p-2 rounded-xl mt-4"
      data-test="race-program-empty-state"
    >
      Race program is not yet generated.
    </div>
    <table
      v-else
      v-for="([raceLength, horses], index) in Object.entries(schedule)"
      class="mx-auto mt-4 w-full"
      :key="raceLength"
      data-test="race-program-table"
    >
      <thead>
        <tr>
          <th colspan="3">Lap {{ index + 1 }}: {{ raceLength }}m</th>
        </tr>
        <tr>
          <th class="text-left">Lane</th>
          <th class="text-left">Name</th>
          <th class="text-left">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(horse, i) in horses" :key="horse.name" data-test="race-program-row">
          <td>{{ i + 1 }}</td>
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
const schedule = computed(() => store.state.schedule);
</script>
