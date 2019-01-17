<template>
  <div id="app">
    <div class="header" role="navigation">
      <b-nav>
        <b-nav-item><b-link to="upload" router-tag="div">Upload</b-link></b-nav-item>
        <b-nav-item><b-link to="get-all" router-tag="div">View</b-link></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%
}
.nav{
  text-align: center;
  justify-content: center;
  padding: 0px 0px 30px 0px;
  font-size: 16px;
}
.nav a{
  color: black !important;
}
.active{
  font-size: 18px;
  margin-top: -2px;
  font-weight: bold;
}
.btn-secondary{
  background-color: #14182b;
  border-color: #14182b;
  font-size: 0.8rem;
  padding: 0.3rem 1.2rem;
}
</style>
