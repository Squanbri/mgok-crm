import React from 'react';

import '../../styles/personalQualities.css'

const TableHeader = () => {
    return (
            <>
                <div className="table__row personal-qualities__row">
                    <div className="table__cell">ID</div>
                    <div className="table__cell">Качество</div>
                    <div className="table__cell">Рекомендация</div>
                    <div className="table__cell">Количество часов</div>
                    <div className="table__cell"></div>
                    <div className="table__cell"></div>
                </div>
            </>
    );
};

export default TableHeader;