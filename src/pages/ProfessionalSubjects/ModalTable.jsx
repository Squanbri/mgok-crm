import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import TextField from "../../UI/TextField";

const ModalTable = observer(() => {
  const { modal } = useContext(Context);

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
              <TextField onChange={(e) => modal.setIndependentWorkHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Теоретическое обучение</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setTheoreticalLearningHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Лабораторная работа</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setLaboratoryWorkHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Курсовые</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setCourseWorksHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Минимальное количество часов</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setMinimalHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Практика</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setPracticeHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Аттестация</div>
            <div className="table__cell">
              <TextField onChange={(e) => modal.setCertificationHours(e.target.value)}/>
            </div>
          </div>

          <div className="table__row prof-subject__row">
            <div className="table__cell">Тип аттестации</div>
            <div className="table__cell">
              <div className="cell__check-box">
                <label onClick={() => modal.setCertificationType('Экзамен')}>
                  <input type="radio" name="checkbox" value="value"/>Экзамен
                </label>
                <label onClick={() => modal.setCertificationType('Зачет')}>
                  <input type="radio" name="checkbox" defaultChecked value="value"/>Зачет
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