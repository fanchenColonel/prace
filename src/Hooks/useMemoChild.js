import { useMemo } from "react"

export default ({c,d})=>{

    let res = useMemo(()=>{
        return {c,d}
    },[c])
    return (
        <div>
            <div>count:{res.c}</div>
            <div>num:{res.d}</div>
        </div>
    )
}