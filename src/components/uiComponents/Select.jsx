import React, { useState } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Listbox } from '@headlessui/react';

const Select = ({jsonData}) => {
    const [selected, setSelected] = useState(jsonData.validate.options[0].value);
  return (
    <div className='grid grid-cols-2 gap-4'>
        <span>{jsonData.label}</span>
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button className="ui-item flex items-center justify-between">
                    {selected}
                    <span className='pointer-events-none'>
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button >
                <Listbox.Options className="ui-item">
                    {jsonData.validate.options.map((option, i) => (
                    <Listbox.Option className="text-start"
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    </div>
  )
}

export default Select;