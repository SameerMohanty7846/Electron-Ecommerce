import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import ElectronContext from '../context/ElectronContext';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const SearchProduct = () => {
  const { term } = useParams();
  const { products, setProducts, addToCart } = useContext(ElectronContext);


  const searchedProducts = products.filter((data) => data.title.toLowerCase().includes(term.toLowerCase()));



  return (
    <>
    <ToastContainer/>
    
      <div className="outerDiv">
        {searchedProducts.map((data) => (
          <div className="innerDiv" key={data.id}>
            <img src={data.imgSrc} alt={data.title} className="product-image" />
            <h3 className="product-title">{data.title}</h3>
            <p className="product-description">{data.description}</p>
            <div className="button-group">
              <button className="btn buy-now">Buy Now</button>
              <button className="btn add-cart" onClick={() => addToCart(data.id, data.title, data.imgSrc, data.description)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

     <div>
                 <Link to={'/'}><button className='btn btn-warning mb-4 p-2' style={{textAlign:"center", marginLeft:"600px" }}>Continue Shopping</button></Link>

        </div>




    </>
  )
}

export default SearchProduct
