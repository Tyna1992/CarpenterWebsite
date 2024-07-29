import Grid from '@mui/material/Grid';
import CommonButton from "../../Components/Common/CommonButton/CommonButton.jsx";

function Introduction() {
  return (
    <Grid item xs={8}>
      <h1>Welcome to the React World</h1>
      <p>
        React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
          
      </p>
       <CommonButton variant="contained">Text</CommonButton>
    </Grid>
  );
}

export default Introduction;