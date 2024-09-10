import Grid from "@mui/material/Grid";
import {
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useState, useEffect} from "react";



function Suppliers() {

    const [partners, setPartners] = useState([]);


    useEffect(() => {
        const fetchPartners = async () => {
            const response = await fetch("/api/Partner/GetAllPartners", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setPartners(data);
            }
        }
        fetchPartners();
    }, []);


    return (
        <Grid container sx={{paddingTop: "9rem"}}>
            <h1>Partnerek</h1>
            <Grid item xs={12}>
                <p style={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
                    Az alábbi partnerekkel, gyártókkal dolgozom együtt:
                </p>
                <TableContainer component={Paper}>
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
                            {partners.map((partner) => (
                                <TableRow key={partner.id}>
                                    <TableCell component="th" scope="row" sx={{fontSize: "1.5rem"}} align="center">
                                        {partner.name}
                                    </TableCell>
                                    <TableCell sx={{fontSize: "1.5rem"}} align="center">{partner.description.split(".")[0]}<br/>{partner.description.split(".")[1]}</TableCell>
                                    <TableCell sx={{fontSize: "1.5rem"}} align="center">
                                        <a href={partner.website} target="_blank">{partner.name}</a>
                                    </TableCell>
                                    <TableCell sx={{fontSize: "1.5rem"}} align="center">{partner.products}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>

        </Grid>
    );
}

export default Suppliers;