import { Box, Typography } from "@mui/material";

const WelcomePage = () => {

    return (
        <Box sx={{
            width: '99vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Typography variant="h1" sx={{color: 'white'}}>
                Welcome to bird finder!
                <Typography variant="h3" sx={{color: 'white'}}>
                Search your desired species quick and easy.
                </Typography>
            </Typography>
        </Box>
    );
}

export default WelcomePage