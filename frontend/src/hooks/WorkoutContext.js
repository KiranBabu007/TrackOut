import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext, useEffect } from "react";


export const useWorkoutsContext =()=>{
    const context = useContext(WorkoutContext)
    
    if(!context){
        throw error("useWorkoutsContext must be used within a WorkoutContextProvider")
    }

    return context
}