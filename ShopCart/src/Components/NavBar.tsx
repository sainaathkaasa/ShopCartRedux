import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { count } from '../dux/cartSlice'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { addProducts, allItems } from '../dux/productSlice'

import { wishListItems } from '../dux/wishListSlice'
import { addToSearchedProduct, foundResults } from '../dux/SearchSlice'
const Navbar = () => {

    const countOfCartItems = useSelector(count)
    const searchProducts = useRef<HTMLInputElement | null>(null)
    const [productToBeSearched, setProductToBeSearched] = useState("")
    const dispatch = useDispatch()
    const handleOnChangeSearchProduct = () => {
        if (searchProducts.current?.value != undefined) {
            setProductToBeSearched(searchProducts.current?.value);

        }
    }
    const allProducts = useSelector(allItems)
    const foundProduct = allProducts.filter((val:any) => {
        return val.title === productToBeSearched
    })
    const handleSearch = () => {
        console.log(foundProduct);
        dispatch(addToSearchedProduct(foundProduct))
    }

    const overallitems = useSelector(allItems)
    const handlesmartphone = (val: string) => {
        const smartphoneitem = allProducts.filter((items:any) => items.category === val)
        dispatch(addProducts(smartphoneitem))

    }

    return (
        <div className="navbar">
            <div className="navbar content1">
                <Link to={'/'}><img src="/shopcart_icon.PNG" alt="" height={50} width={130} /></Link>
            </div>
            <div className="navbar content2">
                <div className="navbar content2--category">
                    <select name="" id="navbar--category" onChange={(e) => handlesmartphone(e.target.value)}>
                        <option value="">Category</option>
                        <option value="smartphones" >Smartphones</option>
                        <option value="laptops">Laptops</option>
                        <option value="skincare">Skincare</option>
                    </select>
                </div>
                <div className="navbar content2--deals">
                    <Link to={'/'} >Deals</Link>
                </div>
                <div className="navbar content2--Delivery">
                    <Link to={'/'}  >Delivery</Link>
                </div>
                <div className="navbar content2--searchbar">
                    <input type="text" placeholder='Search Product' ref={searchProducts} onChange={handleOnChangeSearchProduct} />
                    <Link to={'/searchedProduct'}><i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i></Link>
                </div>
            </div>
            <div className="navbar content3">
                <div className="navbar content3--account">
                    <Link to={'/account'}>

                        <i className="fa-solid fa-user"></i>
                    </Link>
                    <Link to={'/account'}> Account</Link>
                </div>
                <div className="navbar content3--wishlist">
                    <Link to={'/wishlist'}><i className="fa-regular fa-heart"></i></Link>
                    <Link to={'/wishlist'}>Wishlist</Link>
                </div>
                <div className="navbar content3--cart">
                    <div className="countOfCartItems">{countOfCartItems}</div>
                    <Link to={'/cart'}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar