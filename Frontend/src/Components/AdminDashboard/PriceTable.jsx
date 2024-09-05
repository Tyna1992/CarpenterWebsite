import {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import {
    TableCell,
    TableHead,
    Table,
    TableBody,
    TableContainer,
    Paper,
    TableRow,
    Typography,
    Button
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditingPriceForm from "../Forms/EditingPriceForm.jsx";
import AddPrice from "../Forms/AddPrice.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import {fetchPrices, handleDelete, handleEditClick, handleClose} from "../Utility/PriceTableFunctions.jsx";


function PriceTable() {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteJob, setDeleteJob] = useState(null);

    useEffect(() => {
        fetchPrices(setPrices, setLoading, setError);
    }, [])

    const handleAddClick = () => {
        setAddOpen(true); // Open the add price modal
    };

    const handleAddClose = () => {
        setAddOpen(false); // Close the add price modal
    };
    const handleDeleteClick = (job) => {
        console.log("Delete clicked for job:", job);
        setDeleteJob(job);
        setConfirmOpen(true); // Open the confirmation dialog when delete button is clicked
    };
    

   
    return (
        <Grid container sx={{PaddingLeft: "11rem"}}>
            {loading && <Typography variant="h1">Árak betöltése...</Typography>}
            {error && <Typography variant="h1">Hiba történt az árak betöltése közben.</Typography>}
            {prices.length === 0 && !loading && !error && <Typography variant="h1">Nincs megjeleníthető ár.</Typography>}
            {!loading && !error && (
                <Grid item xs={12}>
                    <Typography variant="h2">Árlista</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Munkatípus</TableCell>
                                    <TableCell>Ár</TableCell>
                                    <TableCell>Szerkesztés</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {prices.map((listItem) => (
                                    <TableRow key={listItem.id}>
                                        <TableCell>{listItem.job}</TableCell>
                                        <TableCell>{listItem.price} HUF</TableCell>
                                        <TableCell>
                                            <Button
                                                size="medium"
                                                variant="contained"
                                                onClick={() => handleEditClick(listItem,setSelectedPrice, setOpen)}
                                                startIcon={<EditIcon/>}
                                            >
                                                Szerkesztés
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="medium"
                                                variant="contained"
                                                onClick={() => handleDeleteClick(listItem.job)}
                                                startIcon={<DeleteIcon/>}
                                            >
                                                Törlés
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button variant="contained" size="medium" onClick={handleAddClick}>Új ár hozzáadása</Button>
                </Grid>
            )}
            {selectedPrice && (
                <EditingPriceForm
                    open={open}
                    handleClose={() => handleClose(setOpen, setSelectedPrice)}
                    price={selectedPrice.price}
                    job={selectedPrice.job}
                    setPrices={setPrices}
                    id={selectedPrice.id}
                />
            )}
            <AddPrice open={addOpen} handleClose={handleAddClose} setPrices={setPrices}/>
            <ConfirmDialog
                open={confirmOpen}
                setOpen={setConfirmOpen}
                title="Biztosan törli?"
                message="Ez a művelet végleges. Biztosan törölni szeretné?"
                onConfirm={() => handleDelete(deleteJob, setPrices, setError)}
            />
        </Grid>
    );
}

export default PriceTable;