import { useState } from 'react'
import './App.css'
import JsonReader from './components/JsonReader';
import UiSchema from './components/UiSchema';

function App() {
  const [json, setJson] = useState([]);

  return (
    <div className='app grid grid-cols-2 gap-4'>
      <JsonReader setJson = {setJson}/>
      <UiSchema json = {json}/>
    </div>
    
  )
}

export default App
