import React from "react";
import { observer } from "mobx-react-lite";

import TextField from "../../UI/TextField";

const ModalTable = observer(({formik}) => {
  return (
    <>
      <div className="table">
        <div className="table__head">
          <div className="table__row prof-subject__row">
            <div className="table__cell">Вид учебной деятельности</div>
            <div className="table__cell">Количество часов</div>
          </div>
        </div>
        <div className="table__body">
          <div className="table__row prof-subject__row">
            <div className="table__cell">Самостоятельная работа</div>
            <div className="table__cell">
              <TextField 
                id="independentWorkHours"
                name="independentWorkHours"
                value={formik.values.independentWorkHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Теоретическое обучение</div>
            <div className="table__cell">
              <TextField 
                id="theoreticalLearningHours"
                name="theoreticalLearningHours"
                value={formik.values.theoreticalLearningHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Лабораторная работа</div>
            <div className="table__cell">
             <TextField 
                id="laboratoryWorkHours"
                name="laboratoryWorkHours"
                value={formik.values.laboratoryWorkHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Курсовые</div>
            <div className="table__cell">
              <TextField 
                id="courseWorksHours"
                name="courseWorksHours"
                value={formik.values.courseWorksHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Минимальное количество часов</div>
            <div className="table__cell">
              <TextField 
                id="minimalHours"
                name="minimalHours"
                value={formik.values.minimalHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Практика</div>
            <div className="table__cell">
              <TextField 
                id="practiceHours"
                name="practiceHours"
                value={formik.values.practiceHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Аттестация</div>
            <div className="table__cell">
              <TextField 
                id="certificationHours"
                name="certificationHours"
                value={formik.values.certificationHours}
                onChange={formik.handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Тип аттестации</div>
            <div className="table__cell">
              <div className="cell__check-box">
                <label>
                  <input 
                    type="radio" 
                    id="certificationType"
                    name="certificationType" 
                    value="Экзамен"
                    onChange={formik.handleChange}
                  />
                  Экзамен
                  <span></span>
                </label>
                
                <label>
                  <input 
                    type="radio" 
                    id="certificationType"
                    name="certificationType" 
                    defaultChecked 
                    value="Зачет"
                    onChange={formik.handleChange}
                  />
                  Зачет
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default ModalTable;