import {useState} from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";
import notify from "../Notifications/Notify.jsx";
function GenericAddForm({open, handleClose, setData, route, formDataKeys, title}) {
    const [formData, setFormData] = useState(()=>{
        const initialData = {};
        formDataKeys.forEach(key => {
            initialData[key.id] = "";
        });
        return initialData;
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        console.log(formData);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(route,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            console.log(formData);
            if (response.ok) {
                const addedPrice = await response.json();
                notify("Ár hozzáadva", "success");
                setData((prevData) => [...prevData, addedPrice ]);
                handleClose();
            }
            else {
                console.log(response);
                notify("Hiba történt az ár hozzáadása közben.","error" )
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    {formDataKeys.map((key) => (
                        <TextField
                            key={key.id}
                            margin="dense"
                            id={key.id}
                            label={key.label}
                            name={key.id}
                            type={key.id === "price" ? "number" : "text"}
                            fullWidth
                            onChange={handleChange}
                        />
                    ))}
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

export default GenericAddForm;