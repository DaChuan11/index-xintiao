<template>
  <div id="app">
    <titleF></titleF>
    <lunbo></lunbo>
  </div>
</template>

<script>

import lunbo from './components/lunbo'
export default {
  name: 'App',
  components: {
    lunbo
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
</style>
