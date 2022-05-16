const mongoose = require('mongoose')


const connectDB = (url) =>{
    return mongoose.connect(url)
}
// const connectDB = (url) =>{
//     return mongoose.connect(connectionString)
// }

module.exports = connectDB

// mongoose.connect(connectionString).then(()=>console.log('Connected to DB...')).catch((err)=>console.log(err))

