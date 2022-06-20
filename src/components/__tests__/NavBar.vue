<script setup lang="ts">
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  return locale.value;
};
</script>

<template>
  <nav class="bg-red-50">
    {{ t("general.hello") }}
    <div
      class="icon-btn border mx-2"
      :title="t('button.toggle_langs')"
      @click="toggleLocales()"
    >
      {{ locale }}
    </div>
  </nav>
</template>
