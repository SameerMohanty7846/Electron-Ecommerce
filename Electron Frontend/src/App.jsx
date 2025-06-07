import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mobile from './pages/Mobile'
import Laptop from './pages/Laptop'
import Tablet from './pages/Tablet'
import Watch from './pages/Watch'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import SearchProduct from './pages/SearchProduct'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} > </Route>
          <Route path='/products/mobile' element={<Mobile />} > </Route>
          <Route path='/products/laptop' element={<Laptop />} > </Route>
          <Route path='/products/tablet' element={<Tablet />} > </Route>
          <Route path='/products/watch' element={<Watch />} > </Route>
          <Route path='/cart' element={<Cart />} > </Route>


          <Route path='/product/search/:term' element={<SearchProduct />}> </Route>


        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
