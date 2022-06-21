<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <main class="font-bold flex items-center justify-center text-5xl p-20">
    {{ t("general.hello") }}
  </main>
</template>
