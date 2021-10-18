import React from 'react';
import "../styles/sidiebar.css";
import {ReactComponent as LogoSvg} from "../assets/icons/logo.svg";
import {Link} from "react-router-dom";
import Button from "./button";

const SideBar = () => {
    return (
        <nav>
            <LogoSvg className="nav-logo"/>

            <ul className="nav-links">
                <li className="nav-links__item">
                    <Link to="/" className="nav-link">Специальность</Link>
                </li>
                <li className="nav-links__item">
                    <Link to="/applications" className="nav-link">Заявки</Link>
                </li>
                <li className="nav-links__item">
                    <Link to="/subjects" className="nav-link">Предметы</Link>
                </li>
            </ul>

            <Button
                className="btn-light"
                style={{
                    display: 'flex',
                    margin: 'auto'
                }}
            >
                Выйти
            </Button>
        </nav>
    );
};

export default SideBar;