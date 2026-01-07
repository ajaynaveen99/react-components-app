import React from 'react'
import {useState} from 'react'
import RadioGroup from './RadioGroup.jsx'
import './RadioButtons.css'

export default function RadioButtons() {
    const [gender,setGender]=useState("")
  return (<>
    <div className='radio-btns'>
      <RadioGroup type="radio" label="Gender" options={["Male","Female","Others"]} value={gender} onChange={setGender}/>
      <br/>
     
    </div>
    <h2>Selected Gender: {gender}</h2></>
    
    
  )
}
