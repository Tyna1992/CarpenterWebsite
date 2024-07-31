import {ButtonBase, Dialog, DialogContent, DialogTitle, ImageList, ImageListItem, Typography} from "@mui/material";
import React, {useState} from "react";


function GalleryImageList({imageData=[]}){

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    }
    
    return(
        <>
        <ImageList variant="masonry" cols={3} gap={8}>
            {imageData.map((image) => (
                <ImageListItem key={image.id}>
                    <ButtonBase onClick={() => handleClickOpen(image)}>
                        <img
                            src={image.img}
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
                        src={selectedImage.img}
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