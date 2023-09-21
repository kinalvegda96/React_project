import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = ({starproduct}) => {
  return (
   <>
   <div className='starproduct'>
    <div>
        <a href="/"><img src={starproduct[0].image} alt="1st product"/></a>
    </div>
    <div>
        <a href="/"><img src={starproduct[1].image} alt='1st product'/></a>
        <a href='/'><img src={starproduct[2].image} alt='2nd product'/></a>
        <a href='/'><img src={starproduct[3].image} alt='3rd product'/></a>
    </div>
   </div>
   </>
  )
}

export default StarProduct