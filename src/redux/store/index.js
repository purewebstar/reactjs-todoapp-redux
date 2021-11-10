import {createStore} from 'redux';
import todoReducer from '../reducers/todoReducer'

const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;