import React from "react";
import './display.css'
 
function Product(props) {
return (
<div className="container text-center">
    <div className="card">
        <h2 className="gri">What our customer are saying</h2>
        <img className="brt" src={props.description} alt="" /> 
        <div className="row">
            <div className='col-sm-12 col-md-12 col-lg-2'>
                <img className="product--image" src={props.url} alt="productimage" />
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 mor'>
                <h4 className="bum">{props.name}</h4>
                <p className="get">{props.price}</p>
            </div>      
            <div className='col-sm-12 col-md-12 col-lg-6 all'>
                <p className="text">{props.text}</p>
            </div>
        </div>
    </div>
</div>

);
}

export default Product