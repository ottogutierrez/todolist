const express = require('express')
const cors = require('cors')
const volleyball = require('volleyball')
const path = require('path')

// Create app
const app = express()

// Create port variable
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(volleyball)

app.use(express.static(__dirname + '/public/'))

app.listen(port,()=>{
  console.log(`Server listening on port ${port}`)
})

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