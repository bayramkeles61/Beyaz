<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="social-btn flex">
    <Icon v-if="isDark" icon="uil:sun" />
    <Icon v-else icon="uil:moon" />
  </button>
</template>
