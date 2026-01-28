
import "./OtpInputBox.css"
import React, { useState, useRef, useEffect } from "react";

export default function OtpApp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  function handleChange(value, index) {
    if (isNaN(value)) return;

    const newArr = [...otp];
    const newValue = value.trim();
    newArr[index] = newValue.slice(-1);
    setOtp(newArr);

    newValue && inputRef.current[index + 1]?.focus();
  }

  function handleKeyDown(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  }

  // ✅ Generate OTP
  function generateOtp() {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setOtp(new Array(6).fill(""));
    setMessage("");
    inputRef.current[0]?.focus();
  }

  // ✅ Submit OTP
  function submitOtp() {
    if (otp.join("") === generatedOtp) {
      setMessage("✅ OTP Successfully Verified");
    } else {
      setMessage("❌ Invalid OTP");
    }
  }

  return (
    <>
      <h1>OTP INPUT BOX</h1>

      <button  className="otp-gen" onClick={generateOtp}>Generate OTP</button>

      {generatedOtp && <p>Generated OTP: <strong>{generatedOtp}</strong></p>}

      <div className="input-container">
        {otp.map((input, index) => (
          <input
            className="Otp-box"
            key={index}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input) => (inputRef.current[index] = input)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
          />
        ))}
      </div>

      <button  className="otp-submit" onClick={submitOtp}>Submit OTP</button>

      {message && <p>{message}</p>}
    </>
  );
}


// written code but not implemented gereneteOtp,sumbmitButton

// import React, { useState, useRef,useEffect} from "react";

// export default function OtpApp() {

//  const [otp, setOtp] = useState(new Array(6).fill(""));
//  const inputRef = useRef([]);
//  useEffect(() => {
//     inputRef.current[0]?.focus();
//  } , []);
//  function handleChange(value,index){
//     if(isNaN(value)) return
// const newArr=[...otp];
// const newValue=value.trim();
// newArr[index]=newValue.slice(-1);
// setOtp(newArr)
//   newValue && inputRef.current[index+1]?.focus();
// console.log(newArr)

// }
// function handleKeyDown(e,index){
//     if(!e.target.value && e.key==="Backspace"){
//         inputRef.current[index-1]?.focus();
//     }
// }
//   return (
//     <>
//     <h1>OTP INPUT BOX</h1>
//     <div className="input-container">{otp.map((input,index)=><input   className="Otp-box" 
//     key={index} 
//     type="text"
//     value={otp[index]}
//     onChange={(e)=>handleChange(e.target.value,index)}
//     ref={(input)=>inputRef.current[index]=input}
//     onKeyDown={(e)=>handleKeyDown(e,index)}

//    />


// )}</div></>
    
//   )
// }
