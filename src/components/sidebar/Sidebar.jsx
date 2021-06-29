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

            <a href='/heroes'><h2>Heroes</h2></a>
            <a href="/villains"><h2>Villains</h2></a>
            <a href="/search"><h2>Search</h2></a>

        </div>
    );
}

export default Sidebar;