import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Introduction from "../Pages/Intro/Introduction.jsx";
import Gallery from "../Pages/Gallery/Gallery.jsx";
import Home from "../Pages/Home/Home.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../Theme/Theme.jsx";
import Contact from "../Pages/Contact/Contact.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="bemutatkozo" element={<Introduction/>}/>
                        <Route path="partnerek" element=""/>
                        <Route path="galeria" element={<Gallery/>}/>
                        <Route path="arlista" element=""/>
                        <Route path="tajékozato" element=""/>
                        <Route path="butor-kisokos" element=""/>
                        <Route path="hirek" element=""/>
                        <Route path="kapcsolat" element={<Contact/>}/>
                        <Route path="velemenyek" element=""/>
                    </Route>
                </Routes>
            
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
