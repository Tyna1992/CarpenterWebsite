import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {kitchenImageData} from "../../Components/Gallery/GalleryImageData.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GalleryImageList from "../../Components/Gallery/GalleryImageList.jsx"

function Gallery() {
    
    return (
        <Grid item sx={{paddingTop: "8rem"}}>
            <h1>Galéria</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                  Konyhabútorok  
                </AccordionSummary>
                <AccordionDetails>
                    <GalleryImageList imageData={kitchenImageData}/>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}

export default Gallery;