import Grid from "@mui/material/Grid";
import RequestOffer from "../../Components/Forms/RequestOffer.jsx";
import {useEffect, useState} from "react";

function Pricelist() {
    
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
            try {
                const response = await fetch("/api/Price/GetAllPrices");
                const data = await response.json();
                console.log(data);
                setPrices(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    
    return (
        <Grid container sx={{ paddingTop: "10rem" }} >
            <Grid item xs={12}  >
                <h1>Árlista</h1>
                <p style={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
                    Az árak tájékoztató jellegűek, egyedi igények esetén kérjen árajánlatot!
                </p>
                
                <br/>
            </Grid>
            <Grid container item xs={12} spacing={2} >
                <Grid item xs={12} sm={6} style={{backgroundColor: "rgba(216,161,101,0.6)"}}>
                    <ul style={{listStyleType: "none"}}>
                        {prices.map((item) => {
                            return (
                                <li key={item.id} style={{ marginBottom: '10px' }}>{item.job}: {item.price} HUF-tól</li>
                                
                            )
                        })}
                    </ul>
                </Grid>
                <RequestOffer/>
            </Grid>
            
        </Grid>

    )
}

export default Pricelist;