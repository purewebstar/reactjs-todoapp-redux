import { setLocalStorage, getLocalStorage } from "../utils/Storage";

export const fetchToDoList = async () =>{
    return await(
        getLocalStorage('todolist').then(res=>{
            return res;
        }).catch(err=>{
            return []
        })
    )
}

export const addToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    if(!prevToDoList || prevToDoList === '' || prevToDoList === []){
      const newToDo = {id: 0, todo: data.todo};
      setLocalStorage('todolist', prevToDoList.push(newToDo))
    }
    else{
      const newToDo = {id: (++prevToDoList.id), todo: data.todo};
      setLocalStorage('todolist', prevToDoList.push(newToDo))
    }
    return await(  
       getLocalStorage('todolist').then(res=>{
        return res;
        }).catch(err=>{
            return []
        })
       
    )
}

export const removeToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    for(let i=0; i<prevToDoList.length; i++){
        if(prevToDoList.id == data.id){
            prevToDoList.splice(id,1)        
        }
    }
    setLocalStorage('todolist', prevToDoList)
    return await(
       
       getLocalStorage('todolist').then(res=>{
           return res;
        }).catch(err=>{
            return []
        })
    )
}

export const updateToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    for(let i=0; i<prevToDoList.length; i++){
        if(prevToDoList.id == data.id){
            prevToDoList.id = data.id;
            prevToDoList.todo = data.todo    
        }
    }
    setLocalStorage('todolist', prevToDoList)
    return await(
        getLocalStorage('todolist').then(res=>{
            return res;
         }).catch(err=>{
             return []
         })
    )
}