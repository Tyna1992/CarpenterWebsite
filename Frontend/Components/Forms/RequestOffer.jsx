﻿import React from 'react';
import {TextField, Button, Grid, Typography, Container} from '@mui/material';
import {useState} from "react";


function RequestOffer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="sm"
                   sx={{paddingTop: '3rem', backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
            <Typography variant="h4" gutterBottom>
                Árajánlat kérése
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Név"
                            variant="outlined"
                            required
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            required
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Telefonszám"
                            variant="outlined"
                            type="tel"
                            required
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Üzenet"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            name="message"
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Küldés
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default RequestOffer;