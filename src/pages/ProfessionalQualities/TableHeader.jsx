import React from 'react';

import '../../styles/professionalQualities.css';

const TableHeader = () => {
    return (
            <>
                <div className="table__row professional-quality__row">
                    <div className="table__cell">ID</div>
                    <div className="table__cell">Профессиональное качество</div>
                    <div className="table__cell">Количество часов</div>
                </div>
            </>
    );
};

export default TableHeader;