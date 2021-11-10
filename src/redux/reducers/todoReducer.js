
const initialState = {
    todoList: {}
}

const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_TODO_LIST': 
           return{
               ...state,
               todoList: action.payload
           }
        case 'ADD_TODO_LIST':
           return{
               ...state,
               todoList: action.payload
           }
        case 'REMOVE_TODO_LIST':
            return{
                ...state,
                todoList: action.payload
            }
        case 'UPDATE_TODO_LIST':
            return{
                ...state,
                todoList: action.payload
            }
        default:
            return state;
    }
};

export default todoReducer;