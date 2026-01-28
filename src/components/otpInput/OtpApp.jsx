
import "./OtpInputBox.css"

import React, { useState, useRef,useEffect} from "react";

export default function OtpApp() {

 const [otp, setOtp] = useState(new Array(6).fill(""));
 const inputRef = useRef([]);
 useEffect(() => {
    inputRef.current[0]?.focus();
 } , []);
 function handleChange(value,index){
    if(isNaN(value)) return
const newArr=[...otp];
newArr[index]=value.slice(-1);
setOtp(newArr)
    inputRef.current[index+1]?.focus();
console.log(newArr)

}
  return (
    <>
    <h1>OTP INPUT BOX</h1>
    <div className="input-container">{otp.map((input,index)=><input   className="Otp-box" 
    key={index} 
    type="text"
    value={otp[index]}
    onChange={(e)=>handleChange(e.target.value,index)}
    ref={(input)=>inputRef.current[index]=input}

   />


)}</div></>
    
  )
}
