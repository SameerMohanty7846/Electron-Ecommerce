import React, { useEffect, useState } from 'react';
import ElectronContext from './ElectronContext';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const ElectronState = (props) => {
  const [products, setProducts] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/electron/products");
        if (!response.ok) {
          throw new Error("ERROR IN NETWORK");
        }
        const data = await response.json();
        setProducts(data);
        setOriginalData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        toast.error("Failed to load products");
      }
    };
    fetchData();
  }, []);

  const filterByCategory = (cat) => {
    setFilteredData(originalData.filter((data) => data.category === cat));
  };

  const addToCart = (id, title, imgSrc, description) => {
    const obj = { id, title, imgSrc, description };
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
    } else {
      alert("The item is already present in the cart");
    }
  };

  return (
    <ElectronContext.Provider
      value={{
        products,
        setProducts,
        filterByCategory,
        filteredData,
        setFilteredData,
        cart,
        setCart,
        addToCart,
      }}
    >
      {props.children}
    </ElectronContext.Provider>
  );
};

export default ElectronState;
