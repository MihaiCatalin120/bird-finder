import { Box, Typography } from "@mui/material";
import backgroundImage from "../../../../images/background.jpg";

const WelcomePage = () => {

    return (
        <Box sx={{
            width: '99vw',
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Typography variant="h1" sx={{color: 'white'}}>
                Welcome to bird finder!
                <Typography variant="h3" sx={{color: 'white'}}>
                See what species you will find by scrolling below.
                </Typography>
            </Typography>
        </Box>
    );
}

export default WelcomePage