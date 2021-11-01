import React, {useContext} from 'react';
import "../styles/sidiebar.css";
import {ReactComponent as LogoSvg} from "../assets/icons/logo.svg";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {Button} from "@mui/material";

const SideBar = () => {
    const {auth} = useContext(Context)

    return (
        <nav className="sidebar">
            <LogoSvg className="nav-logo"/>

            <ul className="nav-links">
                <li className="nav-links__item">
                    <NavLink exact to="/" className="nav-link">
                        Специальности
                    </NavLink>
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

            <Button
                variant="contained"
                className="btn-exit"
                color="error"
                style={{
                    display: 'flex',
                    margin: 'auto'
                }}
                onClick={() =>auth.logout()}
            >
                Выйти
            </Button>
        </nav>
    );
};

export default SideBar;