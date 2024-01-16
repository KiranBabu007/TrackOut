import { createContext,useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            
    }
}

export const WorkoutContextProvider =({children})=>{
   
    const [state,dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })
    
    

    return(
        <WorkoutContext.Provider value={}>
            {children}
        </WorkoutContext.Provider>
    )
}