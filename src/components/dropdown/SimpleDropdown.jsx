import React from 'react'

export default function SimpleDropdown({label, items, isOpen, onClick}) {
  return (
    <div className="Dropdown">
        <button className="Dropdown-btn" onClick={onClick}>{label} <span >{isOpen ? "▲" : "▼"}</span></button>
        {isOpen && (
          <div className="Dropdown-menu">
            {items.map((item, index) => (
              <div key={index} className="Dropdown-item">{item}</div>
            ))}
          </div>
        )}
    </div>
  )
}
