import Navbar from "./Components/NavBar/Navbar.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import {Box} from "@mui/material";
import {ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import {UserContext} from "./Components/Context/UserContext.jsx";


function App() {
    const location= useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/Auth/WhoAmI", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                console.log('Fetched user data:', data); // Debugging
                if (data) {
                    setUser({ username: data.userName, email: data.email});
                    console.log('User:', user); // Debugging
                }
                
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [location.pathname]);

    
    return (
        <UserContext.Provider value={{user, setUser}}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            {user.username !== "admin" ?<Navbar /> : ""}
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
        </UserContext.Provider>
    );
}

export default App;
