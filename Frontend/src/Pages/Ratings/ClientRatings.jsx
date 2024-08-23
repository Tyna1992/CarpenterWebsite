import Grid from "@mui/material/Grid";
import {Card, CardContent, Typography} from "@mui/material";
import ReadOnlyRating from "../../Components/Rating/ReadOnlyRating.jsx";


function ClientRatings() {
  return (
    <Grid container sx={{paddingTop: "10rem"}} spacing={2} >
        <Grid item xs={12} md={6}>
            <Card sx={{minWidth: 275, backgroundColor: "rgba(136,108,68,0.85)"}}>
                <CardContent>
                    <Typography sx={{fontSize: 25}} color="#EFE5D5" gutterBottom>
                        Gipsz Jakab
                    </Typography>
                    <Typography variant="h6" component="div">
                        2022.02.19.
                    </Typography>
                    <Typography variant="h5">
                        Nagyon elégedett vagyok a munkájukkal, gyorsak és precízek voltak.

                    </Typography>
                    <ReadOnlyRating rating={5}/>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6}>
            <Card sx={{minWidth: 275, backgroundColor: "rgba(136,108,68,0.85)"}}>
                <CardContent>
                    <Typography sx={{fontSize: 25}} color="#EFE5D5" gutterBottom>
                        Gipsz Jakab
                    </Typography>
                    <Typography variant="h6" component="div">
                        2022.02.19.
                    </Typography>
                    <Typography variant="h5">
                        Nagyon elégedett vagyok a munkájukkal, gyorsak és precízek voltak.

                    </Typography>
                    <ReadOnlyRating rating={5}/>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6}>
            <Card sx={{minWidth: 275, backgroundColor: "rgba(136,108,68,0.85)"}}>
                <CardContent>
                    <Typography sx={{fontSize: 25}} color="#EFE5D5" gutterBottom>
                        Gipsz Jakab
                    </Typography>
                    <Typography variant="h6" component="div">
                        2022.02.19.
                    </Typography>
                    <Typography variant="h5">
                        Nagyon elégedett vagyok a munkájukkal, gyorsak és precízek voltak.

                    </Typography>
                    <ReadOnlyRating rating={5}/>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}

export default ClientRatings;