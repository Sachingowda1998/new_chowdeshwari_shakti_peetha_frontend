import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Important for cookies
            });

            const result = await response.json();
            if (response.ok) {
                Cookies.set('userToken', result.token, { httpOnly: true });
                Swal.fire('Success', result.message, 'success')
                const destination = result.loginType === 'admin' ? '/admin' : '/user';
                navigate(destination); // Navigate to the respective panel
            } else {
                Swal.fire('Error', result.error, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'An unexpected error occurred', 'error');
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
