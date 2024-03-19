const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sagar:sagar@sagar.mxtoycf.mongodb.net/feedback?retryWrites=true&w=majority&appName=sagar')
const connect=mongoose.connection
connect.on('connected',()=>{
    console.log('Database connected successfully')
})
connect.on('error',()=>{
    console.log('Database connection failed')
})

module.exports=mongoose