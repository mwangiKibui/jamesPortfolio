import React, { Component } from 'react';
import Services from './Services';
import Blog from './Blog';
import Articles from './Articles';
import Subscribe from './Subscribe';


import { BrowserRouter as Router,Route,Link,Switch,NavLink } from 'react-router-dom'


//we shall have the navbar here and then receive the components here and render them



export class Navbar extends Component {
  constructor(props){
    super(props)
    this.main = React.createRef();
  }
  state = {

  }

  handleOnScroll = (e) => {
  e.preventDefault();
  const main = this.main.current;
  window.scrollTo({
    top:main.offsetTop,
    left:0,
    behavior:"smooth"
  })
  }
    render() {
        return (
            <Router>
            <nav className="navbar bg-dark">
                <h1>
                  <Link to="/" className="links">
                  <i className="fas fa-code"></i>JM
                  </Link>
                </h1>
                  <ul>
                    <NavLink to="/services" onClick={this.handleScroll} className="navbar-links" activeStyle={{color:"red"}} >Services </NavLink>
                    <Link to="/blog" onClick={this.handleScroll}  className="navbar-links">Blog</Link>
                    <Link to="/articles" onClick={this.handleScroll} className="navbar-links">Articles</Link>
                    <Link to="/more" onClick={this.handleScroll} className="navbar-links">For more</Link>
                  </ul>
           </nav>
           <Switch>
             <Route exact path="/services" Component={<Services ref={this.main}/> } ></Route>
             <Route exact path="/blog" render={ () => ( <Blog ref={this.main}/> )} ></Route>
             <Route exact path="/articles" render={ () => ( <Articles ref={this.main} /> ) }></Route>
             <Route exact path="/more" render={ () => ( <Subscribe ref={this.main}/>)} ></Route>
           </Switch>
           </Router>
        )
    }
}

export default Navbar
