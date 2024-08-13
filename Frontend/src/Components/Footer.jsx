import {Box, Link, Typography} from "@mui/material";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 1,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? 'rgba(136,108,68,0.85)' : 'rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                height: "4rem",
                paddingTop: "1rem",
            }}
        >
            <Typography variant="body1" color="text.primary">
                © 2024 Szanyi Bálint Asztalos
            </Typography>
            
        </Box>
    );
}

export default Footer;