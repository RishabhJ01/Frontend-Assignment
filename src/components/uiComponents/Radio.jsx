import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const Radio = ({jsonData}) => {

  const [activeTab, setActiveTab] = useState(jsonData.validate.options[0].value);
  return (
    
      <RadioGroup value={activeTab} onChange={setActiveTab}>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          {jsonData.validate.options.map((option) => {
            return (<RadioGroup.Option value={option.value}>
              {({ checked }) => (
                <div className={checked ? "ui-item-active" : 'ui-item'}>{option.value}</div>
              )}
            </RadioGroup.Option>)
          })}
        </div>
      </RadioGroup>
  )
}

export default Radio;