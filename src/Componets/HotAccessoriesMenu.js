import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <>
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/">Music Store</Link>
        <Link className='HotAccessoriesLink' to="/smartDevice">Smart Device</Link>
        <Link className='HotAccessoriesLink' to="/home">Home</Link>
        <Link className='HotAccessoriesLink' to="/lifestyle">LifeStyle</Link>
        <Link className='HotAccessoriesLink' to="/mobileAccessories">Mobile Accessories</Link>

    </div>
    </>
  )
}

export default HotAccessoriesMenu