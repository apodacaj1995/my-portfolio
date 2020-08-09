import React from 'react';
import logo from '../logo.png';
import './AboutHeader.css';


export default class About extends React.Component {
    render () {
        return (
         <header className="about-header">
            <div className="Navbar">
            <div className="Logo">
                <img src={logo} className="App-logo" alt="logo" />
                </div>

                    {/* <NavbarThisIsJackie /> */}
                            <div className="thisisjackie">
                                    this is jackie!
                            </div>

                    {/* <NavbarSayHi /> */}
                            <div className="sayhi">
                            {/* <NavLink className="navbar_sayHi"></NavLink> */}
                                say hi!
                            </div>

                    {/* <NavbarProject /> */}
                        <div className="seemyprojects">
                        {/* <NavLink className="navbar_project"></NavLink> */}
                                see my projects!
                            </div>
            </div>

            </header>
        )}}