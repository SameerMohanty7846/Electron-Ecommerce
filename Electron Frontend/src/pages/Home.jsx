import React, { useContext } from 'react'
import ElectronContext from '../context/ElectronContext';
import VideoPlayer from '../components/VideoPlayer';
import { ToastContainer } from 'react-toastify';
const Home = () => {
const{products,setProducts,addToCart}=useContext(ElectronContext);
  return (
    <>
    

      <VideoPlayer src="https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/large.mp4" />
<ToastContainer/>
  <div className="outerDiv">
  {products.map((data) => (
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

export default Home
