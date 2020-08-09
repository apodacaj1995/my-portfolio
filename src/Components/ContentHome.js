import React from 'react';
// import laptop from './Media/Images/laptop.png'
// import laptop from './laptop.png';

import './ContentHome.css';

export default class ContentHome extends React.Component {
    render(){
        return(
            <div className="Computer">
              {/* <img src={laptop}></img> */}
            <div className="slogan">
              <p>got websites to build?</p>
              <p>jackie's got the skill to get the job done!</p>
              <div id="space"></div>
              <p className="click">click a link to get started!</p>
              <p className="click" id="spanish">yo hablo espanol!</p>
        
            </div>
          </div>
    
        )
    
    }
}
