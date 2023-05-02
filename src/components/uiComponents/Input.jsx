import React from 'react'

const Input = ({jsonData}) => {
  return (
    <>
      <span>{jsonData.label}*</span>
      <div className='ui-item'>
          <input type="text" className='w-full bg-transparent' style={{outline: 'none'}}/>
      </div>
    </>
    
  )
}

export default Input