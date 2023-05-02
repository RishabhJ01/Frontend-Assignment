import React from 'react'
import Input from './Input'
import Select from './Select'
import SwitchUi from './SwitchUi'
import Radio from './Radio'

const Group = ({jsonData}) => {
  return (
    <div className='ui-component'>
      <span>{jsonData.label}</span>
      <hr />
      {jsonData.subParameters.map((json, i) => {
          switch(json.uiType){
              case 'Input':
                  return <Input key={json.jsonKey} jsonData={json}></Input>
              case 'Select':
                  return <div className='mt-3'><Select key={json.jsonKey} jsonData={json}></Select></div>
              case 'Switch':
                return <SwitchUi key={json.jsonKey} jsonData={json}></SwitchUi>
              case 'Radio':
                return <Radio key={json.jsonKey} jsonData={json}></Radio>
              default:
                  return <></>
        }
      })}
    </div>
  )
}

export default Group;
