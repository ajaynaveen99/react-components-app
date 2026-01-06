
 import React from 'react'
 
 export default function Bar({value}) {
    console.log(value)
   return (
     <div className="progres-outer">
        <div className="progres-inner"  style={{width:`${value}%`}}>{value}</div>
     </div>
   )
 }
 