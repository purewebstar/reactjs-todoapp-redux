
import React from "react";
import $ from 'jquery';
import { useDispatch } from "react-redux";
import { removeToDoList, updateToDoList} from '../../api/api';
import { ClipLoader } from "react-spinners";

const ToDoList = ({todo, index, getAllList}) =>{
    const[loading, setLoading] = React.useState(false);

    const handleRemoveToDo = (index)=>{
        setLoading(true);
        removeToDoList(index);
        setTimeout(()=>{
            getAllList();
           setLoading(false)
        }, 500);
    } 

    return(
     <>
      {
        (loading) ?
        (
          <div className="text-center">
            <ClipLoader
            color={'#E8DB2C'}
            loading={loading}
            size={30}
          />
          </div>
        )
        :
        <div className=" p-2 z-depth-1">
        <b className="text-white p-2">
            {todo[index].substr(0,40)} ...
        </b> 
        <div className="float-right">
        <i className="fas fa-trash text-danger fa-lg" value={index}
        onClick={e => handleRemoveToDo(index)}
        ></i> 
        &nbsp;&nbsp;<i className="fas fa-edit text-warning fa-lg"
    
        ></i>
        </div>
        </div>
      }
     </>
    )
};

export default ToDoList;