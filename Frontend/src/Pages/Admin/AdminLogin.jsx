import Grid from "@mui/material/Grid";
import AdminLoginForm from "../../Components/Forms/AdminLoginForm.jsx";


function AdminLogin(){   
    
    return(
        <Grid container sx={{paddingTop: "10rem"}}>
            <Grid item xs="auto" sx={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
                <h1>Admin Login</h1>
                <AdminLoginForm />
            </Grid>
        </Grid>

    )
}

export default AdminLogin;