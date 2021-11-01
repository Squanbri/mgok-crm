import React from 'react';
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const SpecialitiesHead = ({setActive}) => {
    return (
        <div className="speciality-header section-header">
            <div className="header-content">
                <h3 className="text-header">Специальность</h3>
                <TextField
                    className="header-content__input"
                    label="Наименование специальности"
                    variant="outlined"
                />
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

export default SpecialitiesHead;