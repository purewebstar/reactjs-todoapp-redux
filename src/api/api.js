import { setLocalStorage, getLocalStorage } from "../utils/Storage";

export const fetchToDoList = async () =>{
    const res = getLocalStorage('todolist');
    return res;
}

export const addToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    if(!prevToDoList || prevToDoList === '' || prevToDoList === []){
      const newToDoList = [];
      setLocalStorage('todolist', data)
    }
    else{
      setLocalStorage('todolist', data)
    } 

}

export const removeToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    for(let i=0; i<prevToDoList.length; i++){
        if(prevToDoList.id == data.id){
            prevToDoList.splice(i,1)        
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