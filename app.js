require('dotenv').config();

// packages

// express
const express = require('express')
const app = express()

// database
const connectDB = require('./db/connect')

// routers
const tasks = require('./routes/tasks')

// middleware
// app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')         - get all the task
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
