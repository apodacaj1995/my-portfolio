import React from 'react';

import Headshot from '../Components/Headshot.jpg';

import HTML from './Media/Icons/html.jpg';
import CSS from './Media/Icons/css.jpg';
import SCSS from './Media/Icons/sass.jpg';
// import SCSS from './Media/Icons.sass.jpg';
import JS from './Media/Icons/js.png';
import XD from './Media/Icons/xd.jpg';




import './AboutContent.css';


export default class ContentAbout extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="column">
                    <div className="ContentAbout">

                    <div>
                        <img className="headshot"src={Headshot}></img>
                    </div>

                    <div className="TabletPage">


                        <div className="info">
                            <div className="AboutInfo">
                                <div id="whatshedoes">
                                    what she does?
                                </div>
                            </div>
                                <div className="DescriptionContainer">
                                    <p className="Description">
                                        jackie is a web and front-end developer that specializes in creating aesthetic, interactive and functional websites with UI/UX in mind!
                                    </p>
                                </div>

                            <div className="AboutInfo">
                                <div id="whereshedoesit">
                                    where she does it?
                                </div>
                            </div>

                            <div className="DescriptionContainer">
                                <p className="Description">
                                    jackie is located in Albuquerque, NM but is able to cater to clients nationwide
                                </p>
                            </div>


                            <div className="AboutInfo">
                                <div id="howshedoesit">
                                    how she does it?
                                </div>
                                <div className="icons">
                                    <img className="html" src={HTML} alt="html"></img>
                                    <img className="css" src={CSS} alt="css"></img>
                                    <img className="js" src={JS} alt="js"></img>
                                    <img className="sass" src={SCSS} alt="scss"></img>
                                    <img className="xd" src={XD} alt="xd"></img>

                                </div>
                            </div>

                        </div>
                  </div>

</div>

                </div>

            </div>


        );



    };

        

            // <img src={headshot} alt="Headshot" className="headshot"></img>
            
            



}