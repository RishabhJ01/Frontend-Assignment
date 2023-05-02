import React from 'react'

import Input from './Input'
import Select from './Select'
import SwitchUi from './SwitchUi'
const Ignore = ({jsonData, activeComponent}) => {
  return (
    <>
        {jsonData.conditions[0].value === activeComponent ? (
        <div className='mt-4' >
            {jsonData.subParameters.map((json) => {
                switch(json.uiType){
                    case 'Input':
                        return <div className='mt-4' key={json.jsonKey}><Input  jsonData={json}></Input></div>
                    case 'Select':
                        return <div className='mt-4' key={json.jsonKey}><Select  jsonData={json}></Select></div>
                    case 'Switch':
                      return <div className='mt-4' key={json.jsonKey}><SwitchUi  jsonData={json}></SwitchUi></div>
                    default:
                        return <></>
                }
            })}
            
        </div>
        ) : (<></>)}
    </>
  )
}

export default Ignore