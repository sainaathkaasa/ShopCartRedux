import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Fottergiftbar.css'
const Footergiftbar = () => {



    return (
        <>
            <div className='footergift'>
                <div><Link to={'/'}><i className="fa-solid fa-bag-shopping"></i>Become Seller</Link></div>
                <div><Link to={'/giftvocher'}><i className="fa-solid fa-gift"></i>Gift Card</Link></div>
                <div><Link to={'/'}><i className="fa-solid fa-question"></i>Help Center</Link></div>
                <div><Link to={'/'}>Terms of Services</Link></div>
                <div><Link to={'/'}>Privacy & policy</Link></div>
                <div><Link to={'/'}>All Right reserved</Link></div>
            </div>
        </>

    )
}

export default Footergiftbar