import React, { useMemo, useState } from "react";
import Child from "./useMemoChild"
function PraUseMemo() {
    /* 
        useMemo主要是用来控制 当state或者父组件传递过来的属性发生改变后，组件是否要更新，类似class组件中的shouldUpdatecomponent,
        用来避免重复渲染，以此来提升性能
        
        useMemo就是用的 memoization 来提升性能
        memoization 是js中的一种缓存技术
        如果我们有一个CPU密集型操作，我们可以通过将初始操作的结果存储在缓存中来优化使用，
        如果操作 必然再次执行，我们将不再麻烦我们的CPU，因为这个结果存储在某个地方，我们就可以简单的返回结果

        比如useMemo中：第二个参数数组中可以选择监控 num 数据，当num变化时，useMemo会执行，组件也会相应的显示更新
        而未被监控的count数据，当触发改变count的操作时，useMemo不会执行，组件并不会更新，但count数据已经发生了改变，并存储了起来，
        只不过useMemo控制组件不去更新。如果此时触发改变num的操作，useMemo就会执行，组件进行更新，此时不止num更新，之前被缓存起来的
        count也会更新。

        useMemo和useEffect类似：
          1.  useMemo是组件挂载的过程中执行，useEffect是在组件挂载后执行。
            拥有两个参数：useMemo(回调函数，[])
            无论数组写不写，useMemo在第一次渲染的时候都会执行
            第二个参数数组可以不写：不写的时候默认监控所有的数据，任何数据变化，useMemo都会执行
                当数组为空的时候，useMemo不执行
                当数组中为某一个特定的state时，只有这个state改变后，useMemo才会执行
    

        理解useMemo的缓存技术：
                需要一个变量来接收useMemo缓存的内容 ，所以正确使用useMemo的姿势是：
                let 变量 =useMemo(()=>{
                    return ...
                },[])
                
    */
   const [count,setCount] = useState(0)
   const [num,setNum] = useState(0)
    let res = useMemo(()=>{
        console.log("ss")
        return {count,num}
    },[count])


    return (
        <div>
            <div>{res.count}</div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <div>{res.num}</div>
            <button onClick={()=>setNum(num+1)}>+</button>

            <div>子组件</div>
            <Child d={num} c = {count}></Child>
        </div>
    )
}
export default PraUseMemo