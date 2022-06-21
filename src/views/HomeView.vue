<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <main class="font-bold flex items-center justify-center text-5xl p-20">
    <div class="text-gray-700 dark:text-gray-300">
      {{ t("general.hello") }}
    </div>
  </main>
</template>
