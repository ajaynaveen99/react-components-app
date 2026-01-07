import React from 'react'

export default function ProductPage({id, img,title}) {
  return (
    <div className="product-card" key={id}><img  className="product-img" src={img} alt={title} />
      <p>{title}</p></div>
  )
}
