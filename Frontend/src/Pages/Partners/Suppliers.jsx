import Grid from "@mui/material/Grid";
import {
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";



function Suppliers() {
  return (
    <Grid container sx={{ paddingTop: "9rem" }}>
      <h1>Partnerek</h1>
        <Grid item xs={12} >
            <p style={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
            Az alábbi partnerekkel, gyártókkal dolgozom együtt:
            </p>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontSize: "2rem"}} align="center">Partner</TableCell>
                            <TableCell sx={{fontSize: "2rem"}} align="center">Leírás</TableCell>
                            <TableCell sx={{fontSize: "2rem"}} align="center">Weboldal</TableCell>
                            <TableCell sx={{fontSize: "2rem"}} align="center">Felhasznált termékek</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Kronospan</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Vezető faalapú panelek gyártója.<br/>
                                Ismert a kiváló minőségű és tartós termékeiről.</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center"><a href="https://kronospan.com/hu_HU" target="_blank">Kronospan</a> </TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">MDF lapok, forgácslapok, laminátumok</TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Egger</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Széles választékot kínál faalapú anyagokból.<br/> Az Egger az innovációjáról és a design sokféleségéről híres.</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center"><a href="https://www.egger.com/hu/?country=HU" target="_blank">EGGER</a></TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">MDF lapok, forgácslapok, laminátumok</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">FALCO</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Magyar márka, a Kronospan csoport tagja,<br/> amely kiváló minőségű anyagokat gyárt.</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center"><a href="https://www.falco-woodindustry.com/main.php?Lang=HU"
                                                         target="_blank">FALCO</a></TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Design lamináltlapok, natúr forgácslapok, építőlemezek</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">JAF Holz</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Nagy forgalmazó faanyagok terén Magyarországon, széles termékkínálattal.<br/> A JAF Holz számos globális márkával együttműködik.</TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center"><a href="https://www.jafholz.hu/" target="_blank">JAF Holz</a> </TableCell>
                            <TableCell sx={{fontSize: "1.5rem"}} align="center">Tömörfa, furnérok, panelek</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Grid>
            
    </Grid>
  );
}

export default Suppliers;