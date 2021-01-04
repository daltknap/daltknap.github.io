<template>
  <body>
    <div>
      <navbar></navbar>
      <div class="em"></div>
      <div class="eek">Coming Soon!</div>
      <foot></foot>
    </div>
  </body>
</template>


<script>
import navbar from './navbar.vue'
import foot from './foot.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'extracurriculars',
  components: {
      navbar,
      foot,
  },
}
</script>


<style scoped>
.em {
  padding-top: 100px;
}
.eek {
  padding-bottom: 33%;
}
</style>
