import React,{useState} from 'react'


export default function Funactionalstate() {
    const[counter,setcounterdata] = useState(1);
    const[total,setTotal] = useState(200)
    const[price,SetPrice]=useState(200)
    const[message,Setmessage] = useState()

   const IncreseCounter = () =>
    {   console.log("Now click done..")
        
        setTotal(counter*price)
       
        if(counter < 5)
        {
            setcounterdata(counter+1)
        }
        else 
        {
            Setmessage('out of stock')
        }

    }
    const sum = (a,b)=>{
       let ans = a + b
        console.log("sum ans is " + ans)

    }
    const age = () =>
    {
        var year= 1994
        
    }
    return (
        <div>
        {message}
        {counter}
        
        <span style={{color:'red'}}>{total}</span>
         <button onClick={()=>IncreseCounter()}>+</button>
         <button onClick={()=>setcounterdata(counter-1)}>-</button>
         <button onClick={()=>sum(4,5)}>Sum</button>
         <button>Calculate age</button>

        </div>
    )
}
