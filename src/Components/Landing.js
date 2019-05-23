
/** we are going to handle the landing page right here  */

import React, { Component } from 'react';
import { Consumer } from '../Context';
import Loader from './Loader';
import {Link} from 'react-router-dom';
import { TiSocialFacebook,TiSocialInstagram,TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import Navbar from './Navbar'

class Landing extends Component {
    state = {
    socialMedia : [
      {
        fields : [ 
          {
            link:"www.facebook.com",
            icon:<TiSocialFacebook className="landing-buttons-icons" />
          },
          {
            link:"www.instagram.com",
            icon:<TiSocialInstagram className="landing-buttons-icons" />
          },
          {
            link:"www.Linkedin.com",
            icon:<TiSocialLinkedin className="landing-buttons-icons" />
          },
          {
            link:"www.twitter.com",
            icon:<TiSocialTwitter className="landing-buttons-icons" />
          },
          {
            link:"www.youtube.com",
            icon:<TiSocialYoutube className="landing-buttons-icons" />
          }
          ]
      }],
    }
  render() {
    return (
      <>
      <Consumer>
         {
             value => {
                 if(value.services.length === 0 || value.services === undefined)
                 {
                      return (<Loader />)
                 }else{
                     return(
                         
                         <section className="LandingPage">
                           <Navbar />
                           <section className="landing">
                             <div className="dark-overlay">
                               <div className="landing-inner">
                                 <h1 className="x-large text-center">James Mwathi</h1>
                                 <p className="lead"> Networking Engineer </p>

                                 <div className="landing-buttons">

                                    {
                                      this.state.socialMedia.map( (elem,index) => {
                                        let _arr = elem.fields;
                                        return(
                                          _arr.map( (elem,index) => {
                                            console.log(' whats rendered ', elem.link)
                                            return(
                                            <Link to={elem.link} key={index} >{elem.icon}</Link>
                                            )
                                          })
                                        )
                                      } )
                                    }

                                 </div>

                               </div>

                             </div>
                           </section>

                         </section>
                     )
                 }
             }
         }
      </Consumer>
    </>
    
    )
  }
}

export default Landing
