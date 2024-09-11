import {Box, Button, Drawer} from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import {NavigationItem} from "../../Components/AdminDashboard/NavigationItem.jsx";
import {useNavigate, Outlet} from "react-router-dom";
import LogoutButton from "../../Components/AdminDashboard/LogoutButton.jsx";


function AdminDashboard() {
    const navigate = useNavigate();
    const drawerWidth = 290;
    
    return (
        <Box sx={{display: "flex"}}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor:"rgba(150,113,71,0.9)",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {NavigationItem.map((item) => (
                        <ListItemButton key={item.id} onClick={() => navigate(item.route)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                    <LogoutButton/>
                </List>
            </Drawer>
            
                <Outlet/>
            
        </Box>
    )
}

export default AdminDashboard