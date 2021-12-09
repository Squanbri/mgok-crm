import React from "react";
import { observer } from "mobx-react-lite";

import TextField from "../../UI/TextField";

const ModalTable = observer(({formik}) => {
  return (
    <>
      <div className="table">
        <div className="table__head">
          <div className="table__row prof-subject__row">
            <div className="table__cell">Наименование предмета</div>
            <div className="table__cell">Количество часов</div>
          </div>
        </div>
 
        <div className="table__body">
          {formik.values.subjects?.map(subject => {
            if (!subject.active) return null

            return (
              <div className="table__row prof-subject__row" key={subject.id}>
                <div className="table__cell">{subject.name}</div>
                <div className="table__cell">
                  <TextField 
                    id={`subjects[${subject.id}].hours`}
                    name={`subjects[${subject.id}].hours`}
                    value={formik.values.independentWorkHours}
                    onChange={formik.handleChange}
                    placeholder="0"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
})

export default ModalTable;