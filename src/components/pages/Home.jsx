import React from "react";
import { MDBNavbar, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBRow, MDBCol, MDBCardBody } from 'mdbreact';
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import {fetchToDoList,addToDoList, removeToDoList, updateToDoList} from '../../api/api';
import {GetAllToDoList} from '../../redux/actions/index';
import ToDoList from "../layouts/ToDoList";

const Home = () =>{
    const dispatch = useDispatch();
    const [msg, setMsg] = React.useState(false)
    const [showMsg, setShowMsg] = React.useState("")
    const [toDo, setToDo] = React.useState('');

    const getAllTodoList = async () =>{
        let todoPayload = await fetchToDoList();
        dispatch(GetAllToDoList(todoPayload));
    }
    
    const todoList = useSelector(state => state.todolist);
    const todo = todoList ? todoList : '';

    const handleAddToDo = (event)=>{
    // event.preventDefault();
     if(toDo === ''){
         setMsg(true)
         setShowMsg('Input task is required!')
         return
     }
     else{
        addToDoList(toDo);
        $('input').val('');
        getAllTodoList();
     }
 
    } 

 
    React.useEffect(()=>{
        $('title').html('ToDo App')
        getAllTodoList();
    },[]);

    return(
        <div>
        <header>
          <MDBView src="https://wallpapercave.com/wp/wp2632440.jpg">
              <MDBNavbar dark expand="md">
                <MDBContainer>
                  <MDBCollapse isOpen={'true'} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem>
                        <MDBNavLink to="/" className="font-weight-bold text-warning">Home</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>

            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <h2 className="h1-responsive text-white font-weight-bold" style={{marginTop: '-100px'}}>Welcome!</h2>
              <h2 className="h4-responsive text-white font-weight-bold mt-2">Here is your simple<b className="text-warning"> ToDo</b> App.</h2>
              <h2 className="h1-responsive text-white font-weight-bold" style={{marginTop: '100px'}}>You have ( <b className="text-warning">{todo.length}</b> ) list</h2>
            </MDBMask>
          </MDBView>
        </header>

        <main style={{marginBottom: '200px'}}>
          <MDBContainer fluid className="text-center my-5">
                <MDBRow>
                    <MDBCol className="">
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
                                      Object.entries(todo).map((t, i)=>{
            
                                        if(i >= todo.count){
                                          return(
                                            <div>
                           
                                            </div>
                                          )
                                        }
                                        else{
                                         return(
                                           <ToDoList todo={todo} count={todo.length} index={i} key={i} getAllList={getAllTodoList}/>
                                         )
                                        }
                                    })
                                   }
                               </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </main>
      </div>
    )
}

export default Home;