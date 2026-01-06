import React from 'react'
import Bar from './Bar'
import './ProgressBar.css'
import { useEffect, useState} from "react";
import {Link} from 'react-router-dom'

export default function ProgressBar() {
    const [value,setValue]=useState(0)
useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => {
        if (prev >= 70) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);


 
  return (<> 
  <nav>
  <Link to="/progress-bar">Go to Progress Bars Demo</Link></nav>
  <Bar value={value}/></>
  )
}
