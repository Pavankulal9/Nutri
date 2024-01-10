import { useEffect, useState } from "react"

export const useDebounce = (value,delay=800)=>{
    const [debouceData,setDebounceData] =useState(value);
    useEffect(()=>{
        const timeout =setTimeout(()=>{
            setDebounceData(value);
        },delay);

        return()=> clearTimeout(timeout);
    },[delay,value]);

    return debouceData;
}