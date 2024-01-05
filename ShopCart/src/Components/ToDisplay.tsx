import { useDispatch, useSelector } from "react-redux";
import { allItems } from "../dux/productSlice";
import '../Styles/ToDisplay.css'
import { addToCart } from "../dux/cartSlice";
import { addTowishList } from "../dux/wishListSlice";
import { useNavigate } from "react-router-dom";
const ToDisplay = () => {
    const products = useSelector(allItems);
    const nav = useNavigate()
    const dispatch = useDispatch()
    const handleHeart=(val:any)=>
    {
            dispatch(addTowishList(val))
       
    }

    const Detailshandle=(val:any)=>{
        nav('/DetailsOfProduct',{state:{val}})
    }

    
    const handleAddToCartClick = (val: any) => {
        dispatch(addToCart(val))
        // const added = document.getElementById('addtocartbut')
        // added.style.backgroundColor='red'

        
    }
 
    const entries = Object.entries(products);
    return (
 
        <>
            <div className="toDisplayProducts">
                {
                    entries.map((val: any) => (
 
 
                        <div className="proudct">
                            <div className="wishlist--heart"><i className="fa-solid fa-heart" onClick={()=>handleHeart(val[1])}  ></i></div>
                            <div className="thumbnail">
                                 
                                <img src={val[1].thumbnail} height={200} width={270} onClick={()=>Detailshandle(val[1])} />
                                
                            </div>
                            <div className="info">
                           
                                <p><b>{val[1].title}</b></p>
                                <p><b></b>{val[1].description}</p>
                                <p><b>{val[1].price}  <i className="fa-solid fa-dollar-sign"></i></b></p>
                               
                            </div>
                            <div className="cart--but">
 
                                <div className="button"><button id="addtocartbut" onClick={() => handleAddToCartClick(val[1])}  >Add To Cart</button></div>
                            </div>
                        </div>
                    ))
                }
            </div>
 
        </>
    )
}
export default ToDisplay