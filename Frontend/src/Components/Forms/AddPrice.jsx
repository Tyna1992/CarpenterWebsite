import {useState} from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";
import notify from "../Notifications/Notify.jsx";
function AddPrice({open, handleClose, setPrices}) {
    const [formData, setFormData] = useState({
        price: "",
        job: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("/api/Price/AddPrice",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                notify("Ár hozzáadva", "success");
                setPrices((prevState) => [...prevState, formData ]);
                handleClose();
            }
            else {
                notify("error", "Hiba történt az ár hozzáadása közben.")
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Új ár felvitele</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="job"
                        name="job"
                        label="Munka"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        name="price"
                        label="Munkadíj"
                        type="number"
                        fullWidth
                        onChange={handleChange}
                    />
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Mégse
                        </Button>
                        <Button type="submit" color="primary">
                            Mentés
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
)

}

export default AddPrice;