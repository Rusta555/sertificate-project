import React from 'react'


const Carousel = (props) => {
  return (
    <div className='carousel'>
        <img src="props.img" alt="product" />{props.image}

        <p>{props.title}</p>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <span>$</span>

    </div>
    
  );
}

export default Carousel




