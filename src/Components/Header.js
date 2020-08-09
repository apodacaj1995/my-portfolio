import React from 'react';
import logo from '../logo.png';
import './Header.css';



export default class Header extends React.Component {

    render () {
        return(
            <header className="App-header"> 
            <div className="Logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
    
            <div className="Navbar">
                {/* <NavbarWho /> */}
                <div className="whoisjackie">
                {/* <NavLink className="navbar_who"></NavLink> */}
                  who is jackie?
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

        )
    }
}