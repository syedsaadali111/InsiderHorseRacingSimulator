<template>
  <div class="p-4 bg-indigo-100">
    <h2 class="text-xl font-medium text-center">Horse List</h2>
    <table class="mx-auto mt-4">
      <thead>
        <th>#</th>
        <th class="text-left">Name</th>
        <th class="text-left">Condition</th>
        <th class="text-left">Color</th>
      </thead>
      <tbody>
        <tr v-for="(horse, index) in horses" :key="horse.name">
          <td>{{ index + 1 }}</td>
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
          <td>{{ horse.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const horses = computed(() => store.state.horses);
</script>
