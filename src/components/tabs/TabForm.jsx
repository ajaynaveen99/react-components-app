import React from 'react'
import Tabs from './Tabs.jsx';
import Profile from './Profile.jsx';
import Interests from './Interests.jsx';
import { useState } from 'react';
import './Tabs.css';

import Message from './Message.jsx';
export default function TabForm() {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    interests: ["Java", "JavaScript", "Python"],
    level: ["Fresher", "Experiance"],
    selectedLevel: ""
  });
  const [result, setResult] = useState([])
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({})
  const tabs = [{
    name: "PROFILE",
    component: Profile,
    validate: () => {
      const err = {}
      if (!data.name || !data.name.length > 2) {
        err.name = "Name is required"
      }
      if (!data.number || data.number.length <= 2) {
        err.number = "Number is required"
      }
      if (!data.email ||!data.email.includes("@")|| data.email.length<=2) {
        err.email = "email is required"
      }
      setError(err)

      return err.name || err.number || err.email ? false : true

    }
  }, {
    name: "INTERESTS",
    component: Interests,
    validate: () => {
      const err = {}
      if (data.interests.length < 1) {
        err.interests = "Atleast check one "
      }
      setError(err)
      return err.interests ? false : true
    }
  },
  {
    name: "MESSAGE",
    component: Message,
    validate:()=>true
  }]

  function handlePrev() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1)
    }
  }
  function handleNext() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1)
    }
  }
  function handleSubmit() {
    setResult(data)
  }
  const ActiveComponent = tabs[activeTab].component;
  return (<>
    <div className='tab-form'>
      <Tabs tabs={tabs} setActiveTab={setActiveTab}  activeTab={activeTab}/>

      <div className="active-component">  <ActiveComponent data={data} setData={setData} error={error} /></div>
      {activeTab > 0 && <button onClick={handlePrev} >Prev</button>}
      {activeTab === tabs.length - 1 && <button onClick={handleSubmit}  className="submit" >submit</button>}
   
      { activeTab<tabs.length-1 && <button onClick={handleNext}  >Next</button>}
    
    </div>
    <p>FormData:{JSON.stringify(result)}</p>
  </>
  )
} 
