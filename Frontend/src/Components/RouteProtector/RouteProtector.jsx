
import {Navigate, useNavigate} from "react-router-dom";
import {UserContext} from "../Context/UserContext.jsx";
import {useContext} from "react";


function RouteProtector({item}) {
    const {user, setUser} = useContext(UserContext);
        
    if(user === null)
    {
        return <div>Loading...</div>;
    }
    
    if(user.username === "admin")
    {
        return item;
    }

    return <Navigate to="/" />;
    
    
}

export default RouteProtector;