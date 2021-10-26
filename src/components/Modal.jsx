import React from 'react';
import {
    Modal as BasicModal,
    Typography,
    Button
} from '@mui/material';
import "../styles/Modal.css";

const Modal = ({active, setActive, children}) => {
    return (
        <BasicModal
            open={active}
            onClose={() => setActive(false)}
            className="modal"
        >
            <div className="modal-content">
                <Button
                    variant="contained"
                    color="error"
                    className="modal-close"
                    onClick={() => setActive(false)}
                >
                    Закрыть
                </Button>

                {children}
            </div>
        </BasicModal>
    );
};

export default Modal;