
const initialState = {
    todolist: []
}

const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_ALL_TODO_LIST': 
           return{
               ...state,
               todolist: action.payload
           }
        case 'ADD_TODO_LIST':
           return{
               ...state,
               todolist: action.payload
           }
        case 'REMOVE_TODO_LIST':
            return{
                ...state,
                todolist: action.payload
            }
        case 'UPDATE_TODO_LIST':
            return{
                ...state,
                todolist: action.payload
            }
        default:
            return state;
    }
};

export default todoReducer;