<script setup lang="ts"></script>

<template>
  <div class="h-screen p-6 px-10">
    <header>
      <div class="wrapper rounded">
        <NavBar />
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: "Manrope";
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: rgb(13, 148, 136);
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
html.dark {
  background: #121212;
}
</style>
