import {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import GenericEditForm from "../Forms/GenericEditForm.jsx";
import GenericAddForm from "../Forms/GenericAddForm.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import {fetchData, handleDelete, handleEditClick, handleClose} from "../Utility/GenericTableFunctions.jsx";
import GenericTable from "./GenericTable.jsx";


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
        fetchData(setPrices, setLoading, setError, "/api/Price/GetAllPrices");
    }, [])

    const handleEditClickInternal = (item) => {
        handleEditClick(item, setSelectedPrice, setOpen);
    };

    const handleCloseInternal = () => {
        handleClose(setOpen, setSelectedPrice, null);
    };

    const handleDeleteClick = (item) => {
        setDeleteJob(item);
        setConfirmOpen(true);
    };

    const handleAddClick = () => {
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(`/api/Price/DeletePrice/${deleteJob.job}`, deleteJob, setPrices, setError);
        setConfirmOpen(false);
    };

    const columns = [
        {id: 'job', label: 'Munkatípus'},
        {id: 'price', label: 'Ár (HUF)'},
        
    ];

    const editFields = [
        { id: "job", label: "Munkatípus", type: "text" },
        { id: "price", label: "Ár", type: "number" },
    ];
    
    const dataKeys= [{id: "job", label: "Munkatípus"}, {id:"price", label: "Ár"}]

    return (
        <Grid container sx={{PaddingLeft: "11rem"}}>
            <GenericTable
                data={prices}
                columns={columns}
                name="Árak"
                onEditClick={handleEditClickInternal}
                onDeleteClick={handleDeleteClick}
                onAddClick={handleAddClick}
                loading={loading}
                error={error}
                emptyMessage="Nincs megjeleníthető ár."
                editButtonLabel={"Szerkesztés"}
                isDisabled={false}
            />
            {selectedPrice && (
                <GenericEditForm
                    open={open}
                    handleClose={handleCloseInternal}
                    initialData={selectedPrice}
                    fields={editFields}
                    setData={setPrices}
                    route="/api/Price/UpdatePrice"
                    title="Ár szerkesztése"
                />
            )}
            <GenericAddForm open={addOpen} handleClose={handleAddClose} setData={setPrices} route="/api/Price/AddPrice" title="Ár hozzáadása" formDataKeys={dataKeys}/>
            <ConfirmDialog
                open={confirmOpen}
                setOpen={setConfirmOpen}
                title="Biztosan törli?"
                message="Ez a művelet végleges. Biztosan törölni szeretné?"
                onConfirm={handleConfirmDelete}
            />
        </Grid>
    );
}

export default PriceTable;