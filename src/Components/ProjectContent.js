import React from 'react';
// import logos from '../Components/logos.jpg';
import design from '../Components/design.png';
import logos from '../Components/logos.png';
import funstuff from '../Components/fun-stuff.png';
import './ProjectContent.css';



export default class ProjectContent extends React.Component {
    
render () {
    return(
        <div className="ProjectContent">
            <div className="row">
                <div class="column">
                        <img className="logo-icon" src={logos} alt="logo-icon"></img>
                    </div>
                    <div class="column">
                        <img className="design-icon" src={design} alt="design-icon"></img>
                    </div>
                    <div class="column">
                        <img className="funstuff-icon" src={funstuff} alt="funstuff-icon"></img>
                    </div>


            </div>
            <p className="more">click a link to learn more!</p>

        </div>
    )
}
}





