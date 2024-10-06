import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Divider, Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {kitchenImageData} from "../../Components/Gallery/GalleryImageData.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GalleryImageList from "../../Components/Gallery/GalleryImageList.jsx"
import {RepairedImageList} from "../../Components/Gallery/GalleryImageData.jsx"
import {useState, useEffect } from "react";
import notify from "../../Components/Notifications/Notify.jsx";

function Gallery() {
    const [galleries, setGalleries] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/Gallery/GetAll");
                const data = await response.json();
                setGalleries(data);
                console.log(data);
            } catch (e) {
                console.error("Error fetching galleries:", e);
                notify("Hiba a galéria lekérdezése során", "error")
            }
        }
        fetchData();
    }
    , []);
    
    
    return (
        <Grid container sx={{paddingTop: "10rem"}}>
        <Grid item>
            <h1>Galéria</h1>
            {galleries.map((gallery) => (
                <Accordion key={gallery.id} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${gallery.id}-content`}
                        id={`panel-${gallery.id}-header`}
                    >
                        {gallery.name}
                    </AccordionSummary>
                    <AccordionDetails>
                        {gallery.images.length > 0 ? (
                            <GalleryImageList imageData={gallery.images} />
                        ) : (
                            <Typography>Nincs kép ebben a galériában</Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
            <Divider />
        </Grid>
        </Grid>
    );
}

export default Gallery;