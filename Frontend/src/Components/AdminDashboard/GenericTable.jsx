// GenericTable.jsx
import React from 'react';
import {
    TableCell,
    TableHead,
    Table,
    TableBody,
    TableContainer,
    Paper,
    TableRow,
    Button,
    Typography,
    Grid
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const GenericTable = ({
                          data,
                          columns,
                          onEditClick,
                          onDeleteClick,
                          onAddClick,
                          loading,
                          error,
                          name,
                          emptyMessage,
                          editButtonLabel = "Szerkesztés",
                          deleteButtonLabel = "Törlés",
                          addButtonLabel = "Új hozzáadása"
                      }) => (
    <Grid container sx={{PaddingLeft: "11rem"}}>
        {loading && <Typography variant="h1">Betöltés...</Typography>}
        {error && <Typography variant="h1">Hiba történt az adatok betöltésekor</Typography>}
        {data.length === 0 && !loading && !error && <Typography variant="h1">{emptyMessage}</Typography>}
        {!loading && !error && (
            <Grid item xs={12}>
                <Typography variant="h2">{name}</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((col) => (
                                    <TableCell key={col.id}>{col.label}</TableCell>
                                ))}
                                <TableCell>Szerkesztés</TableCell>
                                <TableCell>Törlés</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    {columns.map((col) => (
                                        <TableCell key={col.id}>{item[col.id]}</TableCell>
                                    ))}
                                    <TableCell>
                                        <Button
                                            size="medium"
                                            variant="contained"
                                            onClick={() => onEditClick(item)}
                                            startIcon={<EditIcon />}
                                        >
                                            {editButtonLabel}
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            size="medium"
                                            variant="contained"
                                            onClick={() => onDeleteClick(item)}
                                            startIcon={<DeleteIcon />}
                                        >
                                            {deleteButtonLabel}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" size="medium" onClick={onAddClick}>{addButtonLabel}</Button>
            </Grid>
        )}
    </Grid>
);

export default GenericTable;
