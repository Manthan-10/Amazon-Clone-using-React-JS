import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__Ad" src="" alt="" />
            </div>

            <div className="checkout__title">               
                <h1>Your Shopping Basket</h1>
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}

            </div>

            <div classname="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
