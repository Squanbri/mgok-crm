import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Alert, Collapse} from "@mui/material";
import {TransitionGroup} from "react-transition-group";

import {Context} from "../index";
import "../styles/errors.css";

const Errors = observer(() => {
    const { errors } = useContext(Context)
    return (
        <div>
            {errors.isLength &&
                <TransitionGroup  className="errors-container">
                    {errors.errors.map(error =>
                        <Collapse key={error}>
                            <Alert
                                className="error"
                                severity="error"
                                onClose={() => {
                                    errors.errors.remove(error)
                                }}
                            >
                                {error}
                            </Alert>
                        </Collapse>
                    )}
                </TransitionGroup>
            }
        </div>
    );
});

export default Errors;