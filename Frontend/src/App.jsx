import { useState } from 'react'
import Navbar from "./Components/NavBar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Footer from "./Components/Footer.jsx";
import {Box} from "@mui/material";
import NavBar from "./Components/NavBar/Navbar.jsx";
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <NavBar />
            <Box
                component="main"
                sx={{
                    flex: 1,
                }}
            >
                <Outlet />
            </Box>
            <Footer />
            <ToastContainer 
                autoClose={2000}
                pauseOnFocusLoss={false}
                pauseOnHover={true} /> 
        </Box>
    );
}

export default App;
