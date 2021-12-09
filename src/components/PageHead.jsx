import React from 'react';

import {ReactComponent as PlusIcon} from '../assets/icons/add.svg';
import Button from '../UI/Button';
import '../styles/pageheader.css';

const PageHead = ({setModalActive, children}) => {

  return (
    <div className="page-header__wrapper">
      <div className="page-header__content">
        {children}
      </div>

      <div className="header-button__add">
        <Button
          onClick={() => setModalActive(true)}
        >
      
      
          Добавить
          <PlusIcon/>
        </Button>
      </div>
    </div>
  )
}

export default PageHead;