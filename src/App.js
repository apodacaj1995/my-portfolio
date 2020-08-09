import React from 'react';
import {HashRouter, Route} from 'react-router-dom'; 
import './App.css';
// import ContactPage from './contact-page';


import Header from './Components/Header';
import ContentHome from './Components/ContentHome';
import AboutHeader from './Components/AboutHeader';
import ContentAbout from './Components/ContentAbout';
import ProjectHeader from './Components/ProjectHeader';
import ProjectContent from './Components/ProjectContent';
import ContactHeader from './Components/ContactHeader';
import ContactContent from './ContactContent';
import Navbar from './Components/Navbar';
// import { render } from '@testing-library/react';
// import ContentProject from './Components/ContentProject';

function App() {
  return(
   
      <HashRouter>
            <div className="App">


                {/* <Header />  */}
                <Navbar />

                {/* <ContentHome />
                <AboutHeader />
                <ContentAbout />
                <ContactHeader />
                <ContactContent />
                <ProjectHeader />
                <ProjectContent /> */}


                <div className="content-section">
                    <Route exact path = "/" component={ContentHome}/>
                    <Route path="/thisisjackie" component={ContentAbout}/>
                    <Route path="/sayhi" component={ContactContent}/>
                    <Route exact path = "/seemyprojects" component={ProjectContent}/>


                </div>

          
            </div>
        </HashRouter>  
  )
}

export default App;
