
import {useState} from "react";
import {Box, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

function StarRatings(){
    const labels={
        1.0: "Rémes",
        2.0: "Elégtelen",
        3.0: "Közepes",
        4.0: "Megbízható",
        5.0: "Kiemelkedő"
    }

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    
    return(
        <Box 
            sx={{width: 500, display: "flex", justifyContent: "center", backgroundColor: "rgba(250,184,118,0.4)"}}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                getLabelText={getLabelText}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                size= "large"
            />
            {value !== null && (
            <Box  sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        </Box>
    );
}

export default StarRatings;