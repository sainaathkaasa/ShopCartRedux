import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseCount, cartItems, count, removeItemFromCart, updateCount } from '../dux/cartSlice';
import '../Styles/ToDisplayCartItems.css'
const ToDisplayCartItems = () => {
  const cart = useSelector(cartItems);
  const dispatch=useDispatch()
  const cartItemsCount=useSelector(count)
  

  const handleIncrease=(val:any)=>{
    if(val.quantity <10){
      dispatch(updateCount(val))
      
    }
             
  }

  const handleDecrease=(val:any)=>{
    if(val.quantity >1){
      dispatch(DecreaseCount(val))
    }
             
  }

  let total_price = 0
  cart?.map((item:any)=>{
    total_price = total_price +(item.price * item.quantity)
  })

  const cartDeleteItem=(val:any)=>{
    dispatch(removeItemFromCart(val))

  }

  let TorF = false
  if(cartItemsCount=== 0){
    TorF = true
  }


  

  return (
    <>
      <div className="myCart">
        <h1>My Cart Items</h1>
        <h2>Total Price : {total_price} $</h2>
      </div>
    { !TorF &&
    <div>
        <div className="cartDisc">
          <div className='iteming'>
            <h3 >Item</h3>
          </div>
          <div className='itemname'>
          <h3 >Item name</h3>
          </div>
          
          <div className='qunt'>
            <h3>Qunatity</h3>
          </div>
          <div className='cartS'>
            <h3 >Price</h3>
          </div>
          <div>
            <h3>Remove</h3>
          </div>
          
          

        </div>
        <div>

        </div>
        <div className="ToDisplayCartItems">
          {cart?.map((val: any) => (
            <div key={val.id} className="items">
              <div className="items--img">
                <img src={val.thumbnail} alt="" height={100} width={100} />
              </div>
              <div className="items--title">
                <h3>{val.title}</h3>
              </div>
              <div>
                <button onClick={()=>handleIncrease(val)}>+</button>
               
              </div>
              <div>
              <h3>
              {val.quantity}
              
              </h3>
                
              </div>
              <div>
              <button onClick={()=>handleDecrease(val)}>-</button>
              </div>
              <div className="items--price">
                <h3>
                  {val.price*val.quantity} <i className="fa-solid fa-dollar-sign"></i>
                </h3>
              </div>
              <div>
                <button onClick={()=>cartDeleteItem(val)}>
                <i className="fa-solid fa-x"></i>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      
      // <h1 className='cartempty'>YOUR CART IS EMPTY</h1>
    }
    {
      TorF && <h1 className='cartempty'>YOUR CART IS EMPTY</h1>
    }
    </>
  );
};

export default ToDisplayCartItems;