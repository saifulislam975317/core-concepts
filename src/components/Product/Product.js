import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>

                <img src={img} alt="" />

            </div>

            <div>

                <h2 className='product-name'>{name}</h2>
                <p><small>by:{seller}</small></p>
        
                <p>${price}</p>
                <p><small>Only {stock} left in the stock-order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='add-button'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;