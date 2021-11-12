import React from 'react';
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DirectionsHead = ({setActive, name}) => {
    return (
        <div className="direction-header section-header">
            <div className="header-content">
                <h3 className="text-header">{name}</h3>
            </div>

            <Button
                className="header-add"
                variant="contained"
                sx={{ width: 120, height: 48, ml: 'auto', gap: .5 }}
                onClick={() => setActive(true)}
            >
                Добавить
                <AddIcon sx={{ fontSize: 18 }}/>
            </Button>
        </div>
    );
};

export default DirectionsHead;