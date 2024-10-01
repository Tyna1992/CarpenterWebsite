import {Box, Button, Typography, TextField} from "@mui/material";
import {useState} from "react";
import notify from "../Notifications/Notify.jsx";

function GalleryUpload() {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const [galleryId, setGalleryId] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile); 
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("galleryId", galleryId ? galleryId : null);
        formData.append("description", description);
        
        try {
            const response = await fetch("/api/Image/upload", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                notify("Sikeres képfeltöltés", "success");
                setFile(null);
                setDescription("");
                setGalleryId("");
                console.log(response)
            } else {
                notify("Hiba a képfeltöltés során", "error");
                console.error("Error uploading image:", response);
            }

        } catch (e) {
            console.error("Error uploading image:", e);
            notify("Hiba a képfeltöltés során", "error");
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                mt: 5,
                width: '50%',
                margin: '0 auto',
                paddingLeft: '11rem'
            }}
        >
            <Typography variant="h4">Képfeltöltés</Typography>
            <Button variant="contained" component="label">Fájl kiválasztása
                <input type="file" hidden onChange={handleFileChange}></input>
            </Button>
            {file && (
                <Typography variant="body2" color="textSecondary">
                    Kiválasztott fájl: {file.name}
                </Typography>
            )}
            <TextField
                label="Leírás"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
            />
            <TextField
                label="Galéria"
                value={galleryId}
                onChange={(e) => setGalleryId(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained">Feltöltés</Button>
        </Box>
    )
}

export default GalleryUpload;