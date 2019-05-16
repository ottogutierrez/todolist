<template>
  <div class="container pt-5">
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
            type="button" id="button-addon2">Add task</button>
        </div>
      </div>
    </div>
    <hr class="col-9">
    <div class="row justify-content-center"
    v-for="task in tasks" v-bind:key="task._id">
      <Todo class="col-9" :task="task" v-on:deleteTask="deleteTask" v-if="!task.done"/>
    </div>
    <hr class="col-9">

    
    
</div>
</template>

<script>
import Todo from './Todo.vue'
import io from 'socket.io-client'

export default {
  name: 'app',
  components: {
    Todo
  },
  data: function(){
    return {
      newTaskText: '',
      tasks: [],
      socket: io()
    }
  },
  methods: {
    addTask: function(){
      if (this.newTask=='') {return}
      var tempNewTask = {
        text: this.newTaskText,
        done: false
      } 
      // TODO a way to simplify this?
      this.newTaskText = ''
      this.socket.emit('NEW_TASK', tempNewTask)
    },
    deleteTask: function(id) {
      this.socket.emit('DELETE_TASK', id)
    },
    updateTask: function(task) {
      this.socket.emit('UPDATE_TASK', task)
    },
    refreshTasks: function(){
      this.socket.emit('GET_TASKS')
      this.socket.on('TASKS',(tasksList)=>{
        this.tasks = tasksList

      })
    }
  },
  mounted:function() {
    this.refreshTasks()
  },
}
</script>

<style>

</style>
