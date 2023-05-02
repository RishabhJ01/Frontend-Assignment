import React, { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'

const Radio = ({jsonData, setActiveComponent}) => {

  useEffect(() => {
    setActiveComponent(jsonData.validate.defaultValue);
  }, [])

  const handleTab = (event) => {
    setActiveTab(event)
    setActiveComponent(event);
  }

  const [activeTab, setActiveTab] = useState(jsonData.validate.defaultValue);

  return (
    <>
      <RadioGroup value={activeTab} onChange={(event) => handleTab(event)}>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          {
          jsonData.validate.options.map((option) => {
            const value = option.value
            return (<RadioGroup.Option value={value}>
              {({ checked }) => (
                <div className={checked ? "ui-item-active" : 'ui-item'}>{option.label}</div>
              )
              }
            </RadioGroup.Option>)
            
          })}
        </div>
      </RadioGroup>
    </>
  )
}

export default Radio;