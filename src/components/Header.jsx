import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../assets/icons/logo.svg";
import { ReactComponent as FavoritesSvg } from "../assets/icons/favorites.svg";
import { ReactComponent as NotificationsSvg } from "../assets/icons/notifications.svg";
import { ReactComponent as ChatSvg } from "../assets/icons/chat.svg";
import { ReactComponent as ProfileSvg } from "../assets/icons/profile.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <LogoSvg className="header__logo" />

      <ul className="header__menu">
        <li className="header-links__item">
          <Link exact to="/education" className="header-link">
            Обучение
          </Link>
        </li>
        <li className="header-links__item">
          <Link exact to="/vacancies" className="header-link">
            Вакансии
          </Link>
        </li>
        <li className="header-links__item">
          <Link exact to="/resume" className="header-link">
            Резюме
          </Link>
        </li>
        <li className="header-links__item">
          <Link exact to="/about" className="header-link">
            О нас
          </Link>
        </li>
      </ul>

      <ul className="header__profile-menu">
        <Link to="/favourites" className="header-link"> <FavoritesSvg/> </Link>
        <Link to="/notifications" className="header-link"> <NotificationsSvg/> </Link>
        <Link to="/chat" className="header-link"> <ChatSvg/> </Link>
        <Link to="/profile" className="header-link"> <ProfileSvg/> </Link>
      </ul>
    </header>
  );
};

export default Header;
