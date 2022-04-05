import React, { useContext } from 'react'
import { Father } from './Father'

const Text2 = () => {
  const {state,dispatch} = useContext(Father)
  return (
    <div>
        组件二：{state.name}
    </div>
  )
}

export default Text2
