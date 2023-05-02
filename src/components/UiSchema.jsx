import { Listbox, Switch } from '@headlessui/react';
import React, { useState } from 'react'
import Input from './uiComponents/Input';
import Group from './uiComponents/Group'; 
import Select from './uiComponents/Select';

const UiSchema = ({json}) => {

    const [enabled, setEnabled] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        for(var i = 0; i < event.target.length; i++){
            console.log(event.target[i].value);
        }
        // console.log(event.target[0].value);
    }

    return (

        <div className='p-4'>
            {json.length > 0 ? (
            <div className='ui-box'>
                <form className='h-full' onSubmit={handleSubmit}>
                <div className='h-6'>
                    <span>New {json.length !== 0 ? json[0].label.split(" ")[0] : ""}</span>
                    <hr/>
                </div>
                
                <div style={{height: "calc(100% - 5rem)", overflow: 'auto', paddingBottom: "1rem"}}>
                    
                    {json.map((jsonData, i) => {
                        switch(jsonData.uiType){
                            case 'Input':
                                return <div key={jsonData.jsonKey} className='ui-component'>
                                        <Input jsonData={jsonData}></Input>
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
                </div>
                <div className='h-6 '>
                    <hr />
                    <div className='flex justify-between'>
                        <div className='flex align-center mt-5'>
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
                        <div className='mt-3'>
                            <button type="button" class="border border-gray-300 items-center rounded-md bg-white px-3 py-2 font-semibold hover:bg-gray-100" aria-expanded="false" aria-haspopup="true">
                                Cancel
                            </button>
                            <button type="submit" class=" items-center text-white rounded-md ml-2 bg-gray-400 px-3 py-2 font-semibold hover:bg-gray-500" aria-expanded="false" aria-haspopup="true">
                                Submit
                            </button>
                        </div>
                    </div>
                </div> 
                </form>
            </div>
            
            
            ) : <div className='ui-box flex'>
                <div className='h-6 m-auto' style={{color: "rgb(187,187,242)"}}>
                    Add Schema to render UI
                </div>
            
                </div>}
        </div>
        
    )
}

export default UiSchema;