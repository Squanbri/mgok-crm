import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../index";

import Button from "../UI/Button";
import "../styles/sidebar.css";

const SideBar = () => {
    const {auth} = useContext(Context)

    return (
        <nav className="sidebar">

            <ul className="nav-links">
                <li className="nav-links__item">
                    <NavLink to="/" className="nav-link">Специальности</NavLink>
                </li>
                <li className="nav-links__item">
                    <NavLink  to="/applications" className="nav-link">Заявки</NavLink>
                </li>
                <li className="nav-links__item">
                    <NavLink  to="/subjects" className="nav-link">Предметы</NavLink>
                </li>
                <li className="nav-links__item">
                    <NavLink  to="/users" className="nav-link">Пользователи</NavLink>
                </li>
            </ul>

            <div className="sidebar__exit">
                <Button
                    className="btn-exit"
                    onClick={() => auth.logout()}
                >
                    Выйти
                </Button>
            </div>
        </nav>
    );
};

export default SideBar;