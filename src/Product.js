import React from 'react';
import './Product.css';

//This file creates and displays all the products which are being sold on our E-commerce website  
function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                {/* Price of items in Dollars */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* Rating in the form of stars*/}
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            {/* Here Images are passed */}
            <img src={image} alt=""/>   
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
