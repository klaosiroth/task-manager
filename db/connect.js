const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://developer:qwerty90s@cluster0.6k4bv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conected to the MongoDB...'))
  .catch((err) => console.log(err))
