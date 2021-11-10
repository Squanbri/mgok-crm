import React, {useContext} from 'react';
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import {Context} from "../index";
import "../styles/tables.css";

const PageHead = ({children}) => {
  const {modal} = useContext(Context)

  return (
    <>
      <div className="page-header">
        <div className="page-header__content">
          {children}
        </div>

        <Button
          className="header-add"
          variant="contained"
          sx={{ width: 120, height: 48, ml: 'auto', gap: .5 }}
          onClick={() => modal.setActiveCreate(true)}
        >
          Добавить
          <AddIcon sx={{ fontSize: 18 }}/>
        </Button>
      </div>
    </>
  )
}

export default PageHead;