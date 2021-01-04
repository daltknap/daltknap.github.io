<template>
<div class="welp">
    <footer class="ft">
        <div class="copy">Copyright © Dalton Knapp</div>
        <div class="links1">
            <a href="mailto:daltknap@umich.edu"><img src="../assets/email.png" alt="Link to Email Me"></a>
        </div>
        <div class="links2">
            <a href="https://github.com/daltknap"><img src="../assets/github.png" alt="Link to Github"></a>
        </div>
        <div class="links4">
            <a href="https://www.linkedin.com/in/daltonknapp"><img src="../assets/linkedin.png" alt="Link to Linkedin Profile"></a>
        </div>
        <div class="links5">
            <a class="nav-link" href="https://drive.google.com/file/d/1U9aBh9AExlVIH1gcmzZWMODlTgXCwmps/view?usp=sharing">Resume</a>
        </div>
    </footer>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'foot',
}
</script>

<style scoped>

.ft {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #343a40;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 25px;
}

.welp {
    background-color: #343a40;
    padding-bottom: 5px;
}

.copy {
    float: left;
    padding-left: 5%;
    line-height: 100px;
}

.links1 {
    float: right;
    padding-right: 5%;
    line-height: 100px;
}

.links1 img {
    height: 50px;
}

.links2 {
    float: right;
    padding-right: 2%;
    line-height: 100px;
}

.links2 img {
    height: 30px;
}

.links4 {
    float: right;
    padding-right: 2%;
    line-height: 100px;
}

.links4 img {
    height: 30px;
}

.links5 {
    float: right;
    padding-right: 2%;
    line-height: 90px;
}

a.nav-link:link
{
   color: white;
}
a.nav-link:visited
{
   color: white;
}
a.nav-link:hover
{
   color: white;
   text-decoration: underline;
}
a.nav-link:active
{
   color: white;
}


</style>