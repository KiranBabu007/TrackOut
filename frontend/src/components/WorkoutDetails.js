import { useWorkoutsContext } from "../hooks/WorkoutContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      "https://track-out.onrender.com/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load(kg):{workout.load}</strong>
      </p>
      <p>
        <strong>Reps:{workout.reps}</strong>
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
    </div>
  );
};

export default WorkoutDetails;
