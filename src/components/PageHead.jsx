import React, {useContext} from 'react';

import {Context} from '../index';
import {ReactComponent as PlusIcon} from '../assets/icons/add.svg';
import Button from '../UI/Button';
import '../styles/pageheader.css';

const PageHead = ({setModalActive, children}) => {
  const {modal} = useContext(Context)

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