import React from 'react';
import { observer } from 'mobx-react-lite';

const AccordionBody = observer(({subject}) => {

  const subjectsParams = {
    independentWorkHours: 'Самостоятельная работа',
    theoreticalLearningHours: 'Теоретическое обучение',
    laboratoryWorkHours: 'Лабораторная работа',
    courseWorksHours: 'Курсовые',
    minimalHours: 'Минимальное количество часов',
    practiceHours: 'Практика',
    certificationHours: 'Аттестация',
    certificationType: 'Тип аттестации',
  }

  const params = Object.keys(subjectsParams)

  return (
    <>
      {params.map((param, index) => 
        <div className="table__row prof-subject__row" key={index}>
          <div className="table__cell">{subjectsParams[param]}</div>
          <div className="table__cell">{subject[param]} {index !== params.length - 1 && 'ч.'}</div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
        </div>
      )}
    </>
  )
})

export default AccordionBody;