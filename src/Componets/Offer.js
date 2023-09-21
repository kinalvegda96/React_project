import React from 'react'

const Offer = ({src,index}) => {
  return (
    <a href="/"><img src={src} alt={`${index} Offer`}/></a>
  )
}

export default Offer