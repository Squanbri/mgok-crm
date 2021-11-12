import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Auth from "./store/auth";
import Store from "./store/store";
import Modal from "./store/modal";
import Errors from "./store/errors";
import './styles/index.css';

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
