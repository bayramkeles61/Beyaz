<script setup lang="ts">
const { availableLocales, locale } = useI18n();
const [open, toggle] = useToggle();
const modalRef = ref<HTMLDivElement>();
onClickOutside(modalRef, () => {
  console.log("hata 1");
  open.value = false;
});

const flags = ref<string[]>(["united-states", "france", "turkey"]);

const toggleLocales = (lang: string) => {
  console.log("hata 2");
  locale.value = lang;
  open.value = false;
  return locale.value;
};
</script>

<template>
  <div
    class="relative rounded w-36 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100 select-none"
  >
    <div
      v-if="open"
      class="absolute top-0 w-full h-full bg-sky-500 opacity-0 cursor-pointer"
    ></div>
    <button
      @click="toggle()"
      class="flex items-center w-full text-sm font-semibold px-2 py-2"
    >
      <Icon
        :icon="`twemoji:flag-${flags[availableLocales.indexOf(locale)]}`"
        class="text-2xl mr-2"
      />
      <span>{{ locale }}</span>
    </button>
    <div v-if="open" ref="modalRef" class="absolute w-full shadow-lg rounded">
      <div
        v-for="(lang, index) in availableLocales"
        class="dark:bg-gray-700 text-gray-700 dark:text-gray-200 first:rounded-t last:rounded-b"
      >
        <div
          @click="toggleLocales(lang)"
          class="flex items-center justify-start p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded cursor-pointer"
        >
          <Icon :icon="`twemoji:flag-${flags[index]}`" class="mr-2" />
          <h1>{{ lang }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
