import React from 'react'
import App1 from '../Page1/App1';
import App2 from '../Page2/App2';
import App3 from '../Page3/App3';
import { Box, Typography } from '@mui/joy';

export default function Experiment() {
    const typographyStyles = {
        color: 'text.primary',
        mb: '2vh',
        fontWeight: 'bold',
        fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' },
    };
    const BoxStyles = {
        m: '2vh',
    };

    return (
        <Box>
            <Box sx={BoxStyles}>
                <Typography sx={typographyStyles}>
                    Componente 1
                </Typography>
                <App1 />
                <br />
                <hr />
            </Box>

            <Box sx={BoxStyles}>
                <Typography sx={typographyStyles}>
                    Componente 2
                </Typography>
                <App2 />
                <br />
                <hr />
            </Box>

            <Box sx={BoxStyles}>
                <Typography sx={typographyStyles}>
                    Componente 3
                </Typography>
                <App3 />
                <br />
                <hr />
            </Box>

        </Box>
    )
}
