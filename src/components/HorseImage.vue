<template>
  <div class="horse-image"></div>
</template>

<script setup></script>

<style scoped>
.horse-image {
  @apply bg-gray-500;
  -webkit-mask: url('../assets/horse.svg') no-repeat center;
  mask: url('../assets/horse.svg') no-repeat center;
  mask-size: 100%;
}
</style>
