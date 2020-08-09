import React from 'react';
import logo from '../logo.png';
import './ProjectHeader.css';


export default class ProjectHeader extends React.Component {
    render () {
        return (
         <header className="project-header">
            <div className="Navbar">
            <div className="Logo">
                <img src={logo} className="App-logo" alt="logo" />
                </div>

                    {/* <NavbarThisIsJackie /> */}
                            <div className="whoisjackie2">
                                    who is jackie!
                            </div>

                    {/* <NavbarSayHi /> */}
                            <div className="sayhi2">
                            {/* <NavLink className="navbar_sayHi"></NavLink> */}
                                say hi!
                            </div>

                    {/* <NavbarProject /> */}
                        <div className="seemyprojects2">
                        {/* <NavLink className="navbar_project"></NavLink> */}
                                see my projects!
                            </div>
            </div>

            </header>
        )}}