import React from 'react'
import Offer from './Offer.js'
import "../styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <div className='offerSection m-4' style={{gap:"18px"}}>
        {
            offer.map((item,index)=>
            (
                <Offer key={item.image} index={index} src={item.image} link={item.url}/>
            ))
        }
    </div>
  )
}

export default Offers