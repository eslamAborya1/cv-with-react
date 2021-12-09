import React from 'react';

class Home extends React.Component{ 
    render(){
        return(
        <div>
            
            <div class="box-outer">
        <div class="resume-box">
            <div class="box-1">
                
               <img src="85004184_2463158073790296_1021071836890267648_n.jpg"class="profile"/>
               <div class="content">
               <h1>About Me</h1>
               <p>
                   Eslam Aborya, student at faculty of computers and informations
                   <br/><br/>
               </p>
               <h1> Skills</h1>
               <p>Graphic Design</p>
               <div id="progress"></div>
               <p>Web Design</p>
               <div id="progress1"></div>
               <p>HTML</p>
               <div id="progress2"></div>
               <p>CSS </p>
               <hr/>
               <h1> languages</h1>
               <p>English</p>
               <div id="progress"></div>
               <p>German</p>
               <div id="progress1"></div>
               
               
               
            </div>
            </div>
        <div class="box-2">
          <div class="intro">
              <h1>Eslam Aborya</h1>
              <hr class="hr"/> 
              <div class="clearfix"></div>
              <p class="intro-p">2132 London All airports - LON,United Kingdom</p>
              <p>phone +(20)01069912975</p>
              <p>email:eslam.aborya1251@gmail.com</p>
          </div>
           <div class="content-2">
               <h1 class="head">Experience</h1>
               <p class="para-1">photoshop Designer at compiler community </p>
               
           </div>
           <div class="content-2">
            <h1 class="head">Education</h1>
            <p class="para-1"> study at faculty of computers and information at menoufia university</p>
            
        </div>
        </div>

        </div>


        </div>

        </div>
        );
    }
}

export default Home;