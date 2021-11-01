import React from 'react';
import {
    Typography,
    Breadcrumbs as BreadcrumbsBlock
} from "@mui/material";
import Link from '@mui/material/Link';

import "../../styles/breadcrumbs.css";

const Breadcrumbs = ({speciality}) => {
    return (
        <BreadcrumbsBlock className="breadcrumbs">
            <Link
                underline="hover"
                color="inherit"
                href="/"
            >
                Специальности
            </Link>
            <Typography
                color="text.primary"
                className="breadcrumbs__item"
            >
                {speciality.name}
            </Typography>
        </BreadcrumbsBlock>
    );
};

export default Breadcrumbs;