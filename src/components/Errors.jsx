import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Alert, Collapse} from "@mui/material";
import {TransitionGroup} from "react-transition-group";

import {Context} from "../index";
import "../styles/errors.css";

const Errors = observer(() => {
    const { errors } = useContext(Context)
    const { isLength, list } = errors

    return (
        <div>
            {isLength &&
                <TransitionGroup  className="errors-container">
                    {list.map(error => 
                        <Collapse key={error.id}>
                            <Alert
                                className="error"
                                severity="error"
                                onClose={() => errors.deleteError(error.id)}
                            >
                                {error.title}
                            </Alert>
                        </Collapse>
                    )}
                </TransitionGroup>
            }
        </div>
    );
});

export default Errors;