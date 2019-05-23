import React, { Component } from 'react';
import { IoIosArrowRoundForward} from 'react-icons/io';
import { Link } from 'react-router-dom'

export class Subscribe extends Component {
  state = {
    subscribeEmail : '',
    AccountEmail : '',
    AccountPassword : ''

  }
  subEvent = (e) => {
    //perform other checks for email
    //update the state
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  subscribe = (e) => {
    e.preventDefault();
    console.log(`we shall work on the subscribe capability`);

    //update the state
    this.setState({
      subscribeEmail : ''
    })
  }
  
  emailUpdate = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })

  }

  passwordUpdate = (e) => {
    //we are going to update the state
    this.setState({
      [e.target.name] : e.target.value
    })

  }

  createAccount = (e) => {
    console.log("thankyou for creating an account with us.. shall be handled from here")
    this.setState({
      AccountEmail:'',
      AccountPassword:''
    })
  }


  render() {
    //we shall render the subscribe area and the create account area

    return (
      <>
        <div className="container">
          <div className="row">
          <div className="col-md-12 col-sm-12">
          <div className="underliner">
          <div className="underlinerInner">                                   
          </div>
          </div>
          </div>
          </div>
          </div>
          
          <section className="subscribeSection"> 
          <div className="container">
          <div className="row">
          
            <div className="col-md-6 col-sm-12 mt-5  subscribeContainer">
              <h3 className="subscribe-heading">BECOME A PATREON</h3>
              <div className="subscribeContent">
              <div className="small-underliner"></div>
                <p className="subscribe-inner">
                  James spends most of his time understanding and developing networks.Join patreon to be
                  able to support his work. kshs 10/= per month would mean a world to him.
                </p>
                <div className="subscribe-btn mb-2">
                <Link to="/" className="btn btn-primary">Become a patreon</Link>
              </div>
              </div>
              
            </div>

            <div className="col-md-6 col-sm-12 mt-5">
                   
                   <h3 className="subscribHeading">SUBSCRIBE NOW</h3>
                   
                   <div className="subscribe_content">
                   <div className="small-underliner"></div>
                     <form onSubmit={this.subscribe}>
                       <div className="form-group">
                         <input type="email" 
                         name="subscribeEmail" 
                         value={this.state.SubscribeEmail}
                         placeholder="Enter email"
                         className="form-control"
                         />
                       </div>
                       <div className="form-groupmb-2">
                         <button type="submit" className="submitBtn"><IoIosArrowRoundForward className="submitBtn-icon" /></button>
                       </div>

                     </form>

                   </div>

            </div>
            </div>
          </div>
      </section>
      </>
    )
  }
}

export default Subscribe
