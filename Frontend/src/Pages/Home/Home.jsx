import Grid from "@mui/material/Grid";
import StarRatings from "../../Components/Rating/Ratings.jsx";

function Home(){
    return(
        <Grid item sx={{paddingTop:"8rem"}}>
            <h1>Home</h1>
            <StarRatings/>
        </Grid>
    )
}

export default Home;