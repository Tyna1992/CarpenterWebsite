import {Box, Rating} from "@mui/material";
function ReadOnlyRating({rating}) {
  return (
    <Box>
      <Rating
        name="read-only"
        value={rating}
        readOnly
      />
    </Box>
  );
}

export default ReadOnlyRating;