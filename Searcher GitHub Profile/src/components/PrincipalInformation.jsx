import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Moment from 'react-moment';

export function PrincipalInformation({userStater}) {
    return (
        <Fragment>
            <Stack direction={{xs: "column", lg: "row"}} sx={{justifyContent:'space-between'}}>
                <Typography variant="h4">{userStater.name}</Typography>
                <Typography>
                    <Moment format="DD/MM/YYYY">{userStater.created_at}</Moment>
                </Typography>
            </Stack>
            <Typography variant="caption">{'@' + userStater.login}</Typography>
        </Fragment>
)
}