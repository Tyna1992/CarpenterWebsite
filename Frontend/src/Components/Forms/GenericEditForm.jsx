import { Container, Grid, Dialog, DialogTitle, DialogContent, TextField, Button,FormControlLabel, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import notify from "../Notifications/Notify.jsx";

function GenericEditForm({ open, handleClose, initialData, fields, setData, route, title }) {
    const [formData, setFormData] = useState(initialData || {});

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setData((prevData) =>
            prevData.map((item) =>
                item.id === formData.id ? { ...item, ...formData } : item
            )
        );
        try {
            const response = await fetch(route, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const updatedData = await response.json();
                notify("Frissítve", "success");
                setData((prevData) =>
                    prevData.map((item) =>
                        item.id === updatedData.id ? updatedData : item
                    )
                );
                
                handleClose();
            } else {
                const errorResponse = await response.json();
                console.error("Failed to update price:", errorResponse);
                notify("Hiba történt az ár frissítése közben.","error" );
            }
        } catch (error) {
            console.error("Error updating price:", error);
            notify("Hiba történt az ár frissítése közben.","error");
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Container maxWidth="sm">
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {fields.map((field) => (
                                <Grid item xs={12} key={field.id}>
                                    {field.type === 'checkbox' ? (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={formData[field.id] || false}
                                                    onChange={handleChange}
                                                    name={field.id}
                                                    disabled={field.disabled || false}
                                                />
                                            }
                                            label={field.label}
                                        />
                                    ) : (
                                        <TextField
                                            fullWidth
                                            label={field.label}
                                            variant="outlined"
                                            type={field.type}
                                            required={field.required}
                                            name={field.id}
                                            value={formData[field.id]}
                                            onChange={handleChange}
                                            disabled={field.disabled || false}
                                        />
                                    )}
                                </Grid>
                            ))}                            
                            <Grid item xs={12}>
                                <Button fullWidth type="submit" variant="contained" color="primary">
                                    OK
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Container>
        </Dialog>
    );
}

export default GenericEditForm;
