<script setup lang="ts"></script>

<template>
  <nav class="w-full flex items-center">
    <h1 class="w-full text-2xl text-gray-700 dark:text-gray-200">beyaz</h1>
    <div class="flex items-center space-x-2 text-xl">
      <DarkSwitcher />
      <div class="btn flex items-center"><Icon icon="tabler:brand-github" /></div>
      <div class="text-gray-100 dark:text-gray-700">|</div>
      <LanguageSwitcher />
    </div>
  </nav>
</template>
