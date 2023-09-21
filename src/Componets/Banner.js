import { Carousel } from 'react-bootstrap'
import React from 'react'

function Banner({banner}) {
  return (
    <>
    <Carousel>
        {
            banner.end.map((item,index)=>
            (
                <Carousel.Item key={item.image} id="banner" interval={1000}>
                    <img className='d-block w-100' src={item.image} id="bannerImage" alt={`${index}banner`}/>
                </Carousel.Item>
            ))
        }
    </Carousel>
    </>
  )
}

export default Banner