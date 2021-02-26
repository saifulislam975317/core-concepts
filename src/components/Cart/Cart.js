import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total, prod)=>total+prod.price ,0)
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
  
    }

    let Shipping=0;
    if(total>35){
        Shipping=0;
    }else if(total>15){
        Shipping=4.99
    }else if(total>0){
        Shipping=12.99
    }

    let tax=Math.round(total*0.1);

    return (
        <div>
            <h4>Order Summery:</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p>Shipping cost:{Shipping}</p>
            <p><small>VAT + Tax:{tax}</small></p>
            <p>Total Price:{total+Shipping+tax}</p>
        </div>
    );
};

export default Cart;