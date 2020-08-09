import React from 'react';
import logo from '../logo.png';

import './ContactHeader.css';

export default class ProjectContent extends React.Component {
    
    render () {
        return (
            <header className="contact-header">
                <div className="Navbar">
                    <div className="Logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                            {/* <NavbarThisIsJackie /> */}
                                    <div className="whoisjackie3">
                                            who is jackie!
                                    </div>

                            {/* <NavbarSayHi /> */}
                                    <div className="sayhi3">
                                    {/* <NavLink className="navbar_sayHi"></NavLink> */}
                                        say hi!
                                    </div>

                            {/* <NavbarProject /> */}
                                <div className="seemyprojects3">
                                {/* <NavLink className="navbar_project"></NavLink> */}
                                        see my projects!
                                    </div>
                </div>

            </header>

        )
    }
}    