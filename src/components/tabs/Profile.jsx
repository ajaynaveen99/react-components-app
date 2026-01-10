import React from 'react'
import './Tabs.css';

export default function Profile({data,setData ,error}) {
    console.log(data)
    const {name,email,number}=data
    console.log(error)
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
    {error.name&&<span>{error.name}</span>}
    <label>Number:</label>
    <input type="number"
    value={number}
    name="number"
    onChange={handleChange} />
     {error.number&&<span>{error.number}</span>}
    <label>Email:</label>
    <input type="email" 
    value={email}
    name="email"
    onChange={handleChange}/>
     {error.email&&<span>{error.email}</span>}
    
    
    </div></div>
  )
}
