import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import ElectronContext from '../context/ElectronContext';


const Navbar = () => {
  const { cart, products, setProducts, filteredData, setFilteredData } = useContext(ElectronContext);
  const [searchTerm, setSearchTerm] = useState("")
  const location = useLocation();
  const navigation = useNavigate();

  const handleSubmit = () => {
    navigation(`/product/search/${searchTerm}`)
    setSearchTerm("")

  }
  return (
    <>
      <div className="navbar-container sticky-top shadow">

        <nav className="navbar navbar-dark bg-dark py-3">
          <div className="container-fluid d-flex justify-content-between align-items-center">

            {/* Logo */}
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src="data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSCcCAAARkGxr27E39/19f2zbtkd1Y+cYartjN07mtX7Utm0ztu38Kv8vOISImABMO+HI0ViBmC6nIBzamtraHaUoMd2gIfkZ3V47gbNicVqn+9CvMjMAQE6Hguf69b77tBsFEoQkAZOwxQn+MpKg0dHWgIQAU5ASjsWtv37rNY/DSedVV7t0V3S61lJnicBvmqur0zKWZ1plXR/7VVf44H3m2hvqrz4ERLk6iwCE1If6rsr5JihRh5FZY6Ui4VmjAkD/89qmHd4EkKVbBVD+1p4I6NtDCEs6Jyo8BBi6DB4mWNgSQFp+UZgabdN8X0BIy6pekdYnH9qQQmVP+B79NXsAIAHweRuZ0rNPBmDB4AfdFTMAEAtWGAE4OyoTz/YlEYCY3nvNHIZpGl0mgBNqk7WafSIAeN/pupsl4fXthz9Ahdr0ptwSALhRv+/BWB4BwNoKAK+NymL8aGB8vMrO//HEdhNCWnjcTEhbfjomijZK7d0wSplU3QZEb3uBSNZqykxpvr5nuMRFImx4N81K2r8tIu803dVnEoy8qxso9iKxWpsupurutTwi371X6jLBwnWyvI/6yaebokrbnezWa49VvSSy+oYVFqC8x4+yFHmXXtPf39Cn6RnoyAQYmWwCIFNTKACwTX/w5sjx/euDwv0IAARBC8VgMgEmDxSTBEkQhgTpU9eRLspSq7rnGICQJgAyuU396ZOmNVUAAAKUAGjoVvj6xS53ACAJggBWUDgg1AAAAHAGAJ0BKhwAHAA+kSikUiWhpaWUALASCWwAnTKEdV2gNtndwACmFwHP3DpNjp2W5Ojlobw6+4cWdy7gAAD+uSrbFNUiWzzfMWJVcbbPcr0XAYjEM5xecTJ2dqjDR6eHhqJOBWgWr1lC0le3TKrElsGg+ABY4spdfrYor/iGq9sdj9k7ZFEhCtfupSwzPR4cyU4KLaosLDWcOjbzroxYu8mpgOieaV8NEYvB3wsJDHgWrYIp0iRHspUzoi4fgqMkUaLrmC4oHv4CtYF00DbMKYdQNEAA"
                alt="Logo"
                height="40"
                className="me-2"
              />
              <span className="text-white fw-bold">Electron</span>
            </Link>

            {/* Searchbar */}
            <div className="d-flex align-items-center search-bar me-3">
              {location.pathname != '/cart' &&
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                  />

                </form>

              }
              {location.pathname != '/cart' &&
                <button className='btn btn-sm btn-info ms-4 p-1'>LOOGIN/SIGNUP</button>
              }
              {location.pathname == '/cart' &&
                <span className='btn btn-lg btn-info ms-4 p-1 ' style={{ marginRight: "100px" }}>CART</span>
              }



            </div>

            {/* Right side */}
            <div className="d-flex align-items-center gap-3">

              {/* Cart Button */}
              <Link
                style={{ marginRight: "50px" }}
                to="/cart"
                className="btn btn-outline-warning position-relative d-flex align-items-center justify-content-center gap-2 rounded-pill px-3 py-2 shadow-sm"
              >
                <FaShoppingCart size={18} />
                <span className="cart-badge badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cart.length}
                </span>
              </Link>



            </div>

          </div>
        </nav>

        {/* Categories bar */}

        {(location.pathname !== '/cart' && !location.pathname.startsWith('/product/search/')) && (
          <div className="categories-bar bg-secondary py-2">
            <div className="container-fluid d-flex flex-wrap justify-content-center">
              <Link to="/" className="category-link">All</Link>
              <Link to="/products/mobile" className="category-link">Mobiles</Link>
              <Link to="/products/laptop" className="category-link">Laptops</Link>
              <Link to="/products/tablet" className="category-link">Tablets</Link>
              <Link to="/products/watch" className="category-link">Watches</Link>
            </div>
          </div>
        )}


      </div>
    </>
  );
};

export default Navbar;
