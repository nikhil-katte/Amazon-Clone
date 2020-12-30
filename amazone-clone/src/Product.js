import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({

            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                images: image,
                price: price,
                rating: rating,
            },
        });
        
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i)=>(
                    <p><img style={{height:15}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4qvVr01UveLwyx5jys4gfZN-F9Nh-7z_RA&usqp=CAU"></img></p>

                    ))}
                  
                </div>
            </div>
      
            <img style={{ maxHeight: 250, zIndex:-1}}src={image}></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
