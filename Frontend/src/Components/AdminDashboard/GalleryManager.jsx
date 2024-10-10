import {Box, Button, Typography, TextField, Grid, Select} from "@mui/material";
import {useEffect, useState} from "react";
import notify from "../Notifications/Notify.jsx";
import GalleryTable from "./GalleryTable.jsx";

function GalleryManager() {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const [galleryId, setGalleryId] = useState("");
    const [galleryName, setGalleryName] = useState("");
    const [galleryList, setGalleryList] = useState([]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);
        

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/Gallery/GetAll");
                const data = await response.json();
                setGalleryList(data);
                console.log(data);
            } catch (e) {
                console.error("Error fetching galleries:", e);
                setError(true);
            }
        }
        fetchData();
    }, []);

    const fetchGalleries = async () => {
        try {
            const response = await fetch("/api/Gallery/GetAll");
            const data = await response.json();
            setGalleryList(data);
        } catch (e) {
            console.error("Error fetching galleries:", e);
        }
    };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile); 
        }
    };
    
    const handleGalleryChange = (event) => {
        setGalleryId(event.target.value);
        console.log("Selected Gallery ID:", event.target.value)
    }
    const handleGallerySubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/Gallery/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: galleryName,
                }),
                
            })
            
            if (response.ok) {
                notify("Sikeres galéria létrehozás", "success");
                setGalleryName("");
                fetchGalleries();
            } else {
                notify("Hiba a galéria létrehozása során", "error");
                console.error("Error creating gallery:", response);
            }
        } catch (e) {
            console.error("Error creating gallery:", e);
            notify("Hiba a galéria létrehozása során", "error");
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("galleryId", galleryId);
        formData.append("description", description);
        formData.append("title", title);
        
        
        try {
            const response = await fetch("/api/Image/upload", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                notify("Sikeres képfeltöltés", "success");
                const data = await response.json();
                console.log(data);
                setFile(null);
                setDescription("");
                setGalleryId("");
                setTitle("");
                fetchGalleries();
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
    
    const handleCancel = () => {
        setFile(null);
        setDescription("");
        setGalleryId("");
        setTitle("");
    }

    return (
        <Grid container sx={{paddingLeft: '11rem', paddingTop: "2rem"}} spacing={2}>
            <Grid item xs={12} md={6}>
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
                        label="Név"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Leírás"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        multiline
                    />
                    <Select
                        label="Galéria"
                        onChange={handleGalleryChange}
                        fullWidth
                        native
                        value={galleryId}
                    >
                        <option value="" disabled>Válassz egy galériát</option>
                        {galleryList.map((gallery) => {
                            return (
                                <option key={gallery.id} value={gallery.id}>{gallery.name}</option>
                            )
                        }
                        )}
                    </Select>
                    <Button type="submit" variant="contained">Feltöltés</Button>
                    <Button variant="contained" type="button" onClick={handleCancel}>Mégse</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box 
                    component="form"
                    onSubmit={handleGallerySubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        mt: 5,
                        width: '50%',
                        margin: '0 auto',
                        paddingTop: '2rem',

                    }}
                >
                    <Typography variant="h4">Galéria létrehozása</Typography>
                    <TextField
                        label="Galéria név"
                        fullWidth
                        value={galleryName}
                        onChange={(e) => setGalleryName(e.target.value)}
                        />
                    <Button variant="contained" type="submit">Létrehozás</Button>
                    
                        
                </Box>
            </Grid>
            <Grid item>
                <GalleryTable galleries={galleryList} setGalleries={setGalleryList} setError={setError} />
            </Grid>
            
            
        </Grid>
        
    )
}

export default GalleryManager;