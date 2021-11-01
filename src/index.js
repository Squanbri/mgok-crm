import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Auth from "./store/auth";
import Store from "./store/store";
import Modal from "./store/modal";
import Errors from "./store/errors";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        auth: new Auth(),
        store: new Store(),
        modal: new Modal(),
        errors: Errors
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);
