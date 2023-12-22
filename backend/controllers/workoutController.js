const Workout = require('../models/workoutModel')  

const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

const getWorkout = async (req,res)=>{
    const {id} =req.params
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({
            error:"No such Workout found"
        })
    }

    res.status(200).json(workouts)
}


const createWorkout = async (req,res)=> {
    const { title, load, reps } = req.body;
    try {
      const workout = await Workout.create({ title, load, reps });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
} 


module.exports ={
    createWorkout,
    getWorkout,
    getWorkouts
}