import Grid from "@mui/material/Grid";
import Introduction from "../Intro/Introduction.jsx";
import ImageCarousel from "../../Components/Carousel/ImageCarousel.jsx";

function Home(){
    return(
        <Grid container sx={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", paddingTop: "10rem" }}>
            <ImageCarousel/>
            <Introduction/>
            
            
        </Grid>
    )
}

export default Home;