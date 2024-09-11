import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AppBar, IconButton, Stack, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/306228688_758433841866003_14182572165906695_n-removebg-preview.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import navBarItems from './NavBarItems.jsx';

function NavBar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is mobile size
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton size="medium" edge="start" aria-label="menu" onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" style={{ width: "7rem", height: "7rem" }} />
                </IconButton>

                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                        >
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="close"
                                onClick={handleDrawerToggle}
                                style={{ margin: 16 }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <List>
                                {navBarItems.map((item) => (
                                    <ListItem button key={item.id} onClick={() => { navigate(item.route); handleDrawerToggle(); }}>
                                        <ListItemText primary={item.label} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Stack spacing={{ xs: 1, sm: 6 }} direction="row" useFlexGap flexWrap="wrap">
                        {navBarItems.map((item) => (
                            <Button key={item.id} size="medium" variant="contained" startIcon={item.icon} onClick={() => navigate(item.route)}>
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
