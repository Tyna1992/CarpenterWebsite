import { useState } from 'react'
import Navbar from "../Components/NavBar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Home from "../Pages/Home/Home.jsx";


function App() {
  

  return (
    <Grid container>
      <Navbar />
        <Outlet/>
    </Grid>
  )
}

export default App
