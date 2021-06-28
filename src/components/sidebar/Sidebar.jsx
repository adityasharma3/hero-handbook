import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Logopanel from './Logopanel';
import Home from '../Home/Home';
import Heroes from '../Heroes/Heroes';
import { Villains } from '../Villains/Villains';
import { Search } from '../Search/Search';

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