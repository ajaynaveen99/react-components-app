import React from 'react'

export default function RadioGroup({type,label,options,onChange,value}) {
  return  (
    <>
    {options.map((option)=>(
        <div key={option}>
            <input
                
                type={type}
                name={label}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
            />
            <label htmlFor={`${label}-${option}`}>{`   ${option}`}</label>
        </div>
    ))}
    </>
  )
}
