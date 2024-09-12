
import {useState} from "react";
import {Box, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

function StarRatings({ num, onChange}){
    
    
    
    const [hover, setHover] = useState(-1);
    
    return(
        <Box 
            sx={{width: 500, display: "flex", justifyContent: "center", paddingTop: "1rem", paddingBottom: "1rem"}}
        >
            <Rating
                name="simple-controlled"
                value={num}
                precision={1}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                size= "large"
            />

        </Box>
    );
}

export default StarRatings;