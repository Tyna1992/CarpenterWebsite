import {useEffect, useState} from "react";
import {fetchData, handleDelete, handleEditClick, handleClose} from "../Utility/GenericTableFunctions.jsx";
import GenericTable from "./GenericTable.jsx";


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

    return (
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
        />
    )

    
    
}

export default PartnerTable;