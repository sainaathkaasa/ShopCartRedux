import { useDispatch, useSelector } from "react-redux"
import { wishListItems } from "../dux/wishListSlice"
import { addToCart } from "../dux/cartSlice";
import { useNavigate } from "react-router-dom";
 
const ToDisplayWishList =()=>{

    const nav = useNavigate()
    const wishList=useSelector(wishListItems)
    const dispatch = useDispatch()
 
    const handleAddToCartClick = (val: any) => {
        dispatch(addToCart(val))
 
    }

    const Detailshandle=(val:any)=>{
        nav('/DetailsOfProduct',{state:{val}})
    }
    return (
        <>
            <div>
                <h1>Your wish List</h1>
            </div>
            <div className="toDisplayProducts">
                {
                    wishList.map((val: any) => (
 
                       
                       
                        <div className="proudct">
                            <div className="thumbnail">
                                <img src={val.thumbnail} height={200} width={270} onClick={()=>Detailshandle(val)}/>
                            </div>
                            {/* <div><button >X</button></div> */}
                            <div className="info">
 
                                <p><b>{val.title}</b></p>
                                <p><b></b>{val.description}</p>
                                <p><b>{val.price}  <i className="fa-solid fa-dollar-sign"></i></b></p>
 
                            </div>
                            <div className="cart--but">
 
                                <div className="button"><button onClick={() => handleAddToCartClick(val)}  >Add To Cart</button></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};
 
export default ToDisplayWishList