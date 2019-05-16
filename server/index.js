const express = require('express')
const cors = require('cors')
const volleyball = require('volleyball')
const path = require('path')
const DB = require('./db-driver')

// Create app
const app = express()

// Create port variable
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(volleyball)

const server = app.listen(port,()=>{
  console.log(`Server listening on port ${port}`)
})

const io = require('socket.io')(server)

app.use(express.static(__dirname + '/public/'))

// Handle Production

if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))

  // Handle SPA
  app.get(/.*/,(req,res)=>{
      res.sendFile(__dirname + '/public/index.html')
  })
}

// Handle "Not found"
app.use(function(req, res, next){
  res.status(404);
  
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// SOCKETS

io.on('connection', (socket)=>{
  console.log(socket.id)
  let db = new DB()
  socket.on('NEW_TASK', (newTask)=>{
    db.createTask(newTask).then(()=>{
      refreshTasks()
    })
  })
  socket.on('GET_TASKS', ()=>{
    refreshTasks()
  })
  socket.on('DELETE_TASK', (id)=>{
    db.deleteTask(id).then(()=>{
      return refreshTasks()
    })
  })
  socket.on('UPDATE_TASK', (task)=>{
    db.updateTask(task).then(()=>{
      return refreshTasks()
    })
  })

  // REFRESH TASKS
  function refreshTasks(){
    db.getTasks().then((tasks)=>{
      io.emit('TASKS', tasks)
    })
  }
})

