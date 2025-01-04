import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import HomeApp from './homeapp';
import { useState, useEffect } from 'react';


const HomeAppGeneral = () => {

    // const loginType = Cookies.get('loginType');
    const [loginType, setLoginType] = useState(Cookies.get('loginType'));

    useEffect(() => {
        // Check for loginType cookie whenever the component mounts or when cookies are updated
        setLoginType(Cookies.get('loginType'));
    }, []);

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
