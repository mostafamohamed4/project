import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/images/adidas-logo-107B082DA0-seeklogo.com.png'
import call from '../../assets/images/Group 756.svg'
import FindAStore from '../../assets/images/Group 753.svg'
import Wishlist from '../../assets/images/Path 771.svg'
import Login from '../../assets/images/Path 773.svg'
import TrackOrder from '../../assets/images/Group 758.svg'
import Search from '../../assets/images/Path 774.svg'
import bard from '../../assets/images/Group 770.svg'
import chart from '../../assets/images/Path 772.svg'
import logo2 from '../../assets/images/urn aaid sc US 2186e175-b022-45db-a2f4-c9ba6e4bde30;revision=0.png'
import { Link, NavLink } from 'react-router-dom'
import Carts from '../Carts/Carts'
import { cartcontext } from '../../Context/Carts'
export default function Navbar() {
    let { ItemAmount } = useContext(cartcontext)
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-main">
            <div className="container">
                <img src={bard} alt="" />
                <a className="navbar-brand mx-3" href="#"><img src={logo2} className='w-100' alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item  d-flex align-items-center justify-content-center">
                            <i className="fa-solid text-black fa-chevron-left"></i>
                            <span className="nav-link mx-2 text-black" aria-current="page" href="#">Valentine's Day offers! Buy two Get One Free <a href="" className='fw-bolder text-black'>Show Now</a></span>
                            <i className="fa-solid text-black fa-chevron-right"></i>
                        </li>

                    </ul>
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center ">
                            <img src={call} alt="" />
                            <a className="nav-link text-black  fw-bolder " aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <img src={TrackOrder} alt="" />
                            <a className="nav-link text-black fw-bolder " aria-current="page" href="#">Track Order</a>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <img src={FindAStore} alt="" />
                            <a className="nav-link text-black fw-bolder " aria-current="page" href="#">Find A Store</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <div className="container">
                <form className=" position-relative">
                    <img src={Search} className='imgsearch' alt="" />
                    <span className='textsearch' alt="">search</span>
                    <input className="form-control me-2 rounded-5 fw-bold " type="search" aria-label="Search" />
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul> */}
                    <ul className="navbar-nav ms-auto mb-2 text-center mb-lg-0">
                        <a className="navbar-brand" href="#"><img src={logo} className='w-25' alt="" />
                        </a>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                        <li className="nav-item d-flex align-items-center">

                            <span type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div className='position-relative d-flex align-items-center justify-content-center'>
                                    <img src={chart} alt="" />
                                    <p className='position-absolute mx-3   font-sm bg-main text-black top-0 translate-middle badge rounded-pill'>{ItemAmount}</p>
                                    <span className='mx-2'>Carts </span>
                                </div>
                            </span>
                            <div className='mx-3 d-flex align-items-center justify-content-center'>
                                <img src={Wishlist} alt="" />
                                <span className='mx-2'>Wishlist</span>
                            </div>
                            <div className='mx-3  d-flex align-items-center justify-content-center'>
                                <img src={Login} alt="" />
                                <span className='mx-2'>Login</span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4 ">
                            <a className="nav-link nav-margin  text-white " aria-current="page" href="#">Men</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link nav-margin text-white " aria-current="page" href="#">Women</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link nav-margin text-white " aria-current="page" href="#">Unisex</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link nav-margin text-white " aria-current="page" href="#">Kids</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link nav-margin text-white " aria-current="page" href="#">Best sellers</a>
                        </li>
                        <li className="nav-item  mx-4">
                            <a className="nav-link nav-margin text-white " aria-current="page" href="#">New Arrivals</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link nav-margin bg-frist" aria-current="page" href="#">Other</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
        {/* moule */}

        <Carts />
    </>
}
