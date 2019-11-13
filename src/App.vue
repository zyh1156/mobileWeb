<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="w33">
      <div class="w44"></div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.w33{
  width: 750px;
  height:750px;
  background: #007b43;
  .w44{
    width: 120px;
    height: 120px;
    background-color:#007bbb;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
