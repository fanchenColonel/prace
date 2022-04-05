import React, {useRef, useEffect, useState } from 'react'

const PrauseRef = () => {

    /* 
        useRef两个作用：
                获取dom元素
                存储变量

    
    */
    const btn = useRef(null)
    const [count,setCount] = useState({name:"ss",age:12})
    const save = useRef({name:"chinese"})
    useEffect(()=>{
        // console.log(btn.current)
        // btn.current.addEventListener('click',()=>{
        //     // console.log(prevCount)
        //     setCount(prevCount=>++prevCount)
        // })
        
    })
   const  change = () =>{

        // setCount(save.current)
        // console.log(save.current)
    }
  return (
    <div>
        <div>{count.name}---</div>
      <button ref={btn} onClick={change}>+1</button>
      
    </div>
  )
}

export default PrauseRef
