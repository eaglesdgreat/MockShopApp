
import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="navbar-expand navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand collapse navbar-collapse" id="navbarTogglerDemo01">Home<span class="sr-only">(current)</span></Link>
                    
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="navbar-item active"><Link to="/shop" className="nav-link">Shop</Link></li>
                        {/* <li className="navbar-item"><Link to="/cart" className="nav-link">My cart</Link></li> */}
                        <li className="navbar-item active"><Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart">MyCart</i></Link></li>
                        <li className="navbar-item active"><Link to="/login" className="nav-link">LogIn</Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;