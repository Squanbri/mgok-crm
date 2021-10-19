import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Auth from "./store/auth";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{auth: new Auth()}}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);
