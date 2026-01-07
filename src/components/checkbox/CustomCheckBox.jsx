import React from 'react'

export default function Input(props) {
    const { className,type,onChange,checked} = props;
  return (
   <input className={className} type={type}  onChange={onChange} checked={checked} />
  )
}
