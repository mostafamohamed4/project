import React from 'react'
import logo from '../../assets/images/Group 1436.svg'
import btn from '../../assets/images/Group 1431.svg'
import fac from '../../assets/images/Group 1432.svg'
import linkedin from '../../assets/images/Group 1435.svg'
import inst from '../../assets/images/Group 1433.svg'
import twi from '../../assets/images/Group 1434.svg'
import cash from '../../assets/images/Rectangle 586.png'
import visa from '../../assets/images/Group 1437.png'
import mag from '../../assets/images/Group 1438.png'
import nana from '../../assets/images/Group 1439.png'
import './Footer.css'
export default function Footer() {
    return <>
        <div className='footer mt-5'>

            <div className='container'>
                <div className='row g-3'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='images pt-5'>
                            <img src={logo} className='logoimages' alt="" />
                        </div>
                        <div className='title footertext-color pe-5'>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia  </p>
                            <p> nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h3 className='footertext-color'>Subscribe to our newsletter</h3>
                        <form action="" className='position-relative'>
                            <input type="search" className='w-100 py-3 my-4 rounded-5  form-control fw-bold' placeholder='Enter Your Mail' />
                            <button className='btn fw-bold px-5'>Subscribe <img src={btn} className=' icon' alt="" /></button>
                        </form>


                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <ul className='list'>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Track Order</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Sell With Us</li>
                                    <li>Shipping And Returns</li>
                                </ul></div>
                            <div className='col-lg-6 col-md-12'>

                                <ul className='icon-social '>
                                    <li><img src={fac} alt="" /> /YESHYERY</li>
                                    <li><img src={linkedin} alt="" /> /YESHYERY</li>
                                    <li><img src={inst} alt="" /> /YESHYERY</li>
                                    <li><img src={twi} alt="" /> /YESHYERY</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='main row'>
                        <div className='col-lg-4 col-md-8'>
                            <p className='footertext-color py-3'>© 2021 yeshtery, all rights reserved.</p>
                        </div>
                        <div className='col-lg-4 col-md-8'>
                            <div className=''>
                                <img src={cash} className='mx-3 my-3' alt="" />
                                <img src={visa} className='mx-3' alt="" />
                                <img src={mag} className='mx-3' alt="" />
                            </div>                        </div>
                        <div className='col-lg-4 col-md-8'>
                            <p className='footertext-color py-3'>powered By <img src={nana} alt="" /></p>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
}
