import React from 'react';
import {CircularProgress} from "@mui/material";

import "../styles/loader.css";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <CircularProgress />
        </div>
    );
};

export default Loader;