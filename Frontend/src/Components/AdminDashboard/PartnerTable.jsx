import {useEffect, useState} from "react";
import {fetchData, handleDelete, handleEditClick, handleClose} from "../Utility/GenericTableFunctions.jsx";
import GenericTable from "./GenericTable.jsx";
import GenericEditForm from "../Forms/GenericEditForm.jsx";
import GenericAddForm from "../Forms/GenericAddForm.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import Grid from "@mui/material/Grid";



function PartnerTable() {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deletePartner, setDeletePartner] = useState(null);

    useEffect(() => {
        fetchData(setPartners, setLoading, setError, "/api/Partner/GetAllPartners");
    }, [])

    const handleEditClickInternal = (item) => {
        handleEditClick(item, setSelectedPartner, setOpen);
    };

    const handleCloseInternal = () => {
        handleClose(setOpen, setSelectedPartner, null);
    };

    const handleDeleteClick = (item) => {
        setDeletePartner(item);
        setConfirmOpen(true);
    };

    const handleAddClick = () => {
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(`/api/Partner/DeletePartner/${deletePartner.id}`, deletePartner, setPartners, setError);
        setConfirmOpen(false);
    };

    const columns = [
        {id: 'name', label: 'Név'},
        {id: 'description', label: 'Leírás'},
        {id: 'website', label: 'Weboldal'},
        {id: 'products', label: 'Felhasznált termékek'},
    ];

    const editFields = [
        { id: "name", label: "Név", type: "text" },
        { id: "description", label: "Leírás", type: "text" },
        { id: "website", label: "Weboldal", type: "text" },
        { id: "products", label: "Felhasznált termékek", type: "text" },
    ];

    

    return (
        <Grid container>
            <GenericTable
                data={partners}
                columns={columns}
                name="Partnerek"
                onEditClick={handleEditClickInternal}
                onDeleteClick={handleDeleteClick}
                onAddClick={handleAddClick}
                loading={loading}
                error={error}
                emptyMessage="Nincs megjeleníthető partnerlista."
                editButtonLabel="Szerkesztés"
                isDisabled={false}
            />
            {selectedPartner &&(
                <GenericEditForm
                    open={open}
                    handleClose={handleCloseInternal}
                    initialData={selectedPartner}
                    fields={editFields}
                    route="/api/Partner/UpdatePartner"
                    setData={setPartners}
                    title="Partner szerkesztése"
                    
                />
                
            )}
            <GenericAddForm open={addOpen} handleClose={handleAddClose} setData={setPartners} title="Partner hozzáadása" route="/api/Partner/AddPartner" formDataKeys={columns}/>
            <ConfirmDialog
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={handleConfirmDelete}
                title="Biztosan törli?"
                message="Ez a művelet végleges. Biztosan törölni szeretné a partnert?"
            />
        </Grid>
        
    )

    
    
}

export default PartnerTable;