import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Product from './product'
import Home from './home'
import Member from './member'

export default function NavlinkRoute() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav-pills">
                         <img src="./images/88.jpg" alt="width=40" height="40"/> &nbsp;
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/member" className="nav-link" >member</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link" >Product</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/member" element={<Member/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}