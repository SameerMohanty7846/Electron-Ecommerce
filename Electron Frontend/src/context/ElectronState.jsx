import React, { useState } from 'react'
import ElectronContext from './ElectronContext'
import { items } from './data'
import { ToastContainer, toast,Bounce } from 'react-toastify';


const ElectronState = (props) => {
  const [products, setProducts] = useState(items);//for displaying and filtering
  const [originalData, setOriginalData] = useState(items);
  const [filteredData, setFilteredData] = useState(items);
  const [cart, setCart] = useState([]);

  const filterByCategory = (cat) => {
    setFilteredData(originalData.filter((data) => data.category == cat))
  }

  const addToCart = (id, title, imgSrc, description) => {
    const obj = { id, title, imgSrc, description };

    // Check if the item already exists in the cart
    const exists = cart.some(item => item.id === id);

    if (!exists) {
       toast.success("Item Added Into The Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
      setCart([...cart, obj]);
    }else{
      alert("The item is already present in the cart")
    }
  };








  return (
    <div>
      <ElectronContext.Provider value={{ products, setProducts, filterByCategory, filteredData, setFilteredData, cart, setCart, addToCart }} t>
        {props.children}
      </ElectronContext.Provider>
    </div>
  )
}

export default ElectronState
