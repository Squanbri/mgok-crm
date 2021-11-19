import React from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
const Professional = observer(({ professional }) => {
  const history = useHistory();

  // const linkTo = () => {
  //   history.push(`/directions/${store.specialities.speciality.id}/professional_qualities_professionals/${direction.id}`);
  // };

  return (
    <>
      <div className="table__row">
        <div className="table__cell">{professional.id}</div>
        <div className="table__cell">{professional.name}</div>
        <div className="table__cell">{professional.hours}</div>
      </div>
    </>
  );
});

export default Professional;
