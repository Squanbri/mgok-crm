import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/Index.css';
import App from './App';
import Auth from "./store/auth";
import Store from "./store/store";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        auth: new Auth(),
        store: new Store()
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);
