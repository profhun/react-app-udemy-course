import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <header>
        <h1>Kiadások</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>~</NavLink>
            <NavLink to="/add" activeClassName="is-active">+</NavLink>
            <NavLink to="/help" activeClassName="is-active">?</NavLink>
        </div>
    </header>
);

export default Header;