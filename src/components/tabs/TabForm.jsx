import React from 'react'
import Tabs from './Tabs.jsx';
import Profile from './Profile.jsx';
import Interests from './Interests.jsx';
import {useState} from 'react';
import './Tabs.css';

import Message from './Message.jsx';


export default function TabForm() {
    const [data ,setData]=useState({
        name:"Ajay",
        number:"6303629099",
        email:"ajaynaveen337@gmail.com",
        interests:["java","JavaScript","Python"],
        level:["Fresher","Experiance"],
        selectedLevel:""
    });
    const [actieTab,setActiveTab]=useState(0);
    const tabs=[{
        name:"Profile",
        component:Profile
    },{
        name:"Interests",
        component:Interests
    },
    {
        name:"Message",
        component:Message
    }]
    const ActiveComponent=tabs[actieTab].component;
  return (
    <div className='tab-form'>
        <Tabs tabs={tabs} setActiveTab={setActiveTab}/>
      <div className="active-component">  <ActiveComponent   data={data}  setData={setData}/></div>  
    </div>
  )
}
