import React, { useContext, useEffect, useState } from 'react'
import "./Carts.css"
import logo from '../../assets/images/adidas-logo-107B082DA0-seeklogo.com.png'
import axios from 'axios';
import { cartcontext } from '../../Context/Carts';
export default function Carts() {
  // let { getcart, setnumOfCartItems } = useContext(cartcontext)
  // const [total, settotal] = useState()
  // const [carddata, setcarddata] = useState()
  // async function getlogedcard() {
  //   let { data } = await getcart()
  //   settotal(data.carts[0].total)
  //   setcarddata(data.carts[0].products)
  //   console.log(data.carts[0]);
  //   setnumOfCartItems(data.carts[0].totalProducts)
  // }
  // useEffect(() => {
  //   getlogedcard()

  // }, [])
  let { cart, removecard, quantity , ItemAmount,total } = useContext(cartcontext)




  return <>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title ms-auto model-color fw-bold" id="exampleModalLabel">My Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='head mb-3'>
              <h5 className='fw-bold '>Cart Summary</h5>

            </div>
            {cart == '' ? <>
              <div className='cart'>
                <div className='row py-3'>
                  <h5 className='fw-bold'>You have no items yet..</h5>

                </div>
              </div>
            </> :
              <div className='cart'>
                {cart?.slice(0, 6).map((items, index) => {
                  return <div key={index} className='bordercart mb-3'>
                    <div className='row py-3'>
                      <div className='col-lg-4 col-md-10'>
                        <div className='images'>
                          <img src={items.image} alt="" className='w-100 px-3' />
                        </div>
                      </div>
                      <div className='col-lg-8 col-md-10'>
                        <div className='title-model'>
                          <span className='fw-bold'>{items.title}</span>
                          <p className='fw-bold py-2'>Quantity:{ItemAmount}</p>
                        </div>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='price'>
                              {quantity == '' ? <h3 className='price-color fw-bold'>{items.price} LE</h3> : <h3 className='price-color fw-bold'>{total} LE</h3>}

                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <button onClick={() => { removecard(items.id) }} className='btn fw-bold rounded-5 btn-bg '>Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                })}

                <div className='Total'>
                  <h2 className='text-center fw-bold py-4'>Total: {total } LE</h2>

                </div>
                <div className='row g-3'>
                  <div className='col-lg-6 col-md-12'>
                    <button className='btn w-100 rounded-5 py-2 btn-bg '>Review Cart</button>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <button className='btn w-100 rounded-5 py-2 text-white price-bg'>Complete Checkout</button>

                  </div>
                </div>
              </div>
            }
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div> */}
        </div>
      </div>
    </div >

  </>
}
