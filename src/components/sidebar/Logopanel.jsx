import React from 'react';
import logo from '../../assets/logo.png'

const Logopanel = () => {
    return (
        <a href='/'>
            <div
                className="logopanel"
                style={{
                    display: 'flex',
                    backgroundColor: '#7D5DF8',
                    borderRadius: '0 0 1rem',
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        display: 'block',
                        width: '5rem',
                        margin: '1rem auto',
                    }} />
            </div>
        </a>
    );
}

export default Logopanel;
//202138