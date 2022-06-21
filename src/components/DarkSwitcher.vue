<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    class="flex items-center space-x-1 text-sm opacity-50 hover:opacity-100 text-gray-700 dark:text-gray-200"
  >
    <Icon v-if="isDark" icon="uil:sun" />
    <Icon v-else icon="uil:moon" />
  </button>
</template>
