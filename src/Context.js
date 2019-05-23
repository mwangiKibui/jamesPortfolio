import React, { Component } from 'react';
import Client from './Contentful';

const Context = React.createContext();

export class Provider extends Component {

  state = {
       blogging : [],
       articles : [],
       services : []
  }

  getServices = () => {
      Client.getEntries({content_type:"netblog"})
      .then( res => {
       this.setState({
         services:res.items
       })
      })
      .catch(err => {
          console.log(err)
      })
  }
  getBlog = () => {

    Client.getEntries({content_type:"netBlog2"})
    .then( res => {
      this.setState({
        blogging:res.items
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  getArticles = () => {

    Client.getEntries({content_type:"netBlog3"})
    .then( res => {
      this.setState({
        articles:res.items
      })
    })
     
    .catch( err => console.log(err))
    
  }
  // getData = () => {

  //   console.log('the services', services);
  //   console.log('the articles',articles);
  //   console.log('the blogs',blog);

  //   //set the services obj to state
  //   this.setState({
  //     services:services,
  //     articles:articles,
  //     blogging:blog,
  //   })

  // }

  componentDidMount(){

       this.getServices();
       this.getBlog();
       this.getArticles();
      

  }

  render() {
    //failure to include the this.props.children nothing between the provider tags shall be executed
    return (
      <Context.Provider value={this.state}>
         {this.props.children}
      </Context.Provider>
    )
  }
}
const Consumer = Context.Consumer
export {Consumer} 
