import React from 'react'

export default function SimpleDropdown({ label, items, isOpen, onClick, setLabel }) {
    return (
        <div className="Dropdown">
            <button className="Dropdown-btn" onClick={onClick}>{label} <span className="icon">{isOpen ? "▲" : "▼"}</span></button>
            {isOpen && (
                <div className="Dropdown-menu">
                    {items.map((item, index) => (
                        <div key={index} className="Dropdown-item" onClick={() => {
                            setLabel(item)
                            onClick()
                        }}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    )
}
