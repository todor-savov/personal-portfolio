import { Box, Typography, Stack, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navigation.css';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

    return (
        <Box className='navigation' bgcolor="primary.main">                        
            <Stack direction="row" spacing={30} id="nav-stack">
                <Typography variant="h6" component={Link} to="/home" className="nav-link"> Home </Typography>
                <Typography variant="h6" component={Link} to="/about" className="nav-link"> About </Typography>
                <Typography variant="h6" component={Link} to="/projects" className="nav-link"> Projects </Typography>
                <Typography variant="h6" component={Link} to="/experience" className="nav-link"> Experience </Typography>
                <Typography variant="h6" component={Link} to="/contact" className="nav-link"> Contact </Typography>
            </Stack>

            <IconButton edge="start" color="inherit" aria-label="menu" id="menu-icon-button" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className="drawer-content">
                    <Typography variant="h6" component={Link} to="/home" className="drawer-link"> Home </Typography>
                    <Typography variant="h6" component={Link} to="/about" className="drawer-link"> About </Typography>
                    <Typography variant="h6" component={Link} to="/projects" className="drawer-link"> Projects </Typography>
                    <Typography variant="h6" component={Link} to="/experience" className="drawer-link"> Experience </Typography>
                    <Typography variant="h6" component={Link} to="/contact" className="drawer-link"> Contact </Typography>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navigation;
