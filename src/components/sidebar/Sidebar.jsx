import React from 'react'
import Logopanel from './Logopanel';

const Sidebar = () => {
    return (
        <div
            className="sidebar"
            style={{
                height: '100vh',
                width: '10vw',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#202138',
                borderRadius: '0 2.5rem 3.5rem 0',
                position: 'fixed'
            }}
        >
            <Logopanel />
            <h2>Heroes</h2>
            <h2>Villains</h2>
            <h2>Search</h2>
        </div>
    );
}

export default Sidebar;