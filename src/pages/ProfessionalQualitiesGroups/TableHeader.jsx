import React from 'react';

const TableHeader = () => {
    return (
            <>
                <div className="table__row">
                    <div className="table__cell">ID</div>
                    <div className="table__cell">Наименование профессиональной группы</div>
                    <div className="table__cell">Количество ПК </div>
                    <div className="table__cell">Количество часов</div>
                    <div className="table__cell"></div>
                    <div className="table__cell"></div>
                </div>
            </>
    );
};

export default TableHeader;