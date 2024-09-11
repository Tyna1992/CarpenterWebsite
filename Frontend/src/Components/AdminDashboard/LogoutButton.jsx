import { useNavigate, useLocation } from "react-router-dom";
import {Button} from "@mui/material";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog.jsx";

function LogoutButton(){
    const navigate = useNavigate();
    const location = useLocation();
    const [openDialog, setOpenDialog] = useState(false);


    const handleConfirmLogout = () => {
        handleLogout(); // Perform logout when confirmed
    };

    const handleOpenDialog = () => {
        setOpenDialog(true); // Open the confirmation dialog
    };
    async function handleLogout(){
        try{
            const response = await fetch("/api/Auth/Logout", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(response.ok){
                if(location.pathname !== "/"){
                    navigate("/");
                    window.location.reload();
                }else{
                    window.location.reload();
                }
            }
        }catch(error){
            console.error("Logout failed", error);
        }
    }
    return (
        <>
            <Button variant="contained" onClick={handleOpenDialog}>
                Kijelentkezés
            </Button>
            <ConfirmDialog
                open={openDialog}
                setOpen={setOpenDialog}
                title="Megerősítés"
                message="Biztosan kijelentkezik?"
                onConfirm={handleConfirmLogout}
            />
        </>
    );
}

export default LogoutButton;