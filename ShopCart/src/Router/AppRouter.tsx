import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Account from "../Components/Account";
import ShopCart from "../Components/ShopCart";
import ToDisplayCartItems from "../Components/ToDisplayCartItems";
import ToDisplaySearchedProduct from "../Components/ToDisplaySearchedProduct";
import ToDisplayWishList from "../Components/ToDisplayWishList";
import DetailsOfProduct from "../Components/DetailsProduct";
import Giftvocher from "../Components/Giftvocher";
 

 
const AppRouter=createBrowserRouter([
    {
         path:'/',
         element:<App/>,
        children:[
            {
                index:true,
                element:<ShopCart/>
               
               
            }
            ,
            {
                path:'/account',
                element:<Account/>
            },
            {
                path:'/cart',
                element:<ToDisplayCartItems/>
            }
            ,
            {
                path:'/searchedProduct',
                element:<ToDisplaySearchedProduct/>
            }
            ,
            {
                path:'/wishlist',
                element:<ToDisplayWishList/>
            },
            {
                path:'/DetailsOfProduct',
                element:<DetailsOfProduct/>
            },
            {
                path:'/giftvocher',
                element:<Giftvocher/>
            }
        ]    
    }
])
 
export default AppRouter
