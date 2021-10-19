import React, {useContext} from 'react';
import "../styles/sidiebar.css";
import {ReactComponent as LogoSvg} from "../assets/icons/logo.svg";
import {NavLink} from "react-router-dom";
import Button from "./button";
import {Context} from "../index";

const SideBar = () => {
    const {auth} = useContext(Context)

    return (
        <nav>
            <LogoSvg className="nav-logo"/>

            <ul className="nav-links">
                <li className="nav-links__item">
                    <NavLink to="/" className="nav-link">
                        Специальность
                    </NavLink>
                </li>
                <li className="nav-links__item">
                    <NavLink  to="/applications" className="nav-link">Заявки</NavLink>
                </li>
                <li className="nav-links__item">
                    <NavLink  to="/subjects" className="nav-link">Предметы</NavLink>
                </li>
            </ul>

            <Button
                className="btn-light"
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