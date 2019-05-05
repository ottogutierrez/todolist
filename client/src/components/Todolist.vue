<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="input-group col-9 px-0">
        <input type="text" v-model="newTaskText" 
          class="form-control" 
          v-on:keyup.enter = "addTask"
          placeholder="Add task..." 
          aria-label="Add Task" 
          aria-describedby="Add Task Button">
        <div class="input-group-append">
          <button v-on:click="addTask" 
            class="btn btn-outline-secondary" 
            type="button" id="button-addon2">Button</button>
        </div>
      </div>
    </div>
    <hr class="col-9">
    <!-- Todo list here -->

    <div class="row justify-content-center"
    v-for="task in tasks" v-bind:key="task.id">
      <Todo class="col-9" :task="task" v-on:deleteTask="deleteTask"/>
    </div>
    
</div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  },
  data: function(){
    return {
      newTaskText: '',
      tasks: [],
      idCounter: 0,
    }
  },
  methods: {
    addTask: function(){
      // When implementing a database, this will change
      if (this.newTask=='') {return}
      var newTask = {
        id: this.idCounter,
        text: this.newTaskText
      } 
      this.tasks.push(newTask)
      this.newTaskText = ''
      this.idCounter += 1
    },
    deleteTask: function(id) {
      // This will change when implementing a database
      this.tasks.forEach((element,index) => {
        if (index === id) {
          // delete the element
          this.tasks.splice(id,1)
        }
        
      });
    }
  },
}
</script>

<style>

</style>
