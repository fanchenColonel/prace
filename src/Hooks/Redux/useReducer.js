import React,{useReducer} from 'react'
import { Father } from './Father'
import Text1 from "./Text1"
import Text2 from "./Text2"

/* 
    useReducer和useContext，createContext结合使用，可以达到redux的功能

    将useReducer的 state和dispatch ，通过 提供者 传给 使用者 ，
    这样某一个使用者就可以利用dispatch发送派发action，到useReducer中根据action.type去更改state，
    useReducer中的state改变，那么相当于 提供者传给使用者的 state也会改变，即所有 使用者接收到的state也会改变
    这样就达到了和redux相同的功能：
        多个组件之间共享状态
        且一个组件可以改变另一个组件的状态
*/
const reducer = ((state,action)=>{
  switch(action.type){
    case "setname":
      return{
        ...state,
        name:action.name
      }
    default:
      return state
  }

})
const data = {
  name:"往往"
}
const PrauseReducer = (props) => {

  const [state,dispatch] = useReducer(reducer,data)
  console.log(props)
  return (
    <div>
      <Father.Provider value={{state,dispatch}}>
          {props.children}
            {/* <Text1></Text1> */}
            {/* <Text2></Text2> */}
      </Father.Provider>
    </div>
  )
}

export default PrauseReducer
