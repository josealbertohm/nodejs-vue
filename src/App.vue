<template>
  <v-app>
    <v-content>
      <div>
      <img src="./assets/protection.png">
      </div>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
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
}

.footer {
  background: #4b4b4b;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
}
.footer span {
  width: 100%;
}

.content {
  width:800px;
  height:500px;
  margin:auto;
  position:absolute;
  top:0;bottom:0;
  left:0;right:0;
  max-width:320px;
  max-height:100%;
  overflow:auto;
}
</style>
