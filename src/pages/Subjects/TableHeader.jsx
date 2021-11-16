import React from 'react';

const TableHeader = () => {
    return (
            <>
                <div className="table__row">
                    <div className="table__cell">ID</div>
                    <div className="table__cell">Предметы</div>
                    <div className="table__cell">Код предмета</div>
                    <div className="table__cell"></div>
                </div>
            </>
    );
};

export default TableHeader;