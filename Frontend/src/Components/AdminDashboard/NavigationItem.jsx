import PriceChangeIcon from '@mui/icons-material/PriceChange';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export const NavigationItem = [
    {
        id: 9,
        icon: <PriceChangeIcon/>,
        label: "Árlista szerkesztése",
        route: "adminArlistaSzerk"
    },
    {
        id: 10,
        icon: <HandshakeIcon/>,
        label: "Partnerek szerkesztése",
        route: "adminPartnerekSzerk"        
    },
    {
        id: 12,
        icon: <ThumbsUpDownIcon/>,
        label: "Értékelések hitelesítése",
        route: "adminErtekelesekCheck"
    },
    {
        id: 13,
        icon: <NewspaperIcon/>,
        label: "Hírek szerkesztése",
        route: "adminHirekSzerk"        
    },
    {
        id: 15,
        icon: <TipsAndUpdatesIcon/>,
        label: "Blog szerkesztése",
        route: "adminBlogSzerk"        
    },
    {
        id: 16,
        icon: <AddPhotoAlternateIcon/> ,
        label: "Képfeltöltés",
        route: "adminGaleriaSzerk"
    }
    
];