
import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GalleryImageList from "../Gallery/GalleryImageList.jsx";


function GalleryTable({ galleries, setGalleries, setError }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (galleries.length > 0) setLoading(false);
    }, [galleries]);

    return (
        <Grid container>
            {loading && <Typography variant="h1">Betöltés...</Typography>}
            {galleries.length === 0 && !loading && <Typography variant="h1">Nincs megjeleníthető elem</Typography>}
            {galleries.map((gallery) => (
                <Accordion key={gallery.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${gallery.id}-content`} id={`panel-${gallery.id}-header`}>
                        {gallery.name}
                    </AccordionSummary>
                    <AccordionDetails>
                        {gallery.images.length > 0 ? (
                            <GalleryImageList imageData={gallery.images} isAdmin={true} galleries={galleries} setGalleries={setGalleries} />
                        ) : (
                            <Typography>Nincs kép ebben a galériában</Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Grid>
    );
}

export default GalleryTable;
