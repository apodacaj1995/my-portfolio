import React from 'react';
import logo from '../logo.png';

import './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component {


    render () {
    return ( 

        <nav className="navbar">
            {/* these links change the current route */}
            
            <NavLink to="/" className="navbar_link">
                <img src={logo} className="App-logo" alt="logo" />

            </NavLink>
            
            <NavLink to="/thisisjackie" className="navbar_link">
                <div className="whoisjackie">
                    who is jackie?
                </div>
            </NavLink>
            
            <NavLink to="/sayhi" className="navbar_link">
                <div className="sayhi">
                    say hi!
                </div>
            </NavLink>
            
            <NavLink to="/seemyprojects" className="navbar_link">
            <div className="seemyprojects">
                  see my projects!
                </div>
            </NavLink>

        </nav>    
        )
    }
}

export default Navbar;