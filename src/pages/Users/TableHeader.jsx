import React from 'react';

const TableHeader = () => {
    return (
            <>
                <div className="table__row">
                    <div className="table__cell">ID</div>
                    <div className="table__cell">Имя</div>
                    <div className="table__cell">Номер телефона</div>
                    <div className="table__cell">Должность</div>
                </div>
            </>
    );
};

export default TableHeader;