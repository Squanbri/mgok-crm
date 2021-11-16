import React from 'react';

import "../styles/loader.css";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;