import React from 'react';

import {ReactComponent as LogoSvg} from '../assets/icons/logo.svg';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <LogoSvg className="header__logo"/>

      <ul className="header__menu">

      </ul>
    </header>
  )
}

export default Header;