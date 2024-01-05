import { useDispatch, useSelector } from "react-redux"
import { foundResults } from "../dux/SearchSlice"
import { addToCart } from "../dux/cartSlice";
import { addTowishList } from "../dux/wishListSlice";
 
const ToDisplaySearchedProduct = () => {
 
    const dispatch = useDispatch()
    const handlewish=(val:any)=>
    {
            dispatch(addTowishList(val))
       
    }
    const handleAddToCart = (val: any) => {
        dispatch(addToCart(val))
 
    }
    const searchResults = useSelector(foundResults)
    return (
        <>
            <div>
                <h1>Your Search Results</h1>
            </div>
            <div className="details">
                {
                    searchResults.map((val: any) => (
 
                       
                       
                        <div className=" detailsblock">
                            <div className="wishlist--heart"><i className="fa-solid fa-heart" onClick={() => handlewish(val)}  ></i></div>
                            <div className="image">
                                <img src={val.thumbnail} height={200} width={270} />
                            </div>
                            <div className="content">
 
                                <p><b>{val.title}</b></p>
                                <p><b></b>{val.description}</p>
                                <p><b>{val.price}  <i className="fa-solid fa-dollar-sign"></i></b></p>
 
                            </div>
                            <div className="cart--but">
 
                                <div className="button"><button onClick={() => handleAddToCart(val)}  >Add To Cart</button></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default ToDisplaySearchedProduct