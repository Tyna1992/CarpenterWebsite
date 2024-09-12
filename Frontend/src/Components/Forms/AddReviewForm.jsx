
import {TextField, Button, Grid, Typography, Container} from '@mui/material';
import {useState} from "react";
import notify from "../Notifications/Notify.jsx";
import StarRatings from "../Rating/Ratings.jsx";
function AddReviewForm(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 0,
        content: '',
    });
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };
    const handleRatingChange = (newValue) => {
        setFormData({
            ...formData,
            rating: newValue,
        });
    };
    
    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            rating: 0,
            content: '',
        });
    }
    const handleSubmit= async(event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("/api/Review/Add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    rating: formData.rating,
                    content: formData.content,
                }),
            });
            console.log(formData);
            console.log(response);
            if (response.ok) {
                notify("Az értékelés sikeresen elküldve!", "success")
                setFormData({
                    name: '',
                    email: '',
                    rating: 0,
                    content: '',
                })
            }            
        }
        catch(error){
            console.error(error);
            notify("Az értékelés elküldése sikertelen!", "error")
        }
    }
    
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Név"
                            name="name"
                            value={formData.name}
                            variant="outlined"
                            required
                            type="text"
                            onChange={handleChange}
                            sx={{paddingTop: "1rem"}}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            variant="outlined"
                            required
                            type="email"
                            onChange={handleChange}
                            sx={{paddingTop: "1rem"}}
                        />
                        
                        <TextField
                            fullWidth
                            label="Értékelés"
                            name="content"
                            value={formData.content}
                            variant="outlined"
                            required
                            type="text"
                            onChange={handleChange}
                            sx={{paddingTop: "1rem"}}
                        />
                        <StarRatings  num={formData.rating} onChange={handleRatingChange}/>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    
                >Küldés</Button>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleCancel}
                    
                >Mégse</Button>
            </form>
        </Container>
    )
   
    
}

export default AddReviewForm;