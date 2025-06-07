import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ElectronContext from '../context/ElectronContext'
import VideoPlayer from '../components/VideoPlayer'
import { ToastContainer } from 'react-toastify';

const Mobile = () => {
  const{filterByCategory,filteredData}=useContext(ElectronContext)
  const{products,setProducts,addToCart}=useContext(ElectronContext);

  useEffect(()=>{
    filterByCategory("mobiles")

  },[])
  return (
    <>
        <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4"/>
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

export default Mobile
