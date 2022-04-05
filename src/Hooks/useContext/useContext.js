import React,{useState} from "react";
import Children from "./Children";
import { Father } from "./Father";

function PraUseContext(){
    /*
        useContext的使用
            就是类似 context，
            提供者：使用 createContext创建一个父容器组件  let Father = createContext()
            使用者：使用 useContext(父) 接收父容器传递的数据  const count = useConext(Father)

        实际使用的时候：需要提供者，包裹使用者，并使用value 传递一些数据


        useContext的使用：
                提供者单独创建一个组件，使用createContext()创建好盒子
                使用者可以有很多，只负责引入提供者，并且使用useContext接收数据

                使用时会将提供者和使用者，整合到一起，
                    即提供者把使用这包裹起来，并传递数据
                
                createContext创建好一个盒子，

    */


    const [count,setCount] = useState(0)
    return(
        <>
            <Father.Provider value={count}>
                <Children></Children>
            </Father.Provider>
            <hr />
            <button onClick={()=>setCount(count + 1)}>+1</button>
        </>
    )
}

export default PraUseContext