import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

const Professional = observer(({ professional }) => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const linkTo = () => {
    const specId = store.specialities.speciality.id
    const dirId = store.directions.direction.id
    const groupId = store.groups.group.id
    const profId = professional.id

    navigate(`/speciality/${specId}/direction/${dirId}/group/${groupId}/professional/${profId}`);
  };

  return (
    <>
      <div className="table__row" onClick={linkTo}>
        <div className="table__cell">{professional.id}</div>
        <div className="table__cell">{professional.name}</div>
        <div className="table__cell">{professional.hours}</div>
      </div>
    </>
  );
});

export default Professional;
