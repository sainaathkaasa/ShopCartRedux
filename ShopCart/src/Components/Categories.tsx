import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addProducts } from "../dux/productSlice"
import '../Styles/Categories.css'
const Categories=()=>{
 
    const [products,setProducts]=useState([])
     const dispatch=useDispatch()
 
    useEffect(()=>{
         axios.get("https://dummyjson.com/products")
         .then((response)=>{
           
             setProducts(response.data.products)
         })
         .catch(()=>{
             console.log("error")
         }
     )},[])
       
     dispatch(addProducts(products))
 

    const handleallitems=(linkcategory:string)=>{
         axios.get(`https://dummyjson.com/products/${linkcategory}`)
         .then((response)=>{
            console.log(response.data.products);
           
             dispatch(addProducts(response.data.products))
         })
         .catch(()=>{
             console.log("error")
         })
     
    }
   
 
    const handleChangeSort = (e: any) => {
        let sortedProducts = [...products];
        if (e === "Price") {
            sortedProducts.sort((a:any, b:any) => a.price - b.price)
            setProducts(sortedProducts)
 
            dispatch(addProducts(sortedProducts))
 
        }
        if (e === "A-Z") {
 
 
            sortedProducts.sort((a:any, b:any) => a.title.localeCompare(b.title));
 
            console.log(sortedProducts);
 
            setProducts(sortedProducts)
 
            dispatch(addProducts(sortedProducts))
        }
 
 
    }
 
 
 
     return(
         <>  
         <div className="categories">
             <div >
                 <button className="btn" onClick={()=>{handleallitems("")}}>All items</button>
                 <button className="btn" onClick={()=>{handleallitems("category/smartphones")}}>Smartphones</button>
                 <button className="btn" onClick={()=>{handleallitems("category/laptops")}}>Laptops</button>
                 <button className="btn" onClick={()=>{handleallitems("category/skincare")}}>Skincare</button>
                 <button className="btn" onClick={()=>{handleallitems("category/furniture")}}>Furniture</button>
                 <button className="btn" onClick={()=>{handleallitems("category/mens-shirts")}}>Mens-shirts</button>
                 <button className="btn" onClick={()=>{handleallitems("category/motorcycle")}}>Motorcycle</button>
                 <button className="btn" onClick={()=>{handleallitems("category/mens-shoes")}}>Sneakers</button>
                 <button className="btn" onClick={()=>{handleallitems("category/sunglasses")}}>sunglasses</button>
             </div>
             <div className="sortby_block">
                    <select  onChange={(e) => handleChangeSort(e.target.value)}>
                        <option value="sort By"><p>Sort By</p></option>
                        <option value="Price" >Price</option>
                        <option value="A-Z">A-Z</option>
                    </select>
                </div>
 
         </div>
       
         </>
       
     )
 }
 
export default Categories