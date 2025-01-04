import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import HomeApp from './homeapp';



const HomeAppGeneral = () => {
    
    const loginType = localStorage.getItem('loginType');

    // If cookie is not present, redirect to the home page ("/")
    if (loginType === undefined) {
    return <HomeApp/>;
    }
 
    if (loginType === 'admin') {
        return <Navigate to="/admin" />;
    } else if (loginType === 'user') {
        return <Navigate to="/user" />;
    } else {
        return <HomeApp/>;
    }
   
}

export default HomeAppGeneral;
