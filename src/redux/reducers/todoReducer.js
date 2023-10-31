const initialState = {
  tasks: [
    {
      id: "hehjeb",
      title: "first task",
      isDone: false,
      showEdit  : false
    },
    {
      id: "klapxn",
      title: "seconde task",
      isDone: false,
      showEdit: false
    },
  ],
  show : false,
};

const todoReducer = (state = initialState, action) => {
  console.log(action)

  if (action.type === "DONE") {
    return {
      ...state,
      task: state.tasks.map((task) => {
        return task.id === action.payload ? { ...task, isDone: true } :
          task;
      }),
    };
        
  
  } if (action.type === "DELETE_TASK") {
    return {
      ...state,
      task: state.tasks.filter((task) => {
        return task.id !== action.payload;
      }),
    };
        
  
   
  } if (action.type === "SHOW_EDIT") {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        return task.id === action.payload 
          ? { ...task, showEdit: !task.showEdit }
          :task
      }
      
      )
     
    };
        
  }
return state 
}
  export default todoReducer
