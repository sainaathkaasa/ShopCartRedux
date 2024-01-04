// import { useRef, useState } from 'react'

 
// const packSize=24;
// const MRP=10  
// function App() {
 
//   const shipperqty=useRef<HTMLInputElement | null>(null)
//   const orderaty=useRef<HTMLInputElement | null> (null)
 
//   const [amount,setAmount]=useState(0)
//   console.log(shipperqty.current?.value);
 
 
//   const handleShipperQunatityChange=()=>{
//     const a=parseInt(shipperqty.current?.value)
   
//     const result=a *packSize* MRP
//     orderaty.current.value=a*packSize
//     setAmount(result)
 
//   }
 
 
//   const handleOrderQuantityChange=()=>{
//   const  a=  parseInt(orderaty.current?.value)
//   shipperqty.current.value=(a/ packSize)
//   const result=a *MRP
//   setAmount(result)
//   }
//   return (
//     <>
//     Shipper Quantity:  <input type="text"  ref={shipperqty} onChange={handleShipperQunatityChange}/>
//     <br />
//     <br />
//     Order Quantity :  <input type='text' ref={orderaty} onChange={handleOrderQuantityChange}/>
//     <br />
//     <br />
//     Amount :{amount}
//     </>
//   )
// }
 
// export default App