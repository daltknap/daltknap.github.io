<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

*, h1, button{
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
