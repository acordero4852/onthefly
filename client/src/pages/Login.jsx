import React from 'react';

const Login = ({ api_url }) => {
    const AUTH_URL = `${api_url}/auth/github`;

    return (
        <div className='Login'>
            <h1>On the Fly ✈️</h1>
            <center>
                <a href={AUTH_URL}>
                    <button className="headerBtn"> 🔒 Login via Github </button>
                </a>
            </center>
        </div>
    );
};

export default Login;
