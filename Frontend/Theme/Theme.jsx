import { createTheme } from '@mui/material/styles';
import backgroundImage from "../src/assets/background.jpg"

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
            default: '#FAF3E0', // Light grey
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
            color: '#593835',
        },
        h2: {
            fontFamily: `'Merriweather', serif`,
            fontWeight: 700,
            fontSize: '2rem',
            color: '#3E2723',
        },
        p:{
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: '1.5rem',
            color: '#fbf4f5',
        },
        body1: {
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#1a1a1a',
        },
        body2: {
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: '1rem',
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
                    backgroundColor: "rgba(139,94,60,0.9)",
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
        MuiGrid:{
            styleOverrides:{
                root:{
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    textAlign: "center",
                    justifyContent: "center",
                    borderRadius: "8px",                   
                    
                },
                
            }
        },
        MuiAccordion:{
            styleOverrides:{
                root:{
                    backgroundColor: "rgba(208,165,130,0.54)",
                    
                }
            }
        },
        MuiCssBaseline:{
            styleOverrides:{
                body:{
                    backgroundImage: `url(${backgroundImage})`,
                    overflowY: "scroll"
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center",
                    // width: '100%',
                    // minHeight: '100vh',
                }
            }
        }
        
    },
});

export default theme;
