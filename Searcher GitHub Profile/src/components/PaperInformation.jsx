import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export function PaperInformation({userStater}) {
    return (
        <Paper elevation={3} sx={{backgroundColor: "#ebeded"}}>
            <Stack 
                spacing={3} 
                direction="row"
                sx={{justifyContent: 'space-evenly', margin:'20px'}}
            >
                <Stack>
                    <Typography variant="body1">Repos</Typography>
                    <Typography variant="h6" align="center">{userStater.public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="body1">Seguidores</Typography>
                    <Typography variant="h6" align="center">{userStater.followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="body1">Siguiendo</Typography>
                    <Typography variant="h6" align="center">{userStater.following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    ) 
}