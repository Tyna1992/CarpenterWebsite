import React from 'react';
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp';
import FilterSharpIcon from '@mui/icons-material/FilterSharp';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import ChairSharpIcon from '@mui/icons-material/ChairSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const navBarItems = [
    {
        id: 0,
        icon: <HomeSharpIcon />,
        label: "Bemutatkozó",
        route: "bemutatkozo"
    },
    {
        id: 1,
        icon: <HandshakeSharpIcon />,
        label: "Partnerek",
        route: "partnerek"
    },
    {
        id: 2,
        icon: <FilterSharpIcon />,
        label: "Galéria",
        route: "galeria"
    },
    {
        id: 3,
        icon: <LocalOfferSharpIcon />,
        label: "Árlista",
        route: "arlista"
    },
    {
        id: 4,
        icon: <InfoSharpIcon />,
        label: "Tájékozató",
        route: "tajekozato"
    },
    {
        id: 5,
        icon: <ChairSharpIcon />,
        label: "Bútor-kisokos",
        route: "butor-kisokos"
    },
    {
        id: 6,
        icon: <NewspaperSharpIcon />,
        label: "Hírek",
        route: "hirek"
    },
    {
        id: 7,
        icon: <AlternateEmailSharpIcon />,
        label: "Kapcsolat",
        route: "kapcsolat"
    },
    {
        id: 8,
        icon: <StarRateSharpIcon />,
        label: "Értékelések",
        route: "velemenyek"
    }
];

export default navBarItems;
