import React, {useState} from 'react'
import Input from './Input'
import Select from './Select'
import SwitchUi from './SwitchUi'
import Radio from './Radio'
import Ignore from './Ignore'


const Group = ({jsonData}) => {

  const [activeComponent, setActiveComponent] = useState("");
  return (
    <div className='ui-component'>
      <span>{jsonData.label}</span>
      <hr />
      {jsonData.subParameters.map((json) => {
          switch(json.uiType){
              case 'Input':
                  return <div className='mt-4' key={json.jsonKey}><Input  jsonData={json}></Input></div>
              case 'Select':
                  return <div className='mt-4' key={json.jsonKey}><Select  jsonData={json}></Select></div>
              case 'Switch':
                return <div className='mt-4' key={json.jsonKey}><SwitchUi  jsonData={json}></SwitchUi></div>
              case 'Radio':
                  return <div className='mt-4' key={json.jsonKey}><Radio  jsonData={json} setActiveComponent={setActiveComponent}></Radio></div>
              case 'Ignore':
                return <div key={json.jsonKey}>
                  <Ignore jsonData={json} activeComponent={activeComponent}></Ignore>
                </div>
              default:
                  return <></>
        }
      })}
    </div>
  )
}

export default Group;
