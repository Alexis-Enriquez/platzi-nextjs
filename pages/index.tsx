import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () =>{

const [product,setProduct] = useState<TProduct[]>([])


useEffect(()=>{
 window
    .fetch('/api/avo')
    .then(response => response.json())
    .then(({data})=>{
        console.log(data)
        setProduct(data)
    })
},[])

   return(
       <div>
           <Navbar/>
           <h1>buenas</h1>
           {
               product.map((prod)=>(
                   <div>{prod.name}</div>
               ))
           }
       </div>
   ) 
}

export default HomePage