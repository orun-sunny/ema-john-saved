import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const navigate = useNavigate ();

    const handleRemove =key => {
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart);
        removeFromDb(key);

    }
    const handlePlaceOrder = () =>{
        navigate ('/PlaceOrder')
        clearTheCart (); 


    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map (product => <ReviewItem
                    key = {product.key}
                        
                        product = {product} 
                        handleRemove= {handleRemove}
                        
                        ></ReviewItem>)

        

                }

            </div>

            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className='btn-regular'>place oder</button>
             


                </Cart>

            </div>
            
        </div>
    );
};

export default OrderReview;