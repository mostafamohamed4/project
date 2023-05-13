import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimilarProducts() {
    let BaseUrl = `https://dummyjson.com/products`
    let [loading, setLoading] = useState(false)
    const [ProdectList, setProdectList] = useState([])
    async function getDataProdect() {
        setLoading(true)
        let { data } = await axios.get(`${BaseUrl}`)
        console.log(data.products);
        setProdectList(data.products)
        setLoading(false)
    }
    useEffect(() => {
        getDataProdect()
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
        ;
    return <>
        <section className='SimilarProducts'>
            <div className='container'>
                <div className='Header'>
                    <h2 className='primary-color'>Similar Products</h2>
                    <p className='text-color'>You may like these products also</p>
                </div>

                <div className='row g-3'>
                    <Slider {...settings}>
                        {ProdectList.slice(20, 32).map((items , index) => {
                            return <div key={index} className='col-lg-3 px-2 col-md-12'>
                                <div className="card">
                                    <img src={items.thumbnail} height={320} className="w-100 p-2 rounded-4" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{items.title.split(' ').slice(0,3).join('')}</h5>
                                        <h5 className='primary-color fw-bolder'>{items.price} LE</h5>
                                        <div className='d-flex'>
                                            <span className='main text-decoration-line-through px-4 fw-bold'>{items?.price} LE</span>
                                            <div className=' rating-bg px-2 fw-bold'><span>50%off</span></div>
                                        </div>
                                        <div className='icon'>
                                            <i className="fa-solid fa-star rating-color"></i>
                                            <i className="fa-solid fa-star rating-color"></i>
                                            <i className="fa-solid fa-star rating-color"></i>
                                            <i className="fa-regular fa-star-half-stroke rating-color"></i>
                                            <i className="fa-regular fa-star rating-color"></i>
                                            <span className='text-black fw-bolder px-2 font-l'>3.8 of 5</span>  </div>
                                    </div>
                                </div>

                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>



    </>


}
