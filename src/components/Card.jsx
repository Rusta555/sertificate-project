import React from 'react'


const Card = (props) => {
  return (
    <div className='card'>
        <img src="props.img" alt="product" />{props.image}

        <p>{props.title}</p>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <span>$</span>

    </div>
    
  );
}

export default Card