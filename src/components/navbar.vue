<template>
<div>
    <b-navbar toggleable="lg" class="navbar-dark fixed-top bg-dark" >
        <b-navbar-brand to='/'>
            <h3 style="float: left" class="exam">Dalton Knapp</h3>
            <div><img height="50px" src="../assets/logo.png"/></div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="navbar-nav nav-fill w-100">
                <b-nav-item class="item" to='/'>About Me</b-nav-item>
                <b-nav-item class="item" to='/projects'>Projects</b-nav-item> 
                <b-nav-item class="item" to='/extracurriculars'>Extracurriculars</b-nav-item>
                <b-nav-item class="item" to='/contact'>Contact Me</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'navbar',
}
</script>

<style scoped>
.exam {
    padding-right: 5px;
    padding-top: 5%;
}
</style>