import Grid from "@mui/material/Grid";
import Introduction from "../Intro/Introduction.jsx";
import Carousel from "../../Components/Carousel/ImageCarousel.jsx";

function Home(){
    return(
        <Grid container sx={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", paddingTop: "10rem" }}>
            <Carousel/>
            <Introduction/>
            
            
        </Grid>
    )
}

export default Home;