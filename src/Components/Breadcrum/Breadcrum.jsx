import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
  const product = props;
  // console.log(product);
  // console.log(product.name);
  // console.log(product.category);
  return (
    <div className='breadcrum'>
        Home<img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon}/> {product.props.category} <img src={arrow_icon}/> {product.props.name}
    </div>
  )
}

export default Breadcrums