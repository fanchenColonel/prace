import React,{useEffect, useState} from "react";

function PraUseEffect (){
    /* 
        1.useEffect本身是一个函数，它的功效聚合了class组件的三个生命周期函数的功效：
            componentDidMount(首次渲染后)，componentDidUpdate(组件更新后)，componentWillUnmount(组件卸载后)
            也就是说原本在这三个钩子函数中可以做的事情，现在通通可以在useEffect中做
        2.副作用（代指：DOM操作，组件的更新，数据的获取）也就是在生命周期钩子中常做的事情。
        3.useEffect为什么要写在函数组件内部？ 因为这方便使用函数组件内部的数据（state，props）采用的是闭包
        4.无阻塞更新：是指useEffect是在组件挂载完成后才会执行，所以无论useEffect中的操作是什么，以及这个操作成功与否，
        都不影响组件的更新，不影响页面的显示。所以称之为无阻塞更新
        5.useEffect（回调函数，[]）第二个参数为数组，可写可不写，第二个参数的功能是决定useEffect什么时候执行:
            无论有没有数组，首次渲染的时候，useEffect都会执行。
            当不写数组时，默认监控所有的state，即只要有组件更新，useEffect就会执行
            如果是空数组，则useEffect不执行
            当数组中写了某一个state时，则只有这个state改变时，useEffect才会执行
        6.useEffect可以写多个
        */

    const [count,setCount] = useState(1)
    useEffect(()=>{
        console.log({count})
    })

   
    return (
        <div>
            <div>{count}</div>
            
            <button onClick={()=>setCount(count +1)}>+</button>
            
        </div>
    )
}
export default PraUseEffect