import React from 'react'
import  PrauseReducer from './useReducer'
import Text1 from './Text1'
import Text2 from './Text2'
const index = () => {
    
  return (
    <div>
        <PrauseReducer>
            <Text1></Text1>
            <Text2></Text2>
        </PrauseReducer>
    </div>
  )
}

export default index
