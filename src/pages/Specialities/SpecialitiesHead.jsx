import React from 'react';
import Input from "../../components/input";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const SpecialitiesHead = ({setActive}) => {
    return (
        <div className="speciality-header section-header">
            <div>
                <h3 className="text-header">Специальность</h3>
                <Input placeholder="123"/>
            </div>

            <Button
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