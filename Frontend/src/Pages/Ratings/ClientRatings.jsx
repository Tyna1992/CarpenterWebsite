import Grid from "@mui/material/Grid";
import {Card, CardContent, Typography, Container} from "@mui/material";
import ReadOnlyRating from "../../Components/Rating/ReadOnlyRating.jsx";
import {useState, useEffect} from "react";
import AddReviewForm from "../../Components/Forms/AddReviewForm.jsx";


function ClientRatings() {
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchRatings() {
            try {
                const response = await fetch("/api/Review/GetAll", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setRatings(data);
                    setLoading(false);
                    setError(false);
                    console.log(data);
                } else {
                    setError(true);
                    setLoading(false);
                    console.error("Error loading ratings: ", response.status);
                }

            } catch (error) {
                setError(true);
                console.error("Error loading ratings: ", error);
            }

        }

        fetchRatings();
    }, []);


    return (
        <Grid container sx={{paddingTop: "10rem"}} spacing={2}>
            {loading && <Typography variant="h4">Kérlek várj...</Typography>}
            {error && <Typography variant="h4">Hiba történt az adatok betöltésekor</Typography>}
            {!loading && !error && (ratings.length === 0) &&
                <Typography variant="h4">Nincs elérhető értékelés</Typography>}
            {!loading && !error && ratings.length > 0 && (
                <Grid container item xs={12} spacing={2}>
                    {ratings.filter((review) => review.verified).map((review) => (
                        <Grid item xs={12} sm={6} key={review.id} sx={{paddingBottom: "2rem"}}>
                            <Card sx={{minWidth: 275, backgroundColor: "rgba(159,133,108,0.85)"}}>
                                <CardContent>
                                    <Typography sx={{fontSize: 25}} color="#EFE5D5" gutterBottom>
                                        {review.name}
                                    </Typography>
                                    <Typography>{review.createdAt.split("T")[0]}</Typography>
                                    <ReadOnlyRating value={review.rating}/>
                                    <Typography variant="h5">{review.content}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            )
            }
            <Container maxWidth="sm"
                       sx={{paddingTop: '3rem', borderRadius: "8px", borderStyle:"solid",borderColor: "#806858" }}>
                <Typography variant="h4">Írjon értékelést!</Typography>
                <br/>
                <Typography variant="h5">A beküldött értékelés hitelesítés után válik láthatóvá.</Typography>
                <br/>
                <AddReviewForm/>
            </Container>

        </Grid>
    )


}

export default ClientRatings;