import {useState, useEffect} from "react";
import {fetchData, handleClose, handleEditClick} from "../Utility/GenericTableFunctions.jsx";
import GenericTable from "./GenericTable.jsx";
import {Grid} from "@mui/material";
import GenericEditForm from "../Forms/GenericEditForm.jsx";

function ReviewTable(){
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    
    useEffect(()=>{
        fetchData( setReviews, setLoading, setError, "/api/Review/GetAll")
    },[])
    
    
    const columns=[
        {id: 'name', label: 'Név'},
        {id: 'email', label: 'Email'},
        {id: 'rating', label: 'Értékelés'},
        {id: 'content', label: 'Komment'},
        {id: 'verified', label: 'Ellenőrzött'},
        {id: 'createdAt', label: 'Dátum'}
    ]
    
    const handleEditClickInternal = (item) => {
        handleEditClick(item, setSelectedReview, setOpen);
    }
    
    const handleCloseInternal = () => {
        handleClose(setOpen, setSelectedReview, null);
    }
    
    const editFields = [
        {id: 'name', label: 'Név', type: 'text', disabled: true},
        {id: 'email', label: 'Email', type: 'text', disabled: true},
        {id: 'rating', label: 'Értékelés', type: 'number', disabled: true},
        {id: 'content', label: 'Komment', type: 'text', disabled: true},
        {id: 'verified', label: 'Ellenőrzött', type: 'checkbox', disabled: false},
    ]
    
    return(
        <Grid container>
            <GenericTable
                data={reviews}
                columns={columns}
                loading={loading}
                error={error}
                emptyMessage="Nincs megjeleníthető elem"
                onEditClick={handleEditClickInternal}
                name="Értékelések"
                editButtonLabel="Hitelesítés"
                isDisabled={true}

            />

            {selectedReview &&(
                <GenericEditForm
                open={open}
                handleClose={handleCloseInternal}
                initialData={selectedReview}
                fields={editFields}
                setData={setReviews}
                route="/api/Review/Verify"
                title="Értékelés Hitelesítése"
                />
            )}
        </Grid>
            
        
    )
}

export default ReviewTable;