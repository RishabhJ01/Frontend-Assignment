import React from 'react'

const JsonReader = ({setJson}) => {

    const handleChange = (e) => {
        e.preventDefault();
        var jsonBody = JSON.parse(e.target.value);
        const sortedJson = [...jsonBody].sort((a,b) => a.sort - b.sort);
        setJson(sortedJson);
    }
    return (
    <div className='p-4'>
        <div className='json-box'>
            <textarea onChange={handleChange} name="input" className='h-full w-full' style={{resize:"none", outline: "none"}}></textarea>
        </div>
    </div>
    )
}

export default JsonReader;