
/**the blog component shall be here */
import React, { Component } from 'react';
import { Consumer } from '../Context';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import {IoIosEye } from 'react-icons/io'
import { TiThumbsOk } from 'react-icons/ti';


class Blog extends Component {
  constructor(props){
   super(props);
   this.main = React.createRef();
  }
  render() {

    return (
      <Consumer>
          {
              value => {
                  if(value.blogging.length === 0 || value.blogging === undefined)
                  {  
                      return (<Loader />)
                  }else{
                      return(
                        <section className="blogs_area" ref={this.main}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12 col-sm-12">
                                <h5 className="text-left">Latest Blogs</h5>
                                <div className="underliner">
                                  <div className="underlinerInner">                                   
                                  </div>
                                </div>
                              </div>
                            </div>
                           <div className="row">
                             {
                               value.blogging.map( (elem,index) => {
                                 const elems = [{...elem.fields}];
                                 return(
                                   elems.map( (elem,index) => {
                                     console.log('the small element',elem)
                                     //we are going to return the element here
                                     let img_src = {...elem.blogImage.fields.file}
                                     return (
                                       <React.Fragment key={index}>
                                       <div className="col-sm-12 col-md-4 mt-5 blog">
                                       <div className="imageContainer">
                                       <img src={img_src.url} className="blog-image" alt="BlogImage...." /> 
                                       </div>
                                       <div className="container">
                                       <div className="blog-content mb-5">
                                         <h6 className="blog-heading">CASE STUDY</h6>
                                         <Link to="/blogs/elem.BlogHeading" className="blog-title">{elem.blogHeading}</Link>
                                         
                                               <p className="blog-p">
                                                <span className="spanContent"><IoIosEye className="blog-icon"/> {elem.blogViews}</span>
                                                <span className="blog-Span"><TiThumbsOk className="blog-icon"/> {elem.blogClaps}</span>
                                               </p>
                                        
                                       </div>
                                       </div>
                                       </div>
                                       </React.Fragment>
                                     )
                                   })
                                 )
                               })
                             }
                           </div>
                          </div>
                        </section>
                      )
                  }
              }
          }
      </Consumer>
    )
  }
}

export default Blog
