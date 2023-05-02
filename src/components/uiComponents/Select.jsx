import React, { useState } from 'react'

const Select = ({jsonData}) => {
    const [selected, setSelected] = useState(jsonData.validate.defaultValue);
  return (
    <div className='grid grid-cols-2 gap-4'>
        <span>{jsonData.label}*</span>
        <div>
            <select  value={selected} onChange={(e) => setSelected(e.target.value)} className="ui-item flex items-center justify-between">
                {jsonData.validate.options.map((option, i) => (
                    <option className="text-start"
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Select;