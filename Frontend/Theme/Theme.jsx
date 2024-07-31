import { createTheme } from '@mui/material/styles';

const primaryColor = '#8B5E3C'; // Rich brown color
const secondaryColor = '#D8A165'; // Lighter wood color

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        background: {
            default: '#F5F5F5', // Light grey
            paper: '#FFFFFF', // White for paper elements
        },
        text: {
            primary: '#3E2723', // Dark brown for primary text
            secondary: '#5D4037', // Medium brown for secondary text
        },
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h1: {
            fontFamily: `'Merriweather', serif`,
            fontWeight: 700,
            fontSize: '3rem',
            color: '#3E2723',
        },
        h2: {
            fontFamily: `'Merriweather', serif`,
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#3E2723',
        },
        body1: {
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: '1rem',
            color: '#5D4037',
        },
        body2: {
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: '0.875rem',
            color: '#5D4037',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                   
                },
                containedPrimary: {
                    backgroundColor: primaryColor,
                    '&:hover': {
                        backgroundColor: '#7A4E34',
                    },
                },
                containedSecondary: {
                    backgroundColor: secondaryColor,
                    '&:hover': {
                        backgroundColor: '#C28C5A',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryColor,
                    height: "15dvh",
                    width: "100dvw",
                    justifyContent: "center",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'space-around',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',                        
                    },
                    width: "6rem",
                    height: "6rem",
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    gap: '16px',
                    '@media (min-width: 600px)': {
                        gap: '24px', // Smaller gap for screen sizes larger than 600px
                    },                    
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '16px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                },
            },
        },
    },
});

export default theme;
