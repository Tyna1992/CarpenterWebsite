import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact(){
    return(
        <Grid item xs={8} sx={{paddingTop: "8rem"}}>
            <h1>Kapcsolat</h1>
            <p>
                Ha bármilyen kérdése van, vagy szeretne egyedi bútort, ajándékot rendelni, kérem keressen elérhetőségeimen!
            </p>
            <p>
                <ContactPhoneIcon/> Telefon: +36 30 123 4567
            </p>
            <p>
                <EmailIcon/> Email: dummyemail@gmail.com
            </p>
            <p>
                <HomeIcon/> Cím: 1234 Példa utca 56.
            </p>
            <p>
                <AccessTimeIcon/> Nyitvatartás: Hétfőtől-Péntekig 8:00-16:00
            </p>
        </Grid>
    )
}

export default Contact;