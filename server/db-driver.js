const dotenv = require('dotenv')
dotenv.config()
class DB {
  constructor(){
    const dbUser = process.env.DB_USERNAME
    const dbPassword = process.env.DB_PWD 
    const dbUrl = process.env.DB_URL 
    //console.log(process.env.test)
    this.database = require('monk')(`mongodb://${dbUser}:${dbPassword}@${dbUrl}`)
    // DB is initialized at this point
    this.collection = this.database.get('todos')
    
  }

  createTask(newTask) {
    //console.log('trying to create a task: ', newTask.text)
    return this.collection.insert(newTask)
  }

  getTasks() {
    return this.collection.find({})
  } 

  updateTask(task) {
    return this.collection.update({_id:task._id},task)
  }

  deleteTask(id) {
    // delete task
    return this.collection.remove({_id:id})
  }



}

module.exports = DB