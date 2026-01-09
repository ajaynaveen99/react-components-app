import React from 'react'
import './Tabs.css';

export default function Tabs({ tabs,setActiveTab }) {
    console.log(tabs);
  return (
    <div className='tabs'>
      {tabs.map((tab, index) => (
        <div key={index} className='tab-name' onClick={()=>setActiveTab(index)}>
          {tab.name}
        </div>
      ))}
    </div>
  )
}
