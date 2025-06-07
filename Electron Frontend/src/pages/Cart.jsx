import React from 'react'
import { useContext } from 'react'
import ElectronContext from '../context/ElectronContext'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { cart,setCart } = useContext(ElectronContext)
  const remove=(id)=>{
    setCart(cart.filter((data)=>data.id!=id))

  }
  const  clearCart=()=>{
    setCart([])
  }
  return (
    <div>
      {cart.length>0 &&       <button onClick={clearCart} className="btn btn-danger  m-4  p-2   clear-cart"> CLEAR CART</button> }
      <div className="outerCart">
        {cart.map((data) => (
          <div className="innerCart" key={data.id}>
            <img src={data.imgSrc} alt={data.title} className="product-image" />
            <h3 className="product-title">{data.title}</h3>
            <p className="product-description">{data.description}</p>
            <div className="button-group">
              <button className="btn buy-now">Buy Now</button>
              <button className="btn   remove-cart" onClick={() => remove(data.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
        <div>
                 <Link to={'/'}><button className='btn btn-warning mb-4 p-2' style={{textAlign:"center", marginLeft:"600px" }}>Continue Shopping</button></Link>

        </div>




    </div>
  )
}

export default Cart
