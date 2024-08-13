import Grid from "@mui/material/Grid";
import RequestOffer from "../../Components/Forms/RequestOffer.jsx";

function Pricelist() {
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
                        <li>Asztalos munkadíj: 5,000 HUF/óra</li>
                        <br/>
                        <li>Lapraszerelt bútor összeszerelés: 15,000 HUF-tól</li>
                        <br/>
                        <li>Egyedi bútortervezés: 25,000 HUF-tól</li>
                        <br/>
                        <li>Bútorkészítés (szék): 20,000 HUF-tól</li>
                        <br/>   
                        <li>Bútorkészítés (asztal): 35,000 HUF-tól</li>
                        <br/>
                        <li>Polcrendszer készítése: 30,000 HUF-tól</li>
                        <br/>
                        <li>Ajtókeret készítése: 18,000 HUF-tól</li>
                        <br/>
                        <li>Konyhabútor tervezés és kivitelezés: 150,000 HUF-tól</li>
                        <br/>
                        <li>Étkező bútor tervezés és kivitelezés: 120,000 HUF-tól</li>
                    </ul>
                </Grid>
                <RequestOffer/>
            </Grid>
            
        </Grid>

    )
}

export default Pricelist;