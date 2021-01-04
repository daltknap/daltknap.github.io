<template>
  <body>
    <div class="cent">
      <navbar></navbar>
      <div class="em"></div>
      <div>
        <div class="one">
          <h2 class="color1 under cent"><b>Contact Information</b></h2>
          <h5 class="color2 little">Niles, Michigan USA</h5>
          <h5 class="color2">Email: daltknap@umich.edu</h5>
          <h5 class="color2">Phone: (574) 304-0969</h5>
        </div>
        <div class="two">
          <h2 class="color1">Feel free to reach out to me by clicking on any of the links below as well!</h2>
          <div class="whole">
            <a href="mailto:daltknap@umich.edu"><img class="image1" src="../assets/emailblack.png" alt="Link to Email Me"></a>
            <a href="https://www.linkedin.com/in/daltonknapp"><img class="image2" src="../assets/linkblack.png" alt="Link to Linkedin Profile"></a>
            <a href="https://github.com/daltknap"><img class="image3" src="../assets/githubbig.png" alt="Link to GitHub Profile"></a>
          </div>
        </div>
      </div>
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
  name: 'contact',
  components: {
      navbar,
      foot,
  },
}
</script>


<style scoped>
.em {
  padding-top: 150px;
}

.one {
  padding-bottom: 40px;
}

.email {
  width: 40%;
}

.image1 {
  height: 200px;
  padding-right: 10px;
}

.image2 {
  height: 200px;
  padding-left: 10px;
  padding-right: 10px;
}

.image3 {
  height: 200px;
  padding-left: 10px;
}

.whole {
  margin-top: 5%;
  margin-bottom: 5%;
}

.color1 {
  color: #19181A;
}

.color2 {
  color: #A16E83;
  padding-top: 1%;
}

.color3 {
  color: #479761;
}

.little {
  padding-top: 2%;
}

.under {
  border-bottom: 3px solid #19181A;
  padding-bottom: 2px;
  width: 320px;
}
.cent {
  margin: auto;
}
</style>
