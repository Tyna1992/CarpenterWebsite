import {Box, Rating} from "@mui/material";
function ReadOnlyRating({value}) {
    
  return (
    <Box>
      <Rating
        name="read-only"
        value={value}
        readOnly
      />
    </Box>
  );
}

export default ReadOnlyRating;