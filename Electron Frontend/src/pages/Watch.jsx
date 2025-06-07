import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import ElectronContext from '../context/ElectronContext'
import VideoPlayer from '../components/VideoPlayer'
import { ToastContainer } from 'react-toastify';

const Watch = () => {
  const { filterByCategory, filteredData } = useContext(ElectronContext)
  const{products,setProducts,addToCart}=useContext(ElectronContext);

  useEffect(() => {
    filterByCategory("watches")
  }, [])
  return (
    <>
        <VideoPlayer src="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large.mp4"/>
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

export default Watch
