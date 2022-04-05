import React, { useContext } from "react";
import {Father} from "./Father";

function Children (){
    const count1 = useContext(Father)
    return(
        <>
            子组件：{count1}
        </>
    )

}

export default Children