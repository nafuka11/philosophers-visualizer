<template>
  <div id="app">
    <Visualizer />
  </div>
</template>

<script>
import Visualizer from './components/Visualizer.vue';

export default {
  name: 'App',
  components: {
    Visualizer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  height: 100%;
  overflow: hidden;
}
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
