// NavBar.jsx
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import navBarItems from './NavBarItems.jsx';
import { useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {AppBar, BottomNavigation, BottomNavigationAction, IconButton, Stack,} from "@mui/material";
import logo from "../../src/assets/306228688_758433841866003_14182572165906695_n-removebg-preview.png"


function NavBar() {
    
    const navigate = useNavigate();
    
    return (
        <AppBar position="fixed">
            <Toolbar >
                <IconButton size="medium" edge="start"  aria-label="menu" onClick={()=> navigate("/")}><img src={logo} alt="sdf" style={{width: "7rem", height: "7rem"}} /></IconButton>
                <Stack spacing={{ xs: 1, sm: 6 }} direction="row" useFlexGap flexWrap="wrap">
                    {navBarItems.map((item) => (
                        <Button key={item.id}  size="medium" variant="contained" startIcon={item.icon} onClick={() => navigate(item.route)}>{item.label}</Button>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
