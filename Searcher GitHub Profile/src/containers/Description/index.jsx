import { Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { PaperInformation } from "../../components/PaperInformation";
import { LocationInformation } from "../../components/LocationInformation";

export function Description({ userStater }) {
    return (
        <Fragment>
            <Stack sx={{
                justifyContent: 'center'
            }}>
                {userStater.bio !== null ?
                    <Typography variant="body1">
                        {userStater.bio}
                    </Typography> :
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                }
            </Stack>
            <PaperInformation userStater={userStater}/>
            <LocationInformation userStater={userStater}/>
        </Fragment>
    )
}   