import { MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBAlert } from "mdbreact";
import React from "react";
import { addToDoList, removeToDoList, updateToDoList } from "../../api/api";
import { getLocalStorage } from "../../utils/Storage";

const ToDoList = ({height, todo}) =>{
   const [toDo, setToDo] = React.useState('');
   const [msg, setMsg] = React.useState(false)
   const [showMsg, setShowMsg] = React.useState("")

   const handleAddToDo = (event)=>{
    event.preventDefault();
    if(toDo === ''){
        setMsg(true)
        setShowMsg('Input task is required!')
        return
    }
    else{
       addToDoList(toDo);
    }

   } 
   const handleRemoveToDo = ()=>{

   }


    const handleUpdateToDo = ()=>{

    }

   return(
        <>
            <MDBContainer fluid className="text-center my-5">
                <MDBRow>
                    <MDBCol className>
                        <h1 className="h2-responsive text-info">Manage Your Tasks Here!</h1>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="8" size="12"  className="elegant-color-dark">                          
                        <div>
                        <MDBRow className=" mt-5 ">
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="8" size="12">
                            {
                            msg ? 
                            <h3 className="h3-responsive font-weight-bold text-danger text-center">
                                {showMsg}
                            </h3>
                            :
                            <div style={{display: 'none'}}>
                                </div>
                            }
                            </MDBCol>
                            <MDBCol md="2"></MDBCol>
                            </MDBRow>
                            <MDBCardBody className="d-flex justify-content-centermb-5">                           
                                <input type="todo" className="form-control elegant-color-dark w-100 text-warning mt-2"
                                style={{position: 'relative'}}
                                onChange={e=> setToDo(e.target.value)}
                                />
                                <button className="btn btn-info font-weight-bold btn-md"
                                style={{marginLeft: '-1px', borderRadius: '10px'}}
                                onClick={handleAddToDo}
                                >Add
                                </button>
                            </MDBCardBody>
                        </div>
                        <MDBRow>
                            <MDBCol md="1"></MDBCol>
                            <MDBCol md="10" size="12" className="mb-4">
                               <div className="bg-dark">
                                   {
                                       (todo)?
                                       (
                                        <div className=" p-2 z-depth-1">
                                        <b className="text-white">
                                            {todo}
                                        </b>
                                        <div className="float-right">
                                        <i className="fas fa-trash text-danger"></i> <i className="fas fa-edit text-warning"></i>
                                        </div>
                                        </div>
                                       )
                                       :
                                       ''
                                   }
                               </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
   )
};

export default ToDoList;