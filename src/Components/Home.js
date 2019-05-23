import React, { Component } from 'react';
import Landing from './Landing'
import Services from './Services';
import Blog from './Blog';
import Articles from './Articles';
import Subscribe from './Subscribe';
import Footer from './Footer';
import '../scss/style.css';


//lets test our context here
//remember you cannot render two components without a React.Fragment

export class Home extends Component {
  render() {
    return (
      <>
      <div>
      <Landing />
      </div>
      <div className="container">
      <Services />
      <Blog />
      <Articles />
      <Subscribe />
      <Footer />
      </div>
      </>
    )}
}
export default Home
