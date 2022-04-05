import React, { useContext } from 'react'
import { Father } from './Father'

const Text1 = () => {
  const {state,dispatch} = useContext(Father)
  console.log(state,"22")
  return (
    <div>
        组件一：{state.name}
        <button onClick={()=>{
          dispatch({
            type:"setname",
            name:"ss"
          })
        }} >changeName</button>
    </div>
  )
}

export default Text1
