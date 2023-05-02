import React, { useState } from 'react'

const Input = ({jsonData}) => {
  const [value, setValue] = useState("");
  return (
    <div className='grid grid-cols-2 gap-4'>
      <span>{jsonData.label}*</span>
      <div className='ui-item'>
          <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className='w-full bg-transparent' style={{outline: 'none'}}/>
      </div>
    </div>
    
  )
}

export default Input