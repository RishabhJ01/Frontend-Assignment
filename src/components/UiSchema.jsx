import { Listbox, Switch } from '@headlessui/react';
import React, { useState } from 'react'
import Input from './uiComponents/Input';
import Group from './uiComponents/Group'; 
import Select from './uiComponents/Select';
const pizzaTypes = [
    {
        name: "Naples Style Pizza",
        options: [
            1,
            2,
            3,
            4
        ]
    },
    {
        name: "New York Style Pizza",
        options: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    }
];

// const COMPONENTS = {
//     "Input": Input
// }

const UiSchema = ({json}) => {

    // const [activeTab, setActiveTab] = useState(pizzaTypes[0]);
    // const [options, setOptions] = useState(pizzaTypes[0].options);
    // const [selected, setSelected] = useState(pizzaTypes[0].options[0]);
    const [enabled, setEnabled] = useState(false)

    // const handleSelect = (event,pizza) => {
    //     console.log(event.target.value)
    //     setActiveTab(pizza);
    //     setOptions(pizza.options);
    //     setSelected(pizza.options[0]);

    // }


    return (

        <div className='p-4'>
            {json.length > 0 ? (<div className='ui-box'>
                <div className='h-6'>
                    <span>New {json.length !== 0 ? json[0].label.split(" ")[0] : ""}</span>
                    <hr/>
                </div>
                <div style={{height: "calc(100% - 5rem)"}}>
                    {json.map((jsonData, i) => {
                        switch(jsonData.uiType){
                            case 'Input':
                                return <div className='ui-component grid grid-cols-2 gap-4'>
                                        <Input key={jsonData.jsonKey} jsonData={jsonData}></Input>
                                    </div>
                                
                            case 'Group':
                                return <Group key={jsonData.jsonKey} jsonData={jsonData}></Group>
                            case 'Select':
                                return <div className='ui-component'>
                                    <Select key={jsonData.jsonKey} jsonData={jsonData}></Select>
                                </div>
                            default:
                                return <></>
                        }
                    })}
                    {/* <div className='ui-component'>
                        <span>Pizza type*</span>
                        <hr />
                        <ul className='grid grid-cols-2 gap-4 mt-2'>
                            {
                                pizzaTypes.map((pizza, i) => (
                                    (<li value={pizza.name} className={activeTab === pizza ? "ui-item-active" : "ui-item"} onClick={() => handleSelect(event,pizza)} key={i}>{pizza.name}</li>)
                                ))
                            }
                        </ul>
                        <div className='grid grid-cols-2 gap-4 mt-3'>
                            <span>Slices*</span>
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
                                        {options.map((option, i) => (
                                        <Listbox.Option className="text-start"
                                            key={i}
                                            value={option}
                                        >
                                            {option}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-3'>
                            <span>Cheese Burst*</span>
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
                            <span>Type*</span>
                            <div className='ui-item'>
                                <input type="text" className='w-full bg-transparent' style={{outline: 'none'}}/>
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div className='h-6 '>
                    <hr />
                    <div className='flex justify-between'>
                        <div className='flex align-center mt-3'>
                            <span className='mr-1'>{!enabled ? <>Show</> : <>Hide</>} advanced fields</span>
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
                        <div className='mt-1'>
                            <button type="button" class="border border-gray-300 items-center rounded-md bg-white px-3 py-2 font-semibold hover:bg-gray-100" aria-expanded="false" aria-haspopup="true">
                                Cancel
                            </button>
                            <button type="button" class=" items-center text-white rounded-md ml-2 bg-gray-400 px-3 py-2 font-semibold hover:bg-gray-500" aria-expanded="false" aria-haspopup="true">
                                Submit
                            </button>
                        </div>
                    </div>
                    
                </div> 

            </div>) : <div className='ui-box flex'>
                <div className='h-6 m-auto' style={{color: "rgb(187,187,242)"}}>
                    Add Schema to render UI
                </div>
            
                </div>}
        </div>
        
    )
}

export default UiSchema;