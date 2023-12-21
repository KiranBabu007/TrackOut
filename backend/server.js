require('dotenv').config()

const express=require('express')
const workoutroute=require('./routes/workout')

const app=express()

app.use((req,res)=>{
    console.log(req.path,req.method)
    next( )
})

app.use('/api/workouts',workoutroute)


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})
