import React, { useEffect, useState } from 'react'

const UiSchema = ({json}) => {
    
  return (
    <div>
        <div>{JSON.stringify(json)}</div>
    </div>
    
  )
}

export default UiSchema