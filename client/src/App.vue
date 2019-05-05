<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todolist/>
  </div>
</template>

<script>
import Todolist from './components/Todolist.vue'

export default {
  name: 'app',
  components: {
    Todolist
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  text-align: center;
}
</style>
