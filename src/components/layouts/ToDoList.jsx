import { MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBAlert } from "mdbreact";
import React from "react";
import { addToDoList, removeToDoList, updateToDoList } from "../../api/api";
import $ from 'jquery';

const ToDoList = ({count, todo, index}) =>{

    return(
        <React.Fragment key={index}>
    <div className=" p-2 z-depth-1">
    <b className="text-white p-2">
        {todo[index]}
    </b>
    <div className="float-right">
    <i className="fas fa-trash text-danger fa-lg"></i> &nbsp;<i className="fas fa-edit text-warning fa-lg"></i>
    </div>
    </div>
    </React.Fragment>
    )
};

export default ToDoList;