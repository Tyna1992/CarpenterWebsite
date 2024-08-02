import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {kitchenImageData} from "../../Components/Gallery/GalleryImageData.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GalleryImageList from "../../Components/Gallery/GalleryImageList.jsx"
import {RepairedImageList} from "../../Components/Gallery/GalleryImageData.jsx"

function Gallery() {
    
    return (
        <Grid container sx={{paddingTop: "10rem"}}>
        <Grid item>
            <h1>Galéria</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                  Provance-i megjelenésű konyha 
                </AccordionSummary>
                <AccordionDetails>
                    <GalleryImageList imageData={kitchenImageData}/>
                </AccordionDetails>
            </Accordion>
            <Divider/>
            <br/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header">
                  Felújított  bútorok  
                </AccordionSummary>
                <AccordionDetails>
                    <GalleryImageList imageData={RepairedImageList}/>
                </AccordionDetails>
            </Accordion>
        </Grid>
        </Grid>
    );
}

export default Gallery;