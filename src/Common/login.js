import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
                // credentials: 'include', // Important for cookies
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('userToken', result.token);
                localStorage.setItem('loginType', result.loginType);
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
        <>
            {/* <div className="container mt-5">
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
            </div> */}
    
            <section style={{ backgroundColor: '#F19327' }}>
  <div className="container px-4 py-5">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col col-xl-10">
        <div className="card shadow" style={{ borderRadius: '1rem' }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="/loginphoto.jpg"
                alt="login form"
                className="img-fluid h-100"
                style={{ borderRadius: '1rem 0 0 1rem' }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={handleLogin}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    {/* <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: '#ff6219' }}
                    ></i>
                    <span className="h1 fw-bold mb-0">Logo</span> */}
                    <img src="/websitelogo.jpg" className='img-fluid rounded'/>
                  </div>

                  <h5 className="fw-normal fs-4 mb-3" style={{ letterSpacing: '1px' }}>
                    Sign into your account
                  </h5>

                  <div data-mdb-input-init className="form-outline mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  </form>
                  <p className="mb-3 pb-lg-2" style={{ color: '#572503' }}>
                    Don't have an account?{'   '}
                    <a href="" style={{ color: '#572503' }}>
                      Register here
                    </a>
                  </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default Login;
