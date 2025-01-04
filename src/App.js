import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import HomeApp from './Common/homeapp';
import Login from './Common/login';
import AdminApp from './AdminApp/AdminApp';
import UserApp from './UserApp/UserApp';
import HomeAppGeneral from './Common/homeappgeneral';
import { useNavigate } from 'react-router-dom';

// PrivateRoute Component
const PrivateRoute = ({ children, role }) => {
    const token = Cookies.get('userToken');
    const loginType = Cookies.get('loginType'); // Assuming backend sends this value

    if (!token) {
        return <Navigate to="/" replace />;
    }

    if (role && loginType !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

// Logout Function
// export const logout = (navigate) => {

//     Cookies.remove('userToken');
//     Cookies.remove('loginType');

//     navigate('/');
// };

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/*" element={<HomeAppGeneral />} />
                <Route path="/login" element={<Login />} />

                {/* Private Routes */}
                <Route
                    path="/admin/*"
                    element={
                        <PrivateRoute role="admin">
                            <AdminApp />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/user/*"
                    element={
                        <PrivateRoute role="user">
                            <UserApp />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
