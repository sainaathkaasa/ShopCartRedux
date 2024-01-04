import { useLocation, useNavigate } from "react-router-dom"
import '../Styles/DetailsProduct.css'
import { useState } from "react"

const DetailsOfProduct =()=>{


    const loc = useLocation()
    
    
    const item:any = Object.values(loc.state)[0]
    console.log(item);
        
    
    
    return(
        <>
        <div className="details">
            <div className="detailsblock">
                <div className="image">
                    <img src={item.thumbnail} alt="" height={540} width={500}/>
                </div>
                <div className="content">
                    <h1>{item.brand}</h1>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    
                    <p className="moreimages">{item.images.map((val: any)=>(
                        <img src={val} alt="" height={150} width={140}/>
                    ))}</p>
                    <h2>Offer Price : {item.price} $</h2>
                </div>
            </div>

        </div>
        </>
    )
}
export default DetailsOfProduct