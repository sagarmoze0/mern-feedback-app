const express= require('express')
const db=require('./db')
const app=express()
app.use(express.json())
const fdRoute=require('./src/routes/fdRoute')

app.use('/api/fditems',fdRoute)
app.get('/',(req,res)=>res.send('Hello'))
app.listen(3000,()=>console.log('Server is running on port 3000'))