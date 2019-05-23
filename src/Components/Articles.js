import React, { Component } from 'react';
import {Consumer} from '../Context';
import Loader from './Loader';
import { MdAlarmAdd } from 'react-icons/md';
import { IoIosArrowRoundForward} from 'react-icons/io';
import { Link } from 'react-router-dom'
//import Moment from 'react-moment';
class Articles extends Component {
  render() {
    return (
      <Consumer>
          {
              value => {
                  if(value.articles.length === 0 || value.articles === undefined )
                  {
                      return(
                          <Loader />
                      )
                  }else{
                      //render our component
                      //we shall also render the articles in a similar manner
                      return(
                          <section className="articlesContainer">
                              <div className="container">
                            <div className="row">
                              <div className="col-md-12 col-sm-12">
                                <h5 className="text-left">Recent Articles</h5>
                                <div className="underliner">
                                  <div className="underlinerInner">                                   
                                  </div>
                                </div>
                              </div>
                            </div>


                <div className="row">
                                {
                                    value.articles.map((elem,index) => {
                                        const elems = [{...elem.fields}];
                                        return(
                                            elems.map( (elem,index) => {
                                                let _img_src = { ...elem.articleImage.fields.file};
                                                let _writer_src = {...elem.writerImage.fields.file}
                                                console.log('the articles are ',elem)
                                                return(
                                                    <div className="col-sm-12 col-md-4 mt-5 mb-5">
                                                    <div className="card cardHolder">
                                                    <img src={_img_src.url} alt="articlesImage" className="card-img-top articlesImage"/>
                                                    <div className="card-body">
                                                    <h6 className="headingDesc">{elem.specialization}</h6>
                                                    <h5 className="card-title">
                                                    <b>{elem.articleHeading}</b>
                                                    </h5>
                                                    <p className="cardText">
                                                    <span className="cardWriter cardFirst"><img src={_writer_src.url} alt="writerImage" className="writer-image" /> {elem.articleWriter}</span>
                                                    <span className="cardWriter"> <MdAlarmAdd className="icons" /> 2019-05-06</span>
                                                    </p>
                                                      <Link to=""><IoIosArrowRoundForward className="direct-links"/></Link>
                                                    </div>
                                                    </div>
                                                    </div>
                             )}))
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

export default Articles
