import {ButtonBase, Dialog, DialogContent, DialogTitle, ImageList, ImageListItem, Typography, Button, DialogActions} from "@mui/material";
import React, {useState} from "react";
import ConfirmDialog from "../AdminDashboard/ConfirmDialog.jsx";
import notify from "../Notifications/Notify.jsx";


function GalleryImageList({imageData=[]}){

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    

    
    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    }

    const handleDeleteClick = () => {
        setConfirmOpen(true);  
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`/api/Image/delete/${selectedImage.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                notify("Image deleted successfully", "success");
                const updatedGalleries = galleries.map((gallery) => ({
                    ...gallery,
                    images: gallery.images.filter((image) => image.id !== selectedImage.id),
                }));
                setGalleries(updatedGalleries);
                setOpen(false);
            } else {
                notify("Error deleting image", "error");
            }
        } catch (error) {
            notify("Error deleting image", "error");
            console.error("Error:", error);
        }
        setConfirmOpen(false); 
    };
    
    
    return(
        <>
        <ImageList variant="masonry" cols={3} gap={8}>
            {imageData.map((image) => (
                <ImageListItem key={image.id}>
                    <ButtonBase onClick={() => handleClickOpen(image)}>
                        <img
                            src={`http://localhost:5180/${image.filePath}`}
                            alt={image.title}
                            loading="eager"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </ButtonBase>
                </ImageListItem>
            ))}
        </ImageList>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedImage?.title}</DialogTitle>
        <DialogContent>
            {selectedImage && (
                <>
                    <img
                        src={`http://localhost:5180/${selectedImage.filePath}`}
                        alt={selectedImage.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Typography variant="body1" style={{ marginTop: '16px' }}>
                        {selectedImage.description}
                    </Typography>
                </>
            )}
        </DialogContent>
    </Dialog>
        </>
    )
}

export default GalleryImageList;