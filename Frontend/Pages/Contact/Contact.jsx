import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';


function Contact(){
    const position= [46.372433030074575, 17.777339096365928];
    return( 
                
        <Grid container sx={{paddingTop: "10rem"}}>            
            <Grid item xs="auto" sx={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
        
                <h1>Kapcsolat</h1>
                <p>
                    Ha bármilyen kérdése van, vagy szeretne egyedi bútort, ajándékot rendelni, kérem keressen elérhetőségeimen!
                </p>
                <p>
                    <ContactPhoneIcon/> Telefon: +36 30 208 3080
                </p>
                <p>
                    <EmailIcon/> Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">dummyemail@gmail.com</a>
                </p>
                <p>
                    <HomeIcon fontSize="large" /> Cím: Kaposvár Búzavirág utca, Hrsz.: 5745/27, Garázsváros, 7400
                </p>
                    <>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "20rem", width: "20rem", margin: "0 auto"}} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            
                        </Marker>
                    </MapContainer>
                    </>                
                <p>
                    <AccessTimeIcon/> Nyitvatartás: Hétfő-Péntek 8:00-16:00
                </p>
                <p>
                    <FacebookIcon/> <a href="https://www.facebook.com/szanyibalintasztalos" target="_blank">Szanyi Bálint asztalos</a>
                </p>                
            </Grid>            
        </Grid>
    )
        
        
    
}

export default Contact;