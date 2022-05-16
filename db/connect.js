const mongoose = require('mongoose')

// const connectionString =
// 'mongodb+srv://patelkailash200:kailash200@cluster0.fafnl.mongodb.net/task-manager?retryWrites=true&w=majorit'

const connectDB = (url) =>{
    return mongoose.connect(url)
}
// const connectDB = (url) =>{
//     return mongoose.connect(connectionString)
// }

module.exports = connectDB

// mongoose.connect(connectionString).then(()=>console.log('Connected to DB...')).catch((err)=>console.log(err))

