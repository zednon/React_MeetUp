import React, { Component } from 'react';
import './App.css'
import tgtsnbn from './images/tgtsnbn.jpg';
// import { log } from 'util';
// import App from './components/App';


class App extends Component {

  // getMeetUpNext = () => {

  //   var queryURL = "https://api.meetup.com/2/events?key=711b1c41327ea3e2f1d2044b454361&group_urlname=TGTSNBN";

  //   var key = "711b1c41327ea3e2f1d2044b454361"

  //   fetch(queryURL).then(function (data) {
  //     return data.json();
  //   }).then(function (data) {
  //     console.log(data);
  //   });
  // }


  render() {
    return (
      <div className="App">
        <div className="WelcomeBody">
          <div className="uk-container">
  <header>
          <div><h1>Welcome the The Group That Shall Not Be Named!</h1></div>
            <div><p> We are HP-NYC, "The Group That Shall Not be Named". And Harry Potter isn't over till we say its over. We are the largest HP fan club in the world with over 2000 members. Our members span every type of person possible but we are united in our love of these books. We meet regularly on the 1st Thursday of every month and have special events almost every month. If you are looking for a way to meet new friends and forge new relationships in this huge city of ours, then you've come to the right place. We have a wide range of events and activities that are as diverse as the interests of our members. We strive to provide an experience that allows you to indulge in your talents and creativity while having a tremendously fun time.</p></div>
            </header>    
          
            <img src={tgtsnbn} id="logo" alt="NYC harry potter logo" />

              <nav className="uk-navbar-container" id="header">
                <div className="uk-container uk-container-expand">
                  <div uk-navbar>

                    <ul className="uk-navbar-nav" >
                      <li className="uk-active"><a href="https://www.meetup.com/TGTSNBN">To Join</a></li>
                     
                      <li>
                        <a href="../../formcontact.html">Contact Form</a>
                        <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active" color="yellow">Forms</li>
                            <li><a href="formcontact.html">Ask us to join you at an event</a></li>
                            <li><a href="#">Volunteer form</a></li>
                            <li><a href="#">Suggestion form</a></li>

                          </ul>
                        </div>
                      </li>
                      <li className="uk-active"><a href="">Up Coming Meet Ups</a></li>
                      <li className="uk-active"><a href="https://www.flickr.com/groups/tgtsnbn/">Flickr</a></li>
                      <li className="uk-active"><a href="database/staff.html">Staff Login</a></li>

                    </ul>
                  </div>
                </div>
              </nav>
           

 
        </div>
        </div>
        </div>
   )};


    }
export default App;
