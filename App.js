import React,{useState} from 'react';


export default function App() {
 const [counter,setCounter]= useState(0)
 return(
   <div>
     <button
     onClick={()=>{
       setCounter(counter+1)
     }}
     >+</button>
     <p>{counter}</p>
     <button
     onClick={()=>{
       setCounter(counter-1)
     }}
     >-</button>




   </div>


 )
}
