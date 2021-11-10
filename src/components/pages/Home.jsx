import React from "react";
import { MDBNavbar, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import ToDoList from "../layouts/ToDoList";
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import {fetchToDoList} from '../../api/api';
import {GetAllToDoList} from '../../redux/actions/index';

const Home = () =>{
    const dispatch = useDispatch();
    const [screenHeight, setScreenHeight] = React.useState(0);

    const getAllTodoList = async () =>{
        let todoPayload = await fetchToDoList();
        dispatch(GetAllToDoList(todoPayload));
    }
    
    const todoList = useSelector(state => state.todolist);
    const todo = todoList ? todoList : '';
    React.useEffect(()=>{
        window.scrollTo(0,0); 
        var height = $(window).height()
        setScreenHeight(height)
        $('title').html('Home')
        getAllTodoList();
    },[setScreenHeight]);

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
              <h2 className="h1-responsive text-white font-weight-bold" style={{marginTop: '100px'}}>You have ( <b className="text-warning">0</b> ) list</h2>
            </MDBMask>
          </MDBView>
        </header>

        <main style={{marginBottom: '200px'}}>
           <ToDoList height={screenHeight} todo={todo}/>
        </main>
      </div>
    )
}

export default Home;