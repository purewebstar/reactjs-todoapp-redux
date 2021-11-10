import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store/index';
import { setLocalStorage } from './utils/Storage';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const InitialApp = () =>{
  setLocalStorage('todolist', []);
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}


ReactDOM.render(
  <React.StrictMode>
     <InitialApp />
  </React.StrictMode>,
  document.getElementById('root')
);