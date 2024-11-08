import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <Box
            display="flex"
            width="100%"
            justifyContent={"center"}
            position="fixed"
            top={0}
            left={0}
            zIndex={1000}
            padding="1rem"
            bgcolor="primary.main"
            color="white"
        >
            <Stack direction="row" spacing={24}>
                <Typography variant="h6" component={Link} to="/home" sx={{ color: 'inherit' }}>
                    Home
                </Typography>
                <Typography variant="h6" component={Link} to="/about" sx={{ color: 'inherit' }}>
                    About
                </Typography>
                <Typography variant="h6" component={Link} to="/projects" sx={{ color: 'inherit' }}>
                    Projects
                </Typography>
                <Typography variant="h6" component={Link} to="/experience" sx={{ color: 'inherit' }}>
                    Experience
                </Typography>
                <Typography variant="h6" component={Link} to="/contact" sx={{ color: 'inherit' }}>
                    Contact
                </Typography>
            </Stack>
        </Box>
    );
}

export default Navigation;
