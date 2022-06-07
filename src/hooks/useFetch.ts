import axios from "axios"
import { useState, useEffect } from "react"

//fetch the endpoint given and set the date in the state given
const useFetch = (URLAPI:string) =>{
    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(URLAPI).then(
            function(res:any){
                if(res.data){setData(res.data)}else(setData(res))
            }
        )
    }, []) 
    return [data]
};

export default useFetch;

