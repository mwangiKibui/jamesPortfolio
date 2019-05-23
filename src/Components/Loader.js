import React from 'react';
import image from '../images/loader.gif';

const Loader = () => {
    const style = {
        width:'100px',
        marginLeft:"auto"

    }
  return (
    <div className="container text-center">
        <img src={image} alt="loading...." style={style}/>
    </div>
  )
}

export default Loader;
