
export const GetAllToDoList = (payload)=>{
   return{
       type: 'GET_ALL_TODO_LIST',
       payload: payload
   }
}

export const AddToDoList = (payload)=>{
    return{
        type: 'ADD_TODO_LIST',
        payload: payload
    }
}

export const RemoveToDoList = (payload)=>{
    return{
        type: 'REMOVE_TODO_LIST',
        payload: payload
    }
}

export const UpdateToDoList = (payload)=>{
    return{
        type: 'UPDATE_TODO_LIST',
        payload: payload
    }
}