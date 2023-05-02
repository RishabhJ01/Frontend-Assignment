import React, {useState} from 'react'
import { Switch } from '@headlessui/react';

const SwitchUi = ({jsonData}) => {
    const [enabled, setEnabled] = useState(jsonData.validate.defaultValue);
  return (
    <div className='grid grid-cols-2 gap-4 mt-3'>
        <span>{jsonData.label}*</span>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-500' : 'bg-blue-100'}
            relative inline-flex h-[24px] w-[42px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
                pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    </div>
  )
}

export default SwitchUi;