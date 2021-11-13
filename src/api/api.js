import { setLocalStorage, getLocalStorage } from "../utils/Storage";

export const fetchToDoList = async () =>{
    const res = getLocalStorage('todolist');
    return res;
}


export const addToDoList = async (data)=>{
    const prevToDoList = getLocalStorage('todolist');
    if(!prevToDoList || prevToDoList === '' || prevToDoList === []){
      const newToDoList = [];
      newToDoList.push(data)
      setLocalStorage('todolist', newToDoList)
      const res = getLocalStorage('todolist');
      return res;
    }
    else{
       prevToDoList.push(data)
      setLocalStorage('todolist', prevToDoList)
      const res = getLocalStorage('todolist');
      return res;
    } 

}

export const removeToDoList = async (index)=>{
    const prevToDoList = getLocalStorage('todolist');
    for(let i=0; i<prevToDoList.length; i++){
        if(prevToDoList[i] === prevToDoList[index]){
            prevToDoList.splice(i,1)        
        }
    }
    setLocalStorage('todolist', prevToDoList)
      const res = getLocalStorage('todolist');
      return res;
}

export const updateToDoList = async (data, index)=>{
    const prevToDoList = getLocalStorage('todolist');
    for(let i=0; i<prevToDoList.length; i++){
        if(prevToDoList[i] === prevToDoList[index]){
            prevToDoList[i] = data  
        }
    }
    setLocalStorage('todolist', prevToDoList)
    const res = getLocalStorage('todolist');
    return res;
}