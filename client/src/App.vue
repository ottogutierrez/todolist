<template>
  <div id="app">
    <img alt="TODO Logo" src="./assets/TODO-Logo.png">
    <hr>
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
