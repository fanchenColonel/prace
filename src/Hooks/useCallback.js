import React, { useCallback, useState } from "react";

function PraUseCallback(){
    /* 
        作用是：避免组件重复渲染，提高性能,
        和useMemo一样都可以控制组件何时更新
        和useMemo都用到了缓存技术,只不过useMemo缓存的数据，useCallback缓存的是一个函数
        只要是缓存的内容，都需要一个变量进行接收
        const callBack = useCallback()
        因为缓存的是个函数所以： callBack()  可以直接执行

        有两个参数：一个回调函数一个数组 useCallback(()=>{},[可以不写])
        同样的首次渲染会执行

        内部存储技术和useMemo类似：
            当监控num的时候，只有num改变，useCallback才会执行，和它返回什么无关
            如果num变化，返回的count就是当前count的值
            如果count一直变化，但num没有变化,useCallback不会执行，什么也不会返回
        

    */
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)

    let callBack = useCallback(()=>{
        console.log("num",count)
        return count
    },[num])
    return(
        <div>
            <div>count:{count}</div>
            <div>num:{num}</div>
            <div>callBack:{callBack()}</div>
            <button onClick={()=>setCount(count + 1)}>count+</button>
            <button onClick={()=>setNum(num + 1)}>num+</button>

        </div>
    )
}
export default PraUseCallback