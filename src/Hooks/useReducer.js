import React, { useReducer } from "react";

function PraUseReducer() {
    /* 
        useReducer本质上就是一个函数，与redux中的reducer类似

        useReducer()有三个参数，前两个是:reducer,初始值
        useReducer()的返回值是一个数组，数组中有两个值[state,dispatch]

        cosnt [state,dispatch] = useReducer(reducer,init)

        state和dispatch的关系像  useState中的 count setCount

        
    */

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "setname":
                return {
                    ...state,
                    name: action.name
                }
            default:
                return state
        }
    }, { name: "11", age: 12 })
    return (
        <>
            <div>{state.name}</div>
            <button onClick={() => {
                dispatch({
                    type: "setname",
                    name: "22"
                })
            }}>setName</button>
        </>
    )
}

export default PraUseReducer 