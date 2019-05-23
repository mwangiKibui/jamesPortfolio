// we shall start from here the services part
import React, { Component } from 'react';
import { Consumer } from '../Context';
import {Link} from 'react-router-dom';
import Loader from './Loader';
import './Style.css';
import { TiArrowRight } from 'react-icons/ti'

class Services extends Component { 
  render() {
    return (
      <Consumer>
        {
          value => {
            if(value.services.length === 0 || value.services === undefined)
            {
              return(<Loader />)
            }else{
                     return (
                      <section className="services_area" ref={this.props.ref}>
                      <div className="container">
                        <div className="row">
                         <div className="col-md-12 col-sm-12">
                              <h5 className="text-left">what i do</h5>
                              <div className="underliner">
                                <div className="underlinerInner"></div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="row">
                          {
                              value.services.map( (elem,index) => {
                                   let elems = [{...elem.fields}]

                                 return(
                                   elems.map ( (elem,index) => {
                                     let service_img = { ...elem.serviceImage.fields.file}
                                     console.log(elem)
                                       return(
                                         <>
                                        <div className="col-md-3 col-sm-12 mt-5 mb-5 service">
                                        <div className="service-imageContainer">
                                        <img src={service_img.url} alt="ServiceImage..." className="service-imageContainer-image" />
                                        </div>
                                        <h5 className="service-heading text-center">{elem.service}</h5>
                                        <div className="service-Desc">
                                          <p className="text-center">{elem.serviceDesc}</p>
                                        </div>
                                        <Link to='/services/:elem.service'><TiArrowRight className="service-Link" /></Link>
                                         </div>
                                         </>
                                       )
                               })
                                 )})
                                 }
                        </div>
                        </div>
                    </section>
                     )}}
                   }
      </Consumer>
    )
  }
}

export default Services
