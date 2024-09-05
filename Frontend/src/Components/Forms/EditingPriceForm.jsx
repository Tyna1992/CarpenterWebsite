import { Container, Grid, Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { useState } from "react";
import notify from "../Notifications/Notify.jsx";

function EditingPriceForm({ open, handleClose, price, job, setPrices, id }) {
    const [formData, setFormData] = useState({
        price: price,
        job: job,
        id: id
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(formData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(price);
        try {
            const response = await fetch("/api/Price/UpdatePrice", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id: formData.id, job: formData.job, price: formData.price }),
            });

            if (response.ok) {
                notify("Ár frissítve", "success");
                setPrices((prevPrices) =>
                    prevPrices.map((item) =>
                        item.job === job ? { ...item, price: formData.price } : item
                    )
                );
                console.log(formData.price);
                handleClose();
            } else {
                const errorResponse = await response.json();
                console.error("Failed to update price:", errorResponse);
                notify("error", "Hiba történt az ár frissítése közben.");
            }
        } catch (error) {
            console.error("Error updating price:", error);
            notify("error", "Hiba történt az ár szerkesztése közben.");
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Container maxWidth="sm">
                <DialogTitle>Ár szerkesztése</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Munka"
                                    variant="outlined"
                                    required
                                    name="job"
                                    value={formData.job}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Ár"
                                    variant="outlined"
                                    type="number"
                                    required
                                    name="price"
                                    onChange={handleChange}
                                    value={formData.price}
                                />
                            </Grid>
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

export default EditingPriceForm;
