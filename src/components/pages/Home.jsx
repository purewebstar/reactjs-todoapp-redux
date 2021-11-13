import React from "react";
import { MDBNavbar, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBRow, MDBCol, MDBCardBody
, MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact';
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import {fetchToDoList,addToDoList, removeToDoList, updateToDoList} from '../../api/api';
import {GetAllToDoList} from '../../redux/actions/index';
//import Pagination from '../layouts/Pagination'

const Home = () =>{
    const dispatch = useDispatch();
    const [msg, setMsg] = React.useState(false)
    const [showMsg, setShowMsg] = React.useState("")
    const [toDo, setToDo] = React.useState('');
    const[loading, setLoading] = React.useState(false);
    const[firstItemIndex, setFirstItemIndex] = React.useState(0)
    
    const getAllTodoList = async () =>{
        let todoPayload = await fetchToDoList();
        dispatch(GetAllToDoList(todoPayload));
    }
    
    const todoList = useSelector(state => state.todolist);
    const todo = todoList ? todoList : '';
    const numOfPages = ()=>{
      if(todo.length >4){
        let mdls = todo.length % 4;
        if(mdls>0) return ~~((todo.length/4) + 1);
        else return ~~(todo.length/4);
      }else{
        return 1;
      }
    }
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

    const handleRemoveToDo = (index)=>{
      setLoading(true);
      removeToDoList(index);
      setTimeout(()=>{
        getAllTodoList();
        setLoading(false)
      }, 500);
    } 


    const handleUpdateToDo = (i)=>{
      // event.preventDefault();
      const index = $('input.update').attr('index');
      const data = $('input.update').val();
      if(data === ''){
        setMsg(true)
        setShowMsg('Input task is required!')
        return
    }
    else{
       updateToDoList(data, index);
       $('input').val('');
       $('.updateList').removeClass('d-flex').hide();
       getAllTodoList();
    }
   
    } 

    const handleUpdate = (todo,i)=>{
      $('.updateList').show().addClass('d-flex');   
      $('input.update').val(todo);
      $('input.update').attr('index', i)
      $('input.update').val(todo);
    }

 
    React.useEffect(()=>{
        $('title').html('ToDo App')
        getAllTodoList();
    },[]);

    const handleTodoPage = (e)=>{
      e.preventDefault();
      const index = $('input.page-index').val();
      const pwr = (index-1)
      const firstItemIndex = (3**pwr) - 1;
      setFirstItemIndex(firstItemIndex);
      $('div.default-list').hide();
      $('div.pagination-list').show();
    }

    const Pagination = ({pages,todo}) => {
      let p = pages();
    
      return (
        <MDBRow>
          <MDBCol className="elegant-color-dark mt-5">  
            <MDBPagination circle>
               <MDBPageItem>
                  <MDBPageNav className="page-link bg-white" aria-label="Previous" index={0}>
                    &laquo;
                  </MDBPageNav>
                 </MDBPageItem>
              {
                Object.entries(todo).map((t,i)=>{

                  if(i >=p){
                    return(
                      ''
                    )
                  }
                  else{
                    return(
                      <div>
                      <MDBPageItem>
                      <MDBPageNav className="page-link bg-warning"
                      onClick={handleTodoPage}
                      >
                      <input type="hidden" value={++i} className="page-index"/>
                      {i}
                      </MDBPageNav>
                       </MDBPageItem>
                      </div>
                    )
                  }
                })
              }        
               <MDBPageItem>
                  <MDBPageNav className="page-link bg-white" index={p-1}>
                      &raquo;
                  </MDBPageNav>
                  </MDBPageItem>                                          
            </MDBPagination>
          </MDBCol>
        </MDBRow>
        )
    }

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
                            <MDBCardBody className="addList d-flex justify-content-center mb-5">                           
                                <input type="text" className="add form-control elegant-color-dark w-100 text-warning mt-2"
                                style={{position: 'relative'}}
                                onChange={e=> setToDo(e.target.value)}
                                />
                                <button className="btn btn-info font-weight-bold btn-md"
                                style={{marginLeft: '-1px', borderRadius: '10px'}}
                                onClick={handleAddToDo}
                                >Add
                                </button>
                            </MDBCardBody>
                            <MDBCardBody className="updateList justify-content-center mb-5" style={{display:'none'}}>                           
                                <input type="text" className="update form-control elegant-color-dark w-100 text-warning mt-2"
                                style={{position: 'relative'}}
                                onChange={e=> setToDo(e.target.value)}
                                />
                                <button className="btn btn-info font-weight-bold btn-md"
                                style={{marginLeft: '-1px', borderRadius: '10px'}}
                                onClick={handleUpdateToDo}
                                >Edit
                                </button>
                            </MDBCardBody>
                        </div>
                        <MDBRow>
                            <MDBCol md="1"></MDBCol>
                            <MDBCol md="10" size="12" className="mb-4">
                               <div className="bg-dark default-list">
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
                                            <>
                                            <div className="list p-2 z-depth-1" key={i}>
                                            <b className="text-white p-2">
                                                {todo[i].substr(0,40)}
                                            </b> 
                                            <div className="float-right">
                                            <i className="fas fa-trash text-danger fa-lg" value={i}
                                            onClick={e => handleRemoveToDo(i)}
                                            ></i> 
                                            &nbsp;&nbsp;<i className="fas fa-edit text-warning fa-lg"
                                              onClick={e =>handleUpdate(todo[i], i)}
                                            ></i>
                                            </div>
                                            </div>
                                            </>
                                        
                                         )
                                        }
                                    })
                                   }
                                  
                               </div>
                               <div className="bg-dark pagination-list" style={{display:'none'}}>
                                   {
                                
                                      Object.entries(todo).map((t, i)=>{
                                        let newIndex = firstItemIndex;
                                        if(i >= todo.count || i > (newIndex+3)){
                                          return(
                                            <div>
                           
                                            </div>
                                          )
                                        }
                                        else{
                                         return(
                                            <>
                                            <div className="list p-2 z-depth-1" key={newIndex}>
                                            <b className="text-white p-2">
                                                {todo[i].substr(0,40)}
                                            </b> 
                                            <div className="float-right">
                                            <i className="fas fa-trash text-danger fa-lg" value={i}
                                            onClick={e => handleRemoveToDo(i)}
                                            ></i> 
                                            &nbsp;&nbsp;<i className="fas fa-edit text-warning fa-lg"
                                              onClick={e =>handleUpdate(todo[i], i)}
                                            ></i>
                                            </div>
                                            </div>
                                            </>
                                        
                                         )
                                        }
                                    })
                                   }
                                  
                               </div>
                               <Pagination pages={numOfPages} todo={todo}/>
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