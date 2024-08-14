import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { carouselData } from "./CarouselData.jsx";

function Carousel(props) {
    function Item(props) {
        return (
            <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#8A6D56", width: "60dvw", height: "70dvh" }}>
                <img style={{ height: "100%", width: "auto" }} src={props.item.image} alt={props.item.alt} />
            </Paper>
        );
    }

    return (
        <Carousel
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "65dvw", height: "70dvh", paddingBottom: "5rem" }}
            indicators={false}
            animation="fade"
            duration={500}
            autoPlay={true}
            stopAutoPlayOnHover={true}
        >
            {carouselData.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

export default Carousel;
