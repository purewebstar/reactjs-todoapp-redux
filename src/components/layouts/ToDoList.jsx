
import React from "react";

const ToDoList = ({count, todo, index}) =>{

    return(
     <>
    <div className=" p-2 z-depth-1">
    <b className="text-white p-2">
        {todo[index]}
    </b>
    <div className="float-right">
    <i className="fas fa-trash text-danger fa-lg"></i> &nbsp;<i className="fas fa-edit text-warning fa-lg"></i>
    </div>
    </div>
     </>
    )
};

export default ToDoList;