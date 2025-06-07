import React, { useContext, useEffect, useState } from 'react'
import ElectronContext from '../context/ElectronContext'
import VideoPlayer from '../components/VideoPlayer'
import { ToastContainer } from 'react-toastify';

const Laptop = () => {
  const { filterByCategory, filteredData } = useContext(ElectronContext)
  const{products,setProducts,addToCart}=useContext(ElectronContext);

  useEffect(() => {
    filterByCategory("laptops")


  }, [])

  return (
    <>
      <VideoPlayer src="https://www.apple.com/105/media/ww/macbook-air/2025/0833fe28-c438-4dc4-8edc-e39ef30df5f9/anim/performance-hero/large.mp4" />

     <ToastContainer/>
     
      <div className="outerDiv">
        {filteredData.map((data) => (
          <div className="innerDiv" key={data.id}>
            <img src={data.imgSrc} alt={data.title} className="product-image" />
            <h3 className="product-title">{data.title}</h3>
            <p className="product-description">{data.description}</p>
            <div className="button-group">
              <button className="btn buy-now">Buy Now</button>
        <button className="btn add-cart" onClick={()=>addToCart(data.id,data.title,data.imgSrc,data.description)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Laptop
