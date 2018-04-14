import React, { PropTypes } from 'react'; 
import { NavLink } from 'react-router-dom'

import './styles.css'


const HeaderNavigation = () => {
    return (
        <ul className="header-nav">
            <li className="header-nav__item">
                <NavLink exact activeClassName="header-nav__link--active" className="header-nav__link" to="/">Home</NavLink>
            </li>
            <li className="header-nav__item">
                <NavLink activeClassName="header-nav__link--active" className="header-nav__link" to="/new-quote">New quote</NavLink>
            </li>
        </ul>
    )
}; 
//export default withRouter(HeaderNavigation);
export default HeaderNavigation;
