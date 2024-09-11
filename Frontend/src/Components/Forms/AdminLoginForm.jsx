import React, {useState} from "react";
import notify from "../Notifications/Notify.jsx";
import {Button, Container, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";


function AdminLoginForm()
{
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch("/api/Auth/AdminLogin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
            if (!response.ok) {
                notify("Sikertelen bejelentkezés!", "error")
                throw new Error("Sikertelen bejelentkezés!")
            } else {
                notify("Sikeres bejelentkezés!", "success")
                setFormData({
                    email: "",
                    password: "",
                })
                navigate("/titkosAdminDashboard")
                
            }
        }
        catch (e) {
            console.error(e)
            notify("Sikertelen bejelentkezés!", "error")
        }
        
    }
    
    return(
        <Container maxWidth="sm"
                   sx={{paddingTop: '3rem', borderRadius: "8px"}}>
            <Typography variant="h4" gutterBottom>
                Bejeletkezés
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            label="Email"
                            variant="outlined"
                            required
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}                                   
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Jelszó"
                            variant="outlined"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Bejelentkezés
                        </Button>
                    </Grid>
                    
                </Grid>
            </form>
        </Container>
    )
}

export default AdminLoginForm;