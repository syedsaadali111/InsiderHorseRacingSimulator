<template>
  <div class="pb-4 px-4 bg-indigo-50 relative" ref="container">
    <h2
      class="text-xl font-medium text-center sticky top-0 bg-indigo-50 py-2 border-b border-gray-300"
    >
      Results
    </h2>
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
          <th class="text-left">Pos.</th>
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
import { computed, nextTick, ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const results = computed(() => store.state.results);

const container = ref();
watch(results, () => {
  //autoscroll when new results are added
  nextTick(() => {
    //next tick ensures the newly added element is rendered
    container.value.scrollTo({
      top: container.value.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  });
});
</script>
