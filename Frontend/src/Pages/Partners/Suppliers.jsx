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
                            <TableCell align="center">Partner</TableCell>
                            <TableCell align="center">Leírás</TableCell>
                            <TableCell align="center">Weboldal</TableCell>
                            <TableCell align="center">Felhasznált termékek</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell align="center">Kronospan</TableCell>
                            <TableCell align="center">Vezető faalapú panelek gyártója.<br/>
                                Ismert a kiváló minőségű és tartós termékeiről.</TableCell>
                            <TableCell align="center"><a href="https://kronospan.com/hu_HU" target="_blank">Kronospan</a> </TableCell>
                            <TableCell align="center">MDF lapok, forgácslapok, laminátumok</TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Egger</TableCell>
                            <TableCell align="center">Széles választékot kínál faalapú anyagokból.<br/> Az Egger az innovációjáról és a design sokféleségéről híres.</TableCell>
                            <TableCell align="center"><a href="https://www.egger.com/hu/?country=HU" target="_blank">EGGER</a></TableCell>
                            <TableCell align="center">MDF lapok, forgácslapok, laminátumok</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">FALCO</TableCell>
                            <TableCell align="center">Magyar márka, a Kronospan csoport tagja, amely kiváló minőségű anyagokat gyárt.</TableCell>
                            <TableCell align="center"><a href="https://www.falco-woodindustry.com/main.php?Lang=HU"
                                                         target="_blank">FALCO</a></TableCell>
                            <TableCell align="center">Design lamináltlapok, natúr forgácslapok, építőlemezek</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">JAF Holz</TableCell>
                            <TableCell align="center">Nagy forgalmazó faanyagok terén Magyarországon, széles termékkínálattal.<br/> A JAF Holz számos globális márkával együttműködik.</TableCell>
                            <TableCell align="center"><a href="https://www.jafholz.hu/" target="_blank">JAF Holz</a> </TableCell>
                            <TableCell align="center">Tömörfa, furnérok, panelek</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Grid>
            
    </Grid>
  );
}

export default Suppliers;