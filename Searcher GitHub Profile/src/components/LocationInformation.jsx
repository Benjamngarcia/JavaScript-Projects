import { Grid, Stack, Typography } from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

export function LocationInformation({ userStater }) {
    return (
        <Grid 
            container
            spacing={2}
            sx={{marginTop: '15px'}}
        >
            <Grid item xs={12} lg={6}>
                <Stack direction="row" spacing={2}>
                    <LocationOn sx={{color: '#f5625b'}}/>
                    <Typography>{userStater.location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack direction="row" spacing={2}>
                    <TwitterIcon sx={{color: '#1DA1F2'}}/>
                    {userStater.twitter_username !== null ?
                        <Typography>{ '@' + userStater.twitter_username}</Typography>
                    :
                        <Typography>No disponible</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack direction="row" spacing={2}>
                    <LanguageIcon sx={{color: '#2a74f5'}}/>
                    {userStater.blog !== null ?
                        <Typography>
                            <a href={userStater.blog} target="_blank">{userStater.blog}</a>
                        </Typography>
                    :
                        <Typography>No disponible</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack direction="row" spacing={2}>
                    <BusinessIcon sx={{color: '#303338'}}/>
                    {userStater.company !== null ?
                        <Typography>{userStater.company}</Typography>
                    :
                        <Typography>No disponible</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}
