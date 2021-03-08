<template>
  <body>
    <div>
      <navbar></navbar>
      <div class="title em under">
        <h1><b>About Me</b></h1>
      </div>
      <div class="set">
        <div class="object">
          <div class="bio">
            <h3 class="sub">Bio</h3>
            <p class="otra">
              Hello and welcome to my website! I am currently a junior at the Univeristy of Michigan,
              studying computer science in the College of Engineering with a minor in Gender, Race and Nation.
              I am passionate about finding new and innovative solutions along with helping improve people's
              lives, which is why I decided to enter the computer science field. I take every opportunity I can
              to learn new languages or skills to expand my knowledge of computer science. Please feel free
              to learn more about me by exploring my website!
            </p>
          </div>
          <div class="education">
            <h3 class="sub">Education</h3>
            <p class="otra">
              University of Michigan<br>
              Bachelor of Engineering<br>
              College of Engineering<br>
              Graduation Date: April 2022<br>
              Major: Computer Science<br>
              Minor: Gender, Race and Nation<br>
            </p>
          </div>
          <div class="resume">
            <h3 class="sub">Click the button below to view my resume!</h3>
            <a class="btn btn-success extr changebutton"
            href=""
            target="_blank">View Resume</a>
          </div>
        </div>
        <div class="mepic object">
          <img class="pic rounded" src="../assets/me.png">
        </div>
      </div>
      <div>
        <div class="skills">
          <h3 class="title">Skills</h3>
          <h6 class="otra">C/C++</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:80%">
              <span class="sr-only">80%</span>
            </div>
          </div>
          <h6 class="otra">Python</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:60%">
              <span class="sr-only">60%</span>
            </div>
          </div>
          <h6 class="otra">HTML & CSS</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:80%">
              <span class="sr-only">80%</span>
            </div>
          </div>
          <h6 class="otra">Java</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:50%">
              <span class="sr-only">50%</span>
            </div>
          </div>
          <h6 class="otra">JavaScript</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:65%">
              <span class="sr-only">65%</span>
            </div>
          </div>
          <h6 class="otra">jQuery</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:55%">
              <span class="sr-only">55%</span>
            </div>
          </div>
          <h6 class="otra">Vue.js</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:60%">
              <span class="sr-only">60%</span>
            </div>
          </div>
          <h6 class="otra">React.js</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:50%">
              <span class="sr-only">50%</span>
            </div>
          </div>
          <h6 class="otra">MATLAB</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:40%">
              <span class="sr-only">40%</span>
            </div>
          </div>
          <h6 class="otra">Git</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:30%">
              <span class="sr-only">30%</span>
            </div>
          </div>
          <h6 class="otra">SQL</h6>
          <div class="progress">
            <div class="progress-bar barcolor" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:20%">
              <span class="sr-only">25%</span>
            </div>
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
  name: 'home',
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
.mepic {
  height: 600px;
  padding-top: 10px;
}
.mepic img {
  height: 100%;
  border-color: #A16E83;
  border-width: 7px;
  border-style: groove;
}
.bio {
  padding: 1%;
  margin-top: 3%;
}
.education {
  padding: 1%;
}
.resume {
  padding: 1%;
}
.skills {
  padding: 5%;
  width: 70%;
  margin: auto;
}
.extr {
  margin-top: 1%;
}

.set {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
}
.object {
  display: flex;
  flex-wrap: wrap;
  display: inline-block;
  width: 600px;
  margin-left: 2%;
  margin-right: 2%;
}
.title {
  color: #19181A;
}
.sub {
  color: #19181A;
}
.otra {
  color: #A16E83;
  padding-top: 2%;
}

.changebutton {
  background-color: #A16E83;
  color: white;
  border-color: #19181A;
}

.barcolor {
  background-color: #479761 !important;
}
.under {
  border-bottom: 3px solid #19181A;
  padding-bottom: 2px;
  width: 270px;
  margin: auto;
}
</style>
