import React from 'react'
import './Tabs.css';

export default function Profile({data,setData}) {
    console.log(data)
    const {name,email,number}=data
    function handleChange(e){
        console.log(e)
        const {name,value}=e.target

        
        setData((prev)=>({...prev,[name]:value}))

    }
  return (
    <div><div className="profile-form"><label>Name:</label>
    <input type="text" 
    value={name}
    name="name"
    onChange={handleChange}/>
    <label>Number:</label>
    <input type="number"
    value={number}
    name="number"
    onChange={handleChange} />
    <label>Email:</label>
    <input type="email" 
    value={email}
    name="email"
    onChange={handleChange}/>
    
    
    </div></div>
  )
}
