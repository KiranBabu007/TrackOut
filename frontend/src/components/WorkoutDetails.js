

const WorkoutDetails = ({workout}) => {

  const handleClick = async () => {
    const response = await fetch('/api/workouts/'+workout._id,{
      method: 'DELETE'
    })
    const json = await response.json()
    
  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load(kg):{workout.load}</strong></p>
        <p><strong>Reps:{workout.reps}</strong></p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails