import React, { useContext, useEffect } from 'react'
import ElectronContext from '../context/ElectronContext'
import VideoPlayer from '../components/VideoPlayer'
import { ToastContainer } from 'react-toastify';

const Tablet = () => {
  const { filterByCategory, filteredData } = useContext(ElectronContext)
  const{products,setProducts,addToCart}=useContext(ElectronContext);

  useEffect(() => {
    filterByCategory("tablets")
  }, [])
  return (
    <>
        <VideoPlayer src="https://www.apple.com/assets-www/en_WW/ipad/welcome/04854789d_large.mp4"/>

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

export default Tablet
