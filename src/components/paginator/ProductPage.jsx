import React from 'react'

export default function ProductPage({img,title}) {
  return (
    <div className="product-card"><img  className="product-img" src={img} alt={title} />
      <p>{title}</p></div>
  )
}
