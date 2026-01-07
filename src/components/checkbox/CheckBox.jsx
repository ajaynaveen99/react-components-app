import React from 'react'
import  {useState} from 'react';
import './CheckBox.css';
import Input from './CustomCheckBox'


export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (<>
    <h1>Custom Checkbox</h1>
    <div>
      <Input
      className="custom-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      ></Input>
    
    </div></>
  )
}
